import { useState, useEffect, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  Plus,
  ExternalLink,
  X,
  Phone,
  Mail,
  Truck,
  Users,
  Package,
  FileText,
  Edit3,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Upload,
  Check,
  Trash2,
  RotateCcw,
  Sparkles,
  MapPin,
  Clock,
  Globe,
  Eye,
  CheckCircle2,
  ZoomIn,
  Building2,
  ShieldCheck,
  Layers,
  Wrench,
  Grid,
  SlidersHorizontal,
  Maximize2,
  Columns,
  LayoutGrid,
  Recycle,
  ArchiveRestore,
  AlertTriangle,
} from "lucide-react";
import {
  CRMClient,
  ExtendedEquipment,
  SiteCopyContent,
  getStoredCRMClients,
  saveStoredCRMClients,
  getStoredEquipment,
  saveStoredEquipment,
  getStoredSiteCopy,
  saveStoredSiteCopy,
  resetStoredSiteCopy,
  RecycleBinItem,
  getStoredRecycleBin,
  saveStoredRecycleBin,
  toRecycleClient,
  toRecycleProduct,
} from "@/lib/cms-store";
import { WhatsAppIcon } from "@/components/ui/official-badges";
import { whatsappUrl } from "@/data/site";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Operations & CRM Backoffice · Omnicore Harare" },
      { name: "description", content: "Client CRM, machinery inventory, and site content management." },
      { property: "og:title", content: "Backoffice · Omnicore Harare" },
    ],
  }),
  component: AdminBackoffice,
});

type Tab = "crm" | "products" | "cms" | "hire" | "recycle";

const STAGES: CRMClient["stage"][] = [
  "Lead",
  "Discovery",
  "Tender Quoted",
  "Negotiation",
  "Won",
  "Lost",
];

const PROVINCES = [
  "All Zimbabwe",
  "Harare",
  "Mashonaland West",
  "Mashonaland Central",
  "Mashonaland East",
  "Midlands",
  "Matabeleland North",
  "Matabeleland South",
  "Manicaland",
  "Masvingo",
];

export type YardPhotoPreset = {
  label: string;
  src: string;
  category: "mining" | "hire" | "farming" | "hardware" | "industry";
  spec: string;
  badge: string;
};

const YARD_PHOTO_PRESETS: YardPhotoPreset[] = [
  { label: "Jaw Crusher", src: "/images/jaw-crusher.jpg", category: "mining", spec: "5–15 TPH Primary Crush", badge: "Gold Ore Circuit" },
  { label: "Ball Mill", src: "/images/ball-mill.jpg", category: "mining", spec: "Continuous Wet Grinding", badge: "Milling Circuit" },
  { label: "Mining Hammer Mill", src: "/images/hammer-mill.jpg", category: "mining", spec: "1.5–3.0 TPH High Speed", badge: "Fine Reduction" },
  { label: "Gold Separator", src: "/images/gold-separator.jpg", category: "mining", spec: "Centrifugal Concentrator", badge: "Free Gold" },
  { label: "Trommel Wash Plant", src: "/images/trommel.jpg", category: "mining", spec: "15–30 TPH Scrub & Screen", badge: "Alluvial Gold" },
  { label: "Shaking Table", src: "/images/shaking-table.jpg", category: "mining", spec: "6-S Deck Gravity Separator", badge: "Concentrate Clean" },
  { label: "Slurry Pump", src: "/images/slurry-pump.jpg", category: "mining", spec: "High-Head Heavy Slurry", badge: "Tailings / Circuit" },
  { label: "CAT 320D Excavator", src: "/images/excavator.jpg", category: "hire", spec: "20-Tonne Digger · 1.0m³ Bucket", badge: "Wet / Dry Fleet" },
  { label: "37m Concrete Boom Pump", src: "/images/concrete-pump.jpg", category: "hire", spec: "37m Vertical · 125m³/h", badge: "Boom Pump Fleet" },
  { label: "Self-Loading Mixer", src: "/images/self-loading-mixer.jpg", category: "hire", spec: "4.0m³ Batch · 4x4 Off-Road", badge: "Mobile Batching" },
  { label: "TLB Backhoe", src: "/images/tlb.jpg", category: "hire", spec: "4x4 Turbo Heavy Backhoe", badge: "Trench & Civils" },
  { label: "Motor Grader", src: "/images/grader.jpg", category: "hire", spec: "140hp · 12ft Heavy Blade", badge: "Haul Roads" },
  { label: "Farm Hammer Mill", src: "/images/farm-hammer-mill.jpg", category: "farming", spec: "Maize & Grain 1–2 TPH", badge: "Stockfeed Milling" },
  { label: "Feed Mixer (Vertical)", src: "/images/feed-mixer.jpg", category: "farming", spec: "500kg – 1-Tonne Batch", badge: "Poultry & Dairy" },
  { label: "Feed Mixer 3-Tonne", src: "/images/feed-mixer-3t.jpg", category: "farming", spec: "3-Tonne Commercial Batch", badge: "Commercial Feedlot" },
  { label: "Ice Block Plant", src: "/images/ice-block.jpg", category: "farming", spec: "1–5 Tonne / 24h Blocks", badge: "Cold Chain Storage" },
  { label: "Electric Fence Machine", src: "/images/electric-fence.jpg", category: "hardware", spec: "Automated Diamond Mesh", badge: "Wire Weaving" },
  { label: "Barbed Wire Machine", src: "/images/barbed-wire.jpg", category: "hardware", spec: "High-Speed Dual Strand", badge: "Perimeter Security" },
  { label: "Diesel Fence Machine", src: "/images/diesel-fence.jpg", category: "hardware", spec: "Independent Generator Drive", badge: "Off-Grid Production" },
  { label: "Double-Twist Fence", src: "/images/double-fence.jpg", category: "hardware", spec: "Heavy Hexagonal Mesh", badge: "Mining & Game Fence" },
  { label: "3-Phase Electric Motor", src: "/images/electric-motor.jpg", category: "industry", spec: "7.5kW to 55kW 380V", badge: "Heavy Duty Drive" },
  { label: "Diesel Generator Kit", src: "/images/generator.jpg", category: "industry", spec: "15kVA to 150kVA Silent", badge: "Standby Power" },
  { label: "Industrial Air Compressor", src: "/images/compressor.jpg", category: "industry", spec: "8–12 Bar Heavy Duty", badge: "Pneumatic Power" },
];

function RecordPager({
  index,
  total,
  title,
  subtitle,
  onBack,
  backLabel,
  onPrev,
  onNext,
}: {
  index: number;
  total: number;
  title: string;
  subtitle?: string;
  onBack: () => void;
  backLabel: string;
  onPrev: () => void;
  onNext: () => void;
}) {
  const atStart = index <= 0;
  const atEnd = index < 0 || index >= total - 1;
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3 min-w-0">
        <button
          type="button"
          onClick={onBack}
          className="mt-0.5 inline-flex h-11 shrink-0 items-center gap-1 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7]"
        >
          <ChevronLeft className="size-4" />
          {backLabel}
        </button>
        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold tracking-tight text-[#1D1D1F]">{title}</h2>
          {subtitle ? <p className="truncate text-xs text-[#86868B]">{subtitle}</p> : null}
        </div>
      </div>
      <div className="flex items-center gap-1.5 self-end sm:self-auto">
        <button
          type="button"
          onClick={onPrev}
          disabled={atStart}
          className="inline-flex h-11 items-center gap-1 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7] disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="size-4" />
          Previous
        </button>
        <span className="min-w-16 px-2 text-center text-xs font-medium text-[#6E6E73]">
          {index < 0 ? "—" : `${index + 1} of ${total}`}
        </span>
        <button
          type="button"
          onClick={onNext}
          disabled={atEnd}
          className="inline-flex h-11 items-center gap-1 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7] disabled:pointer-events-none disabled:opacity-30"
        >
          Next
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}

function RowCheck({
  checked,
  indeterminate,
  onChange,
  label,
}: {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (next: boolean) => void;
  label: string;
}) {
  return (
    <input
      type="checkbox"
      aria-label={label}
      checked={checked}
      ref={(el) => {
        if (el) el.indeterminate = Boolean(indeterminate && !checked);
      }}
      onChange={(e) => onChange(e.target.checked)}
      className="size-4 shrink-0 cursor-pointer rounded border-black/25 accent-[#1D1D1F]"
    />
  );
}

function ConfirmModal({
  title,
  body,
  confirmLabel,
  tone = "danger",
  onCancel,
  onConfirm,
}: {
  title: string;
  body: string;
  confirmLabel: string;
  tone?: "danger" | "neutral";
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-black/[0.08] bg-white p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-3">
          <div
            className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${
              tone === "danger" ? "bg-red-50 text-red-600" : "bg-black/[0.05] text-[#1D1D1F]"
            }`}
          >
            {tone === "danger" ? <AlertTriangle className="size-5" /> : <Recycle className="size-5" />}
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-[#1D1D1F]">{title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-[#6E6E73]">{body}</p>
          </div>
        </div>
        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex h-11 items-center rounded-full border border-black/[0.08] bg-white px-4 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className={`inline-flex h-11 items-center rounded-full px-4 text-xs font-semibold text-white ${
              tone === "danger" ? "bg-red-600 hover:bg-red-700" : "bg-[#1D1D1F] hover:bg-black"
            }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

function formatBinDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function stageChipClass(stage: CRMClient["stage"]) {
  if (stage === "Won") return "bg-[#E8F8EE] text-[#1B833E]";
  if (stage === "Tender Quoted") return "bg-[#FFF4E5] text-[#B25E00]";
  if (stage === "Negotiation") return "bg-purple-50 text-purple-700";
  if (stage === "Lead") return "bg-blue-50 text-blue-700";
  if (stage === "Lost") return "bg-red-50 text-red-700";
  return "bg-black/[0.05] text-[#1D1D1F]";
}

export function AdminBackoffice() {
  const [activeTab, setActiveTab] = useState<Tab>("crm");
  const [clients, setClients] = useState<CRMClient[]>(getStoredCRMClients);
  const [equipmentList, setEquipmentList] = useState<ExtendedEquipment[]>(getStoredEquipment);
  const [siteCopy, setSiteCopy] = useState<SiteCopyContent>(getStoredSiteCopy);

  // CRM States
  const [crmSearch, setCrmSearch] = useState("");
  const [crmStageFilter, setCrmStageFilter] = useState<string>("All");
  const [crmProvinceFilter, setCrmProvinceFilter] = useState<string>("All Zimbabwe");
  const [peekClientId, setPeekClientId] = useState<string | null>(null);
  const [profileClientId, setProfileClientId] = useState<string | null>(null);
  const [clientDraft, setClientDraft] = useState<CRMClient | null>(null);
  const [showAddClientModal, setShowAddClientModal] = useState(false);
  const [newClientName, setNewClientName] = useState("");
  const [newClientOrg, setNewClientOrg] = useState("");
  const [newClientPhone, setNewClientPhone] = useState("+263 ");
  const [newClientEmail, setNewClientEmail] = useState("");
  const [newClientLocation, setNewClientLocation] = useState("Harare");
  const [newClientProvince, setNewClientProvince] = useState("Harare");
  const [newClientService, setNewClientService] = useState("Mining Equipment");
  const [newClientInterest, setNewClientInterest] = useState("");
  const [newClientIntent, setNewClientIntent] = useState<CRMClient["intent"]>("Buy");
  const [newClientDealValue, setNewClientDealValue] = useState("12000");
  const [newClientPriority, setNewClientPriority] = useState<CRMClient["priority"]>("High");
  const [newClientNotes, setNewClientNotes] = useState("");
  const [newTimelineNote, setNewTimelineNote] = useState("");

  // Product States
  const [productSearch, setProductSearch] = useState("");
  const [productCategoryFilter, setProductCategoryFilter] = useState("all");
  const [peekProductId, setPeekProductId] = useState<string | null>(null);
  const [productProfileOpen, setProductProfileOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ExtendedEquipment | null>(null);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProdName, setNewProdName] = useState("");
  const [newProdCategory, setNewProdCategory] = useState<ExtendedEquipment["category"]>("mining");
  const [newProdThroughput, setNewProdThroughput] = useState("");
  const [newProdPower, setNewProdPower] = useState("");
  const [newProdPrice, setNewProdPrice] = useState("");
  const [newProdBlurb, setNewProdBlurb] = useState("");
  const [newProdImage, setNewProdImage] = useState("/images/jaw-crusher.jpg");

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>, isEditing = false) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 8 * 1024 * 1024) {
      triggerToast("Please choose an image under 8MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (isEditing && editingProduct) {
        setEditingProduct({ ...editingProduct, image: result });
      } else {
        setNewProdImage(result);
      }
      triggerToast("Photo uploaded successfully!");
    };
    reader.readAsDataURL(file);
  }

  function handleCreateProduct(e: React.FormEvent) {
    e.preventDefault();
    if (!newProdName.trim()) return;
    const newId = newProdName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const newEquip: ExtendedEquipment = {
      id: newId,
      name: newProdName.trim(),
      category: newProdCategory,
      intent: newProdCategory === "hire" ? "hire" : "sale",
      blurb: newProdBlurb.trim() || "Heavy machinery engineered for Zimbabwean site conditions.",
      image: newProdImage || "/images/jaw-crusher.jpg",
      imageAlt: newProdName,
      spec: newProdThroughput.trim() || "Heavy-duty specification",
      sku: `OMNI-${newProdCategory.toUpperCase().slice(0, 3)}-${Math.floor(100 + Math.random() * 900)}`,
      stockStatus: "In Yard Cranborne",
      throughput: newProdThroughput.trim() || "Site Rated",
      powerOption: newProdPower.trim() || "Electric 3-Phase / Diesel",
      priceUSD: newProdPrice.trim() || "Tender on Request",
      condition: "New",
      warrantyMonths: 12,
      detailedNotes: "Full parts backup and field commissioning from Cranborne yard.",
    };
    const updated = [newEquip, ...equipmentList];
    setEquipmentList(updated);
    saveStoredEquipment(updated);
    setShowAddProductModal(false);
    triggerToast(`Added ${newEquip.name} to catalogue`);
    setNewProdName("");
    setNewProdThroughput("");
    setNewProdPower("");
    setNewProdPrice("");
    setNewProdBlurb("");
    setNewProdImage("/images/jaw-crusher.jpg");
  }

  // CRM Pagination
  const [crmPage, setCrmPage] = useState(1);
  const [crmPageSize, setCrmPageSize] = useState(5);

  // Product Pagination
  const [productPage, setProductPage] = useState(1);
  const [productPageSize, setProductPageSize] = useState(6);

  // CMS Form State
  const [cmsForm, setCmsForm] = useState<SiteCopyContent>(siteCopy);
  const [cmsCategory, setCmsCategory] = useState<"all" | "hero" | "yard" | "contact" | "hours" | "divisions" | "about" | "social">("hero");
  const [cmsSearch, setCmsSearch] = useState("");
  const [cmsPreviewTab, setCmsPreviewTab] = useState<"hero" | "yard" | "whatsapp" | "about" | "divisions" | "footer">("hero");
  const [cmsLayoutMode, setCmsLayoutMode] = useState<"full" | "split">("full");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [presetCategoryFilter, setPresetCategoryFilter] = useState<string>("all");
  const [newPresetCategoryFilter, setNewPresetCategoryFilter] = useState<string>("all");
  const [photoPresetSearch, setPhotoPresetSearch] = useState("");
  const [newPhotoPresetSearch, setNewPhotoPresetSearch] = useState("");
  const [zoomedPhoto, setZoomedPhoto] = useState<{ src: string; title: string } | null>(null);

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Selection, recycle bin, confirmations
  const [recycleBin, setRecycleBin] = useState<RecycleBinItem[]>(getStoredRecycleBin);
  const [selectedClientIds, setSelectedClientIds] = useState<string[]>([]);
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [selectedBinIds, setSelectedBinIds] = useState<string[]>([]);
  const [recycleFilter, setRecycleFilter] = useState<"all" | "client" | "product">("all");
  const [recycleSearch, setRecycleSearch] = useState("");
  const [pendingAction, setPendingAction] = useState<
    | { type: "delete-clients"; ids: string[] }
    | { type: "delete-products"; ids: string[] }
    | { type: "restore"; binIds: string[] }
    | { type: "destroy"; binIds: string[] }
    | { type: "empty-bin" }
    | null
  >(null);

  useEffect(() => {
    // Listen for cross-tab or component updates
    function handleStorageSync() {
      setClients(getStoredCRMClients());
      setEquipmentList(getStoredEquipment());
      setSiteCopy(getStoredSiteCopy());
      setCmsForm(getStoredSiteCopy());
      setRecycleBin(getStoredRecycleBin());
    }
    window.addEventListener("omnicore-crm-updated", handleStorageSync);
    window.addEventListener("omnicore-equipment-updated", handleStorageSync);
    window.addEventListener("omnicore-copy-updated", handleStorageSync);
    window.addEventListener("omnicore-recycle-updated", handleStorageSync);
    return () => {
      window.removeEventListener("omnicore-crm-updated", handleStorageSync);
      window.removeEventListener("omnicore-equipment-updated", handleStorageSync);
      window.removeEventListener("omnicore-copy-updated", handleStorageSync);
      window.removeEventListener("omnicore-recycle-updated", handleStorageSync);
    };
  }, []);

  function triggerToast(msg: string) {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  }

  // CRM Handlers
  function updateClientStage(id: string, stage: CRMClient["stage"]) {
    const updated = clients.map((c) => {
      if (c.id === id) {
        const newTimeline = [
          {
            date: "Today",
            note: `Deal stage updated to "${stage}"`,
            author: "Technical Desk",
          },
          ...c.timeline,
        ];
        return { ...c, stage, timeline: newTimeline };
      }
      return c;
    });
    setClients(updated);
    saveStoredCRMClients(updated);
    if (clientDraft?.id === id) {
      const next = updated.find((c) => c.id === id);
      if (next) setClientDraft(next);
    }
    triggerToast(`Stage updated to ${stage}`);
  }

  function handleAddTimelineNote() {
    if (!newTimelineNote.trim() || !clientDraft) return;
    const noteEntry = {
      date: "Today",
      note: newTimelineNote.trim(),
      author: "Technical Desk",
    };
    const updated = clients.map((c) =>
      c.id === clientDraft.id ? { ...c, timeline: [noteEntry, ...c.timeline] } : c,
    );
    setClients(updated);
    saveStoredCRMClients(updated);
    setClientDraft((prev) => (prev ? { ...prev, timeline: [noteEntry, ...prev.timeline] } : null));
    setNewTimelineNote("");
    triggerToast("Activity note logged");
  }

  function handleCreateClient(e: React.FormEvent) {
    e.preventDefault();
    if (!newClientName.trim()) return;
    const valNum = parseFloat(newClientDealValue.replace(/[^0-9.]/g, "")) || 0;
    const newRecord: CRMClient = {
      id: `CRM-${Math.floor(1000 + Math.random() * 9000)}`,
      name: newClientName.trim(),
      organization: newClientOrg.trim() || "Private Syndicate / Farm",
      phone: newClientPhone.trim(),
      email: newClientEmail.trim() || "client@omnicore.zw",
      location: newClientLocation.trim() || "Harare",
      province: newClientProvince,
      service: newClientService,
      equipmentInterest: newClientInterest.trim() || "Heavy machinery requirement",
      intent: newClientIntent,
      stage: "Lead",
      priority: newClientPriority,
      dealValue: valNum,
      dealValueDisplay: `$${valNum.toLocaleString()}`,
      lastContact: "Just now",
      nextFollowUp: "Tomorrow",
      notes: newClientNotes.trim() || "New inquiry logged directly into Harare backoffice.",
      timeline: [
        {
          date: "Today",
          note: "Client record created in Omnicore CRM.",
          author: "Technical Desk",
        },
      ],
    };
    const updated = [newRecord, ...clients];
    setClients(updated);
    saveStoredCRMClients(updated);
    setShowAddClientModal(false);
    setPeekClientId(null);
    setProfileClientId(newRecord.id);
    setClientDraft(newRecord);
    triggerToast(`Client ${newRecord.name} added to pipeline`);
    // Reset
    setNewClientName("");
    setNewClientOrg("");
    setNewClientInterest("");
    setNewClientNotes("");
  }

  function handleSaveClient(e: React.FormEvent) {
    e.preventDefault();
    if (!clientDraft) return;
    const valNum = Number(clientDraft.dealValue) || 0;
    const next: CRMClient = {
      ...clientDraft,
      dealValue: valNum,
      dealValueDisplay: `$${valNum.toLocaleString()}`,
    };
    const updated = clients.map((c) => (c.id === next.id ? next : c));
    setClients(updated);
    saveStoredCRMClients(updated);
    setClientDraft(next);
    triggerToast(`Saved ${next.name}`);
  }

  // Product Handlers
  function handleSaveProduct(e: React.FormEvent) {
    e.preventDefault();
    if (!editingProduct) return;
    const updated = equipmentList.map((item) =>
      item.id === editingProduct.id ? editingProduct : item,
    );
    setEquipmentList(updated);
    saveStoredEquipment(updated);
    triggerToast(`Updated ${editingProduct.name}`);
  }

  function handleDeleteProduct(id: string) {
    setPendingAction({ type: "delete-products", ids: [id] });
  }

  function moveClientsToBin(ids: string[]) {
    if (ids.length === 0) return;
    const idSet = new Set(ids);
    const toBin = clients.filter((c) => idSet.has(c.id));
    const remaining = clients.filter((c) => !idSet.has(c.id));
    const nextBin = [...toBin.map(toRecycleClient), ...recycleBin];
    setRecycleBin(nextBin);
    saveStoredRecycleBin(nextBin);
    setClients(remaining);
    saveStoredCRMClients(remaining);
    setSelectedClientIds((prev) => prev.filter((id) => !idSet.has(id)));
    if (profileClientId && idSet.has(profileClientId)) {
      setProfileClientId(null);
      setClientDraft(null);
    }
    if (peekClientId && idSet.has(peekClientId)) setPeekClientId(null);
    triggerToast(
      toBin.length === 1
        ? `${toBin[0].name} moved to recycle bin`
        : `${toBin.length} clients moved to recycle bin`,
    );
  }

  function moveProductsToBin(ids: string[]) {
    if (ids.length === 0) return;
    const idSet = new Set(ids);
    const toBin = equipmentList.filter((item) => idSet.has(item.id));
    const remaining = equipmentList.filter((item) => !idSet.has(item.id));
    const nextBin = [...toBin.map(toRecycleProduct), ...recycleBin];
    setRecycleBin(nextBin);
    saveStoredRecycleBin(nextBin);
    setEquipmentList(remaining);
    saveStoredEquipment(remaining);
    setSelectedProductIds((prev) => prev.filter((id) => !idSet.has(id)));
    if (editingProduct && idSet.has(editingProduct.id)) {
      setProductProfileOpen(false);
      setEditingProduct(null);
    }
    if (peekProductId && idSet.has(peekProductId)) setPeekProductId(null);
    triggerToast(
      toBin.length === 1
        ? `${toBin[0].name} moved to recycle bin`
        : `${toBin.length} machines moved to recycle bin`,
    );
  }

  function restoreBinItems(binIds: string[]) {
    if (binIds.length === 0) return;
    const idSet = new Set(binIds);
    const toRestore = recycleBin.filter((item) => idSet.has(item.binId));
    const remainingBin = recycleBin.filter((item) => !idSet.has(item.binId));
    let nextClients = clients;
    let nextEquip = equipmentList;
    for (const item of toRestore) {
      if (item.kind === "client") {
        const snap = item.snapshot as CRMClient;
        const exists = nextClients.some((c) => c.id === snap.id);
        nextClients = [{ ...snap, id: exists ? `${snap.id}-R` : snap.id }, ...nextClients];
      } else {
        const snap = item.snapshot as ExtendedEquipment;
        const exists = nextEquip.some((p) => p.id === snap.id);
        nextEquip = [{ ...snap, id: exists ? `${snap.id}-restored` : snap.id }, ...nextEquip];
      }
    }
    setRecycleBin(remainingBin);
    saveStoredRecycleBin(remainingBin);
    setClients(nextClients);
    saveStoredCRMClients(nextClients);
    setEquipmentList(nextEquip);
    saveStoredEquipment(nextEquip);
    setSelectedBinIds((prev) => prev.filter((id) => !idSet.has(id)));
    triggerToast(
      toRestore.length === 1 ? `Restored ${toRestore[0].title}` : `Restored ${toRestore.length} records`,
    );
  }

  function destroyBinItems(binIds: string[]) {
    if (binIds.length === 0) return;
    const idSet = new Set(binIds);
    const remainingBin = recycleBin.filter((item) => !idSet.has(item.binId));
    const removed = recycleBin.length - remainingBin.length;
    setRecycleBin(remainingBin);
    saveStoredRecycleBin(remainingBin);
    setSelectedBinIds((prev) => prev.filter((id) => !idSet.has(id)));
    triggerToast(removed === 1 ? "Record permanently deleted" : `${removed} records permanently deleted`);
  }

  function emptyRecycleBin() {
    const count = recycleBin.length;
    setRecycleBin([]);
    saveStoredRecycleBin([]);
    setSelectedBinIds([]);
    triggerToast(count === 0 ? "Recycle bin already empty" : `Emptied recycle bin (${count} records)`);
  }

  function runPendingAction() {
    if (!pendingAction) return;
    if (pendingAction.type === "delete-clients") moveClientsToBin(pendingAction.ids);
    else if (pendingAction.type === "delete-products") moveProductsToBin(pendingAction.ids);
    else if (pendingAction.type === "restore") restoreBinItems(pendingAction.binIds);
    else if (pendingAction.type === "destroy") destroyBinItems(pendingAction.binIds);
    else if (pendingAction.type === "empty-bin") emptyRecycleBin();
    setPendingAction(null);
  }

  function handleToggleStockStatus(id: string) {
    const updated = equipmentList.map((item) => {
      if (item.id === id) {
        const nextStatus: ExtendedEquipment["stockStatus"] =
          item.stockStatus === "In Yard Cranborne"
            ? "In Transit (Beitbridge)"
            : item.stockStatus === "In Transit (Beitbridge)"
              ? "Active on Site"
              : "In Yard Cranborne";
        return { ...item, stockStatus: nextStatus };
      }
      return item;
    });
    setEquipmentList(updated);
    saveStoredEquipment(updated);
    triggerToast("Stock status updated");
  }

  // CMS Handlers
  function handleSaveSiteCopy(e?: React.FormEvent) {
    if (e) e.preventDefault();
    setSiteCopy(cmsForm);
    saveStoredSiteCopy(cmsForm);
    setHasUnsavedChanges(false);
    triggerToast("Website content published live!");
  }

  function handleResetSiteCopy() {
    if (typeof window !== "undefined" && window.confirm("Reset all website copy and details to original defaults?")) {
      const def = resetStoredSiteCopy();
      setSiteCopy(def);
      setCmsForm(def);
      setHasUnsavedChanges(false);
      triggerToast("Website copy reset to factory defaults!");
    }
  }

  function updateCmsField<K extends keyof SiteCopyContent>(field: K, value: SiteCopyContent[K]) {
    setCmsForm((prev) => ({ ...prev, [field]: value }));
    setHasUnsavedChanges(true);
  }

  // Filtered CRM Clients
  const filteredClients = useMemo(() => {
    const q = crmSearch.toLowerCase().trim();
    return clients.filter((c) => {
      const matchSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.organization.toLowerCase().includes(q) ||
        c.phone.includes(q) ||
        c.location.toLowerCase().includes(q) ||
        c.equipmentInterest.toLowerCase().includes(q) ||
        c.id.toLowerCase().includes(q);

      const matchStage = crmStageFilter === "All" || c.stage === crmStageFilter;
      const matchProvince =
        crmProvinceFilter === "All Zimbabwe" || c.province === crmProvinceFilter;

      return matchSearch && matchStage && matchProvince;
    });
  }, [clients, crmSearch, crmStageFilter, crmProvinceFilter]);

  // CRM Pipeline Metrics
  const pipelineMetrics = useMemo(() => {
    const totalPipelineValue = clients
      .filter((c) => c.stage !== "Lost")
      .reduce((sum, c) => sum + c.dealValue, 0);
    const wonValue = clients
      .filter((c) => c.stage === "Won")
      .reduce((sum, c) => sum + c.dealValue, 0);
    const activeDeals = clients.filter(
      (c) => c.stage === "Lead" || c.stage === "Discovery" || c.stage === "Tender Quoted" || c.stage === "Negotiation",
    ).length;
    const wonDeals = clients.filter((c) => c.stage === "Won").length;
    const highPriorityCount = clients.filter((c) => c.priority === "High" && c.stage !== "Lost").length;

    return { totalPipelineValue, wonValue, activeDeals, wonDeals, highPriorityCount };
  }, [clients]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    const q = productSearch.toLowerCase().trim();
    return equipmentList.filter((item) => {
      const matchCat = productCategoryFilter === "all" || item.category === productCategoryFilter;
      const matchQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        (item.spec?.toLowerCase().includes(q) ?? false) ||
        (item.sku && item.sku.toLowerCase().includes(q)) ||
        (item.throughput && item.throughput.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });
  }, [equipmentList, productSearch, productCategoryFilter]);

  const filteredRecycleItems = useMemo(() => {
    const q = recycleSearch.toLowerCase().trim();
    return recycleBin.filter((item) => {
      const matchKind = recycleFilter === "all" || item.kind === recycleFilter;
      const matchQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.binId.toLowerCase().includes(q);
      return matchKind && matchQuery;
    });
  }, [recycleBin, recycleFilter, recycleSearch]);

  const pendingConfirm = useMemo(() => {
    if (!pendingAction) return null;
    if (pendingAction.type === "delete-clients") {
      const n = pendingAction.ids.length;
      return {
        title: n === 1 ? "Move client to recycle bin?" : `Move ${n} clients to recycle bin?`,
        body: "They will leave the CRM pipeline and can be restored from Recycle Bin. Public records stay hidden until restored.",
        confirmLabel: "Move to recycle bin",
        tone: "danger" as const,
      };
    }
    if (pendingAction.type === "delete-products") {
      const n = pendingAction.ids.length;
      return {
        title: n === 1 ? "Move machine to recycle bin?" : `Move ${n} machines to recycle bin?`,
        body: "They will be removed from Cranborne inventory and the public catalogue until restored.",
        confirmLabel: "Move to recycle bin",
        tone: "danger" as const,
      };
    }
    if (pendingAction.type === "restore") {
      const n = pendingAction.binIds.length;
      return {
        title: n === 1 ? "Restore this record?" : `Restore ${n} records?`,
        body: "Restored clients return to the CRM pipeline. Restored machines reappear in inventory and the public catalogue.",
        confirmLabel: "Restore",
        tone: "neutral" as const,
      };
    }
    if (pendingAction.type === "destroy") {
      const n = pendingAction.binIds.length;
      return {
        title: n === 1 ? "Permanently delete this record?" : `Permanently delete ${n} records?`,
        body: "This cannot be undone. The snapshot will be removed from the recycle bin forever.",
        confirmLabel: "Delete forever",
        tone: "danger" as const,
      };
    }
    return {
      title: "Empty recycle bin?",
      body: `Permanently delete all ${recycleBin.length} records. This cannot be undone.`,
      confirmLabel: "Empty bin",
      tone: "danger" as const,
    };
  }, [pendingAction, recycleBin.length]);

  // CRM Pagination computation
  const crmTotalPages = Math.max(1, Math.ceil(filteredClients.length / crmPageSize));
  const paginatedClients = useMemo(() => {
    const start = (crmPage - 1) * crmPageSize;
    return filteredClients.slice(start, start + crmPageSize);
  }, [filteredClients, crmPage, crmPageSize]);

  useEffect(() => {
    setCrmPage(1);
  }, [crmSearch, crmStageFilter, crmProvinceFilter, crmPageSize]);

  // Product Pagination computation
  const productTotalPages = Math.max(1, Math.ceil(filteredProducts.length / productPageSize));
  const paginatedProducts = useMemo(() => {
    const start = (productPage - 1) * productPageSize;
    return filteredProducts.slice(start, start + productPageSize);
  }, [filteredProducts, productPage, productPageSize]);

  useEffect(() => {
    setProductPage(1);
  }, [productSearch, productCategoryFilter, productPageSize]);

  const peekClient = peekClientId ? (clients.find((c) => c.id === peekClientId) ?? null) : null;
  const peekProduct = peekProductId
    ? (equipmentList.find((p) => p.id === peekProductId) ?? null)
    : null;
  const clientNavIndex = profileClientId
    ? filteredClients.findIndex((c) => c.id === profileClientId)
    : -1;
  const productNavIndex = editingProduct
    ? filteredProducts.findIndex((p) => p.id === editingProduct.id)
    : -1;

  useEffect(() => {
    if (!profileClientId) {
      setClientDraft(null);
      return;
    }
    const live = clients.find((c) => c.id === profileClientId);
    setClientDraft(live ?? null);
    // Only re-seed the form when the record id changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileClientId]);

  function stepClient(delta: number) {
    if (clientNavIndex < 0) return;
    const next = filteredClients[clientNavIndex + delta];
    if (next) setProfileClientId(next.id);
  }

  function stepProduct(delta: number) {
    if (productNavIndex < 0 || !editingProduct) return;
    const next = filteredProducts[productNavIndex + delta];
    if (next) setEditingProduct(next);
  }

  function openClientProfile(id: string) {
    setPeekClientId(null);
    setProfileClientId(id);
  }

  function openProductProfile(item: ExtendedEquipment) {
    setPeekProductId(null);
    setEditingProduct(item);
    setProductProfileOpen(true);
  }

  function closeClientProfile() {
    setProfileClientId(null);
    setClientDraft(null);
  }

  function closeProductProfile() {
    setProductProfileOpen(false);
    setEditingProduct(null);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const typing = (e.target as HTMLElement | null)?.closest("input, textarea, select");
      if (e.key === "Escape") {
        setPeekClientId(null);
        setPeekProductId(null);
        return;
      }
      if (typing) return;
      if (e.key === "ArrowLeft") {
        if (profileClientId) stepClient(-1);
        else if (productProfileOpen) stepProduct(-1);
      }
      if (e.key === "ArrowRight") {
        if (profileClientId) stepClient(1);
        else if (productProfileOpen) stepProduct(1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans antialiased selection:bg-[#1D1D1F] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 inset-x-0 mx-auto z-50 flex w-fit items-center gap-2 rounded-full border border-black/[0.06] bg-white px-5 py-2.5 text-xs font-semibold text-[#1D1D1F] shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md animate-in fade-in slide-in-from-top-3">
          <span className="size-2 rounded-full bg-[#34C759]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HD Machinery Photo Zoom Modal */}
      {zoomedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in"
          onClick={() => setZoomedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[80vh] flex items-center justify-center bg-black/90">
              <img
                src={zoomedPhoto.src}
                alt={zoomedPhoto.title}
                className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/hero.jpg";
                }}
              />
              <button
                type="button"
                onClick={() => setZoomedPhoto(null)}
                className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-all"
                title="Close"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#1D1D1F] text-white border-t border-white/10">
              <div>
                <p className="font-semibold text-sm">{zoomedPhoto.title}</p>
                <p className="text-xs text-white/60 font-mono mt-0.5">{zoomedPhoto.src}</p>
              </div>
              <button
                type="button"
                onClick={() => setZoomedPhoto(null)}
                className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium text-white hover:bg-white/25 transition-all"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Apple Bar */}
      <header className="sticky top-0 z-40 border-b border-black/[0.06] bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1720px] w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link to="/admin" className="flex items-center gap-2.5 group">
              <div className="flex size-8 items-center justify-center rounded-xl bg-[#1D1D1F] text-white text-xs font-bold shadow-xs">
                O
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold tracking-tight text-[#1D1D1F]">
                    Omnicore Backoffice
                  </span>
                  <span className="rounded-full bg-black/[0.05] px-2 py-0.5 text-[10px] font-medium text-[#6E6E73]">
                    Harare Operations
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-4 py-1.5 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7] transition-all active:scale-95"
            >
              <span>View Public Website</span>
              <ExternalLink className="size-3 text-[#86868B]" />
            </Link>
          </div>
        </div>

        {/* Clean iOS Navigation Segmented Control */}
        <div className="mx-auto max-w-[1720px] w-full px-4 sm:px-6 lg:px-8 pb-3">
          <div className="inline-flex w-full sm:w-auto items-center overflow-x-auto rounded-xl bg-black/[0.05] p-1 text-xs">
            {[
              { id: "crm", label: "Clients & CRM Pipeline", icon: Users, count: filteredClients.length },
              { id: "products", label: "Machinery Inventory", icon: Package, count: equipmentList.length },
              { id: "cms", label: "Site Content & Copy", icon: FileText },
              { id: "hire", label: "Field Deployments", icon: Truck },
              { id: "recycle", label: "Recycle Bin", icon: Recycle, count: recycleBin.length },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as Tab);
                    setPeekClientId(null);
                    setProfileClientId(null);
                    setPeekProductId(null);
                    setProductProfileOpen(false);
                    setEditingProduct(null);
                    setSelectedClientIds([]);
                    setSelectedProductIds([]);
                    setSelectedBinIds([]);
                  }}
                  className={`flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-lg px-4 py-1.5 font-medium transition-all ${
                    isActive
                      ? "bg-white text-[#1D1D1F] shadow-xs font-semibold"
                      : "text-[#6E6E73] hover:text-[#1D1D1F]"
                  }`}
                >
                  <Icon className="size-3.5" />
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                        isActive
                          ? "bg-black/[0.06] text-[#1D1D1F]"
                          : "bg-black/[0.04] text-[#86868B]"
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Workspace Body */}
      <main className="mx-auto max-w-[1720px] w-full px-4 py-6 sm:px-6 lg:px-8">
        {/* ========================================================================= */}
        {/* TAB 1: CLIENT CRM & PIPELINE TABLE */}
        {/* ========================================================================= */}
        {activeTab === "crm" && (
          <div className="space-y-6">
            {profileClientId && clientDraft ? (
              <form onSubmit={handleSaveClient} className="space-y-5">
                <RecordPager
                  index={clientNavIndex}
                  total={filteredClients.length}
                  title={clientDraft.name}
                  subtitle={`${clientDraft.organization} · ${clientDraft.id}`}
                  onBack={closeClientProfile}
                  backLabel="All clients"
                  onPrev={() => stepClient(-1)}
                  onNext={() => stepClient(1)}
                />

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
                  <div className="space-y-4 lg:col-span-7">
                    <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
                      <div className="mb-4 flex flex-wrap items-center gap-2">
                        <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${stageChipClass(clientDraft.stage)}`}>
                          {clientDraft.stage}
                        </span>
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                            clientDraft.priority === "High"
                              ? "bg-red-50 text-red-600"
                              : clientDraft.priority === "Medium"
                                ? "bg-amber-50 text-amber-700"
                                : "bg-black/[0.04] text-[#86868B]"
                          }`}
                        >
                          {clientDraft.priority} priority
                        </span>
                        <span className="text-sm font-semibold text-[#1D1D1F]">{clientDraft.dealValueDisplay}</span>
                      </div>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs">
                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">Client name</label>
                          <input
                            type="text"
                            required
                            value={clientDraft.name}
                            onChange={(e) => setClientDraft({ ...clientDraft, name: e.target.value })}
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">Organization</label>
                          <input
                            type="text"
                            value={clientDraft.organization}
                            onChange={(e) => setClientDraft({ ...clientDraft, organization: e.target.value })}
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">Phone / WhatsApp</label>
                          <input
                            type="text"
                            value={clientDraft.phone}
                            onChange={(e) => setClientDraft({ ...clientDraft, phone: e.target.value })}
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">Email</label>
                          <input
                            type="email"
                            value={clientDraft.email}
                            onChange={(e) => setClientDraft({ ...clientDraft, email: e.target.value })}
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">Site location</label>
                          <input
                            type="text"
                            value={clientDraft.location}
                            onChange={(e) => setClientDraft({ ...clientDraft, location: e.target.value })}
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">Province</label>
                          <select
                            value={clientDraft.province}
                            onChange={(e) => setClientDraft({ ...clientDraft, province: e.target.value })}
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          >
                            {PROVINCES.filter((p) => p !== "All Zimbabwe").map((p) => (
                              <option key={p} value={p}>
                                {p}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">Division</label>
                          <select
                            value={clientDraft.service}
                            onChange={(e) => setClientDraft({ ...clientDraft, service: e.target.value })}
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          >
                            <option value="Mining Equipment">Mining Equipment</option>
                            <option value="Construction Machinery Hire">Machinery Hire</option>
                            <option value="Hardware & Construction">Hardware & Fence</option>
                            <option value="Farming Machinery">Farming Plant</option>
                            <option value="Industry & Manufacturing">Industrial Plant</option>
                          </select>
                        </div>
                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">Deal type</label>
                          <select
                            value={clientDraft.intent}
                            onChange={(e) =>
                              setClientDraft({ ...clientDraft, intent: e.target.value as CRMClient["intent"] })
                            }
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          >
                            <option value="Buy">Outright Purchase</option>
                            <option value="Hire">Plant Hire</option>
                            <option value="Both">Both</option>
                            <option value="Consultation">Technical Consult</option>
                          </select>
                        </div>
                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">Stage</label>
                          <select
                            value={clientDraft.stage}
                            onChange={(e) =>
                              updateClientStage(clientDraft.id, e.target.value as CRMClient["stage"])
                            }
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          >
                            {STAGES.map((st) => (
                              <option key={st} value={st}>
                                {st}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">Priority</label>
                          <select
                            value={clientDraft.priority}
                            onChange={(e) =>
                              setClientDraft({
                                ...clientDraft,
                                priority: e.target.value as CRMClient["priority"],
                              })
                            }
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          >
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Normal">Normal</option>
                          </select>
                        </div>
                        <div className="sm:col-span-2">
                          <label className="mb-1 block font-medium text-[#1D1D1F]">Estimated value ($)</label>
                          <input
                            type="text"
                            value={String(clientDraft.dealValue)}
                            onChange={(e) =>
                              setClientDraft({
                                ...clientDraft,
                                dealValue: Number(e.target.value.replace(/[^0-9.]/g, "")) || 0,
                              })
                            }
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="mb-1 block font-medium text-[#1D1D1F]">Equipment required</label>
                          <input
                            type="text"
                            value={clientDraft.equipmentInterest}
                            onChange={(e) =>
                              setClientDraft({ ...clientDraft, equipmentInterest: e.target.value })
                            }
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="mb-1 block font-medium text-[#1D1D1F]">Internal notes</label>
                          <textarea
                            rows={3}
                            value={clientDraft.notes}
                            onChange={(e) => setClientDraft({ ...clientDraft, notes: e.target.value })}
                            className="w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 leading-relaxed text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="mt-4 flex justify-end gap-2 border-t border-black/[0.06] pt-3">
                        <button
                          type="button"
                          onClick={() =>
                            setPendingAction({ type: "delete-clients", ids: [clientDraft.id] })
                          }
                          className="inline-flex h-11 items-center gap-1.5 rounded-full border border-red-200 bg-white px-4 text-xs font-semibold text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="size-3.5" />
                          Move to bin
                        </button>
                        <button
                          type="submit"
                          className="inline-flex h-11 items-center rounded-full bg-[#1D1D1F] px-5 text-xs font-semibold text-white hover:bg-black"
                        >
                          Save profile
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 lg:col-span-5">
                    <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
                      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-[#86868B]">
                        Fast technical response (WhatsApp)
                      </span>
                      <div className="grid grid-cols-1 gap-1.5 text-xs">
                        {[
                          {
                            label: "Formal tender rate ready",
                            text: `Good day ${clientDraft.name}. Following up from Omnicore Solutions Harare regarding ${clientDraft.equipmentInterest}. We have prepared the indicative FOB Harare quotation and specifications for your review.`,
                          },
                          {
                            label: "Cranborne yard inspection",
                            text: `Hello ${clientDraft.name}, your requested machinery (${clientDraft.equipmentInterest}) is available for physical inspection at our Cranborne yard (115 Chiremba Rd, Harare). What time works best for you?`,
                          },
                          {
                            label: "Freight & delivery schedule",
                            text: `Good day ${clientDraft.name}. We can arrange direct lowbed delivery to your site in ${clientDraft.location}. Please confirm site access for heavy plant haulage.`,
                          },
                          {
                            label: "Commissioning & warranty",
                            text: `Hello ${clientDraft.name}, all Omnicore plant includes on-site field commissioning and 12-month parts backup from Cranborne. Let us finalize the mobilization date.`,
                          },
                        ].map((tmpl, idx) => (
                          <a
                            key={idx}
                            href={whatsappUrl(tmpl.text)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between rounded-lg border border-black/[0.06] bg-white p-2.5 text-left text-[11px] font-medium text-[#1D1D1F] hover:border-[#1fa855] hover:bg-emerald-50/30"
                          >
                            <span>{tmpl.label}</span>
                            <WhatsAppIcon className="ml-1 size-3 shrink-0 text-[#1fa855]" />
                          </a>
                        ))}
                      </div>
                      <div className="mt-3 flex gap-2">
                        <a
                          href={`tel:${clientDraft.phone}`}
                          className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-black/[0.08] bg-[#F5F5F7] text-xs font-medium text-[#1D1D1F]"
                        >
                          <Phone className="size-3.5" />
                          Call
                        </a>
                        <a
                          href={`mailto:${clientDraft.email}`}
                          className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-black/[0.08] bg-[#F5F5F7] text-xs font-medium text-[#1D1D1F]"
                        >
                          <Mail className="size-3.5" />
                          Email
                        </a>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
                      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-[#86868B]">
                        Activity log ({clientDraft.timeline.length})
                      </span>
                      <div className="max-h-56 space-y-1.5 overflow-y-auto pr-1">
                        {clientDraft.timeline.map((item, i) => (
                          <div key={i} className="rounded-lg bg-[#F5F5F7] p-2 text-[11px] text-[#6E6E73]">
                            <div className="flex justify-between font-medium text-[#1D1D1F]">
                              <span>{item.author}</span>
                              <span className="text-[#86868B]">{item.date}</span>
                            </div>
                            <p className="mt-0.5">{item.note}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-1.5 pt-3">
                        <input
                          type="text"
                          value={newTimelineNote}
                          onChange={(e) => setNewTimelineNote(e.target.value)}
                          placeholder="Log phone call, site inspection, deposit..."
                          className="h-11 flex-1 rounded-lg border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs text-[#1D1D1F] placeholder-[#86868B] focus:bg-white focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={handleAddTimelineNote}
                          className="h-11 rounded-lg bg-[#1D1D1F] px-4 text-xs font-medium text-white hover:bg-black"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <>
            {/* KPI Executive Summary Strip */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-black/[0.04] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <span className="text-[11px] font-medium text-[#86868B] uppercase tracking-wider">
                  Active Tender Pipeline
                </span>
                <div className="mt-1.5 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
                    ${pipelineMetrics.totalPipelineValue.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#34C759] font-medium">
                    {pipelineMetrics.activeDeals} deals
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-black/[0.04] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <span className="text-[11px] font-medium text-[#86868B] uppercase tracking-wider">
                  Closed / Won Revenue
                </span>
                <div className="mt-1.5 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
                    ${pipelineMetrics.wonValue.toLocaleString()}
                  </span>
                  <span className="text-xs text-[#34C759] font-medium">
                    {pipelineMetrics.wonDeals} orders
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-black/[0.04] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <span className="text-[11px] font-medium text-[#86868B] uppercase tracking-wider">
                  High Priority Tenders
                </span>
                <div className="mt-1.5 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
                    {pipelineMetrics.highPriorityCount}
                  </span>
                  <span className="text-xs text-[#FF9500] font-medium">urgent</span>
                </div>
              </div>

              <div className="rounded-2xl border border-black/[0.04] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <span className="text-[11px] font-medium text-[#86868B] uppercase tracking-wider">
                  Client Base in Zimbabwe
                </span>
                <div className="mt-1.5 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
                    {clients.length}
                  </span>
                  <span className="text-xs text-[#86868B]">accounts</span>
                </div>
              </div>
            </div>

            {/* Filter & Control Toolbar */}
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              {/* Stage Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
                {["All", ...STAGES].map((st) => {
                  const count =
                    st === "All" ? clients.length : clients.filter((c) => c.stage === st).length;
                  const isCurrent = crmStageFilter === st;
                  return (
                    <button
                      key={st}
                      onClick={() => setCrmStageFilter(st)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
                        isCurrent
                          ? "bg-[#1D1D1F] text-white shadow-xs"
                          : "bg-white text-[#6E6E73] hover:text-[#1D1D1F] border border-black/[0.06]"
                      }`}
                    >
                      <span>{st}</span>
                      <span className={`text-[10px] ${isCurrent ? "text-white/80" : "text-[#86868B]"}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search, Province & New Lead Button */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-[#86868B]" />
                  <input
                    type="text"
                    value={crmSearch}
                    onChange={(e) => setCrmSearch(e.target.value)}
                    placeholder="Search client, syndicate, plant..."
                    className="h-9 w-44 sm:w-60 rounded-full border border-black/[0.08] bg-white pl-9 pr-3 text-xs text-[#1D1D1F] placeholder-[#86868B] shadow-2xs focus:outline-none focus:ring-1 focus:ring-black/20"
                  />
                </div>

                <select
                  value={crmProvinceFilter}
                  onChange={(e) => setCrmProvinceFilter(e.target.value)}
                  className="h-9 rounded-full border border-black/[0.08] bg-white px-3 text-xs text-[#1D1D1F] shadow-2xs focus:outline-none focus:ring-1 focus:ring-black/20"
                >
                  {PROVINCES.map((prov) => (
                    <option key={prov} value={prov}>
                      {prov}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => setShowAddClientModal(true)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#1D1D1F] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-black transition-all active:scale-95"
                >
                  <Plus className="size-3.5" />
                  <span>New Client</span>
                </button>
                <button
                  onClick={() => setActiveTab("recycle")}
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3 py-2 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7]"
                  title="Open recycle bin"
                >
                  <Recycle className="size-3.5 text-[#6E6E73]" />
                  <span className="hidden sm:inline">Bin</span>
                  {recycleBin.filter((i) => i.kind === "client").length > 0 && (
                    <span className="rounded-full bg-black/[0.06] px-1.5 text-[10px] font-semibold">
                      {recycleBin.filter((i) => i.kind === "client").length}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {selectedClientIds.length > 0 && (
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#1D1D1F]/10 bg-[#1D1D1F] px-4 py-2.5 text-white shadow-xs">
                <span className="text-xs font-semibold">
                  {selectedClientIds.length} client{selectedClientIds.length === 1 ? "" : "s"} selected
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedClientIds([])}
                    className="rounded-full px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={() => setPendingAction({ type: "delete-clients", ids: selectedClientIds })}
                    className="inline-flex items-center gap-1.5 rounded-full bg-red-500 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-red-400"
                  >
                    <Trash2 className="size-3.5" />
                    Move to recycle bin
                  </button>
                </div>
              </div>
            )}

            {/* Client table */}
            <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-black/[0.06] bg-[#FBFBFC] text-[11px] font-semibold text-[#86868B] uppercase tracking-wider">
                        <th className="w-10 py-3 pl-4 pr-1">
                          <RowCheck
                            label="Select all clients on this page"
                            checked={
                              paginatedClients.length > 0 &&
                              paginatedClients.every((c) => selectedClientIds.includes(c.id))
                            }
                            indeterminate={
                              paginatedClients.some((c) => selectedClientIds.includes(c.id)) &&
                              !paginatedClients.every((c) => selectedClientIds.includes(c.id))
                            }
                            onChange={(next) => {
                              const pageIds = paginatedClients.map((c) => c.id);
                              setSelectedClientIds((prev) =>
                                next
                                  ? [...new Set([...prev, ...pageIds])]
                                  : prev.filter((id) => !pageIds.includes(id)),
                              );
                            }}
                          />
                        </th>
                        <th className="py-3 px-4">Client / Organization</th>
                        <th className="py-3 px-3">Location</th>
                        <th className="py-3 px-3">Equipment Required</th>
                        <th className="py-3 px-3">Stage</th>
                        <th className="py-3 px-3 text-right">Deal Value</th>
                        <th className="py-3 px-3 text-center">Priority</th>
                        <th className="py-3 px-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/[0.04]">
                      {filteredClients.length === 0 ? (
                        <tr>
                          <td colSpan={8} className="py-12 text-center text-[#86868B]">
                            No client records match the current filters.
                          </td>
                        </tr>
                      ) : (
                        paginatedClients.map((client) => {
                          const isSelected = peekClientId === client.id;
                          const isChecked = selectedClientIds.includes(client.id);
                          return (
                            <tr
                              key={client.id}
                              onClick={() => setPeekClientId(client.id)}
                              className={`transition-colors cursor-pointer ${
                                isChecked
                                  ? "bg-[#F3F8FF]"
                                  : isSelected
                                    ? "bg-[#F5F5F7] font-medium"
                                    : "hover:bg-black/[0.015]"
                              }`}
                            >
                              <td
                                className="w-10 py-3 pl-4 pr-1"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <RowCheck
                                  label={`Select ${client.name}`}
                                  checked={isChecked}
                                  onChange={(next) =>
                                    setSelectedClientIds((prev) =>
                                      next ? [...prev, client.id] : prev.filter((id) => id !== client.id),
                                    )
                                  }
                                />
                              </td>
                              <td className="py-3 px-4">
                                <span className="font-semibold text-[#1D1D1F] block">
                                  {client.name}
                                </span>
                                <span className="text-[11px] text-[#6E6E73] block truncate max-w-[160px]">
                                  {client.organization}
                                </span>
                              </td>

                              <td className="py-3 px-3 text-[#6E6E73]">
                                <span className="block text-[#1D1D1F]">{client.location}</span>
                                <span className="text-[10px] text-[#86868B]">{client.province}</span>
                              </td>

                              <td className="py-3 px-3">
                                <span className="text-[#1D1D1F] font-medium block truncate max-w-[180px]">
                                  {client.equipmentInterest}
                                </span>
                                <span className="rounded bg-black/[0.04] px-1.5 py-0.2 text-[10px] text-[#6E6E73]">
                                  {client.intent}
                                </span>
                              </td>

                              <td className="py-3 px-3" onClick={(e) => e.stopPropagation()}>
                                <select
                                  value={client.stage}
                                  onChange={(e) =>
                                    updateClientStage(client.id, e.target.value as CRMClient["stage"])
                                  }
                                  className={`rounded-full px-2.5 py-1 text-[11px] font-semibold border-0 focus:ring-1 focus:ring-black/20 ${
                                    client.stage === "Won"
                                      ? "bg-[#E8F8EE] text-[#1B833E]"
                                      : client.stage === "Tender Quoted"
                                      ? "bg-[#FFF4E5] text-[#B25E00]"
                                      : client.stage === "Negotiation"
                                      ? "bg-purple-50 text-purple-700"
                                      : client.stage === "Lead"
                                      ? "bg-blue-50 text-blue-700"
                                      : client.stage === "Lost"
                                      ? "bg-red-50 text-red-700"
                                      : "bg-black/[0.05] text-[#1D1D1F]"
                                  }`}
                                >
                                  {STAGES.map((st) => (
                                    <option key={st} value={st}>
                                      {st}
                                    </option>
                                  ))}
                                </select>
                              </td>

                              <td className="py-3 px-3 text-right font-semibold text-[#1D1D1F]">
                                {client.dealValueDisplay}
                              </td>

                              <td className="py-3 px-3 text-center">
                                <span
                                  className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
                                    client.priority === "High"
                                      ? "bg-red-50 text-red-600"
                                      : client.priority === "Medium"
                                      ? "bg-amber-50 text-amber-700"
                                      : "bg-black/[0.04] text-[#86868B]"
                                  }`}
                                >
                                  {client.priority}
                                </span>
                              </td>

                              <td className="py-3 px-3 text-right" onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center justify-end gap-1">
                                  <a
                                    href={whatsappUrl(
                                      `Hello ${client.name}, following up from Omnicore Harare regarding your inquiry for ${client.equipmentInterest}.`,
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex size-7 items-center justify-center rounded-lg text-[#1fa855] hover:bg-[#1fa855]/10"
                                    title="WhatsApp Client"
                                  >
                                    <WhatsAppIcon className="size-3.5" />
                                  </a>
                                  <a
                                    href={`tel:${client.phone}`}
                                    className="flex size-7 items-center justify-center rounded-lg text-[#1D1D1F] hover:bg-black/[0.05]"
                                    title="Call"
                                  >
                                    <Phone className="size-3.5 text-[#6E6E73]" />
                                  </a>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setPendingAction({ type: "delete-clients", ids: [client.id] })
                                    }
                                    className="flex size-7 items-center justify-center rounded-lg text-red-600 hover:bg-red-50"
                                    title="Move to recycle bin"
                                  >
                                    <Trash2 className="size-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>

                {/* CRM Pagination Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-black/[0.06] bg-[#FBFBFC] px-4 py-3 text-xs text-[#6E6E73]">
                  <div className="flex flex-wrap items-center gap-2">
                    <span>Showing</span>
                    <span className="font-semibold text-[#1D1D1F]">
                      {filteredClients.length === 0 ? 0 : (crmPage - 1) * crmPageSize + 1}
                    </span>
                    <span>to</span>
                    <span className="font-semibold text-[#1D1D1F]">
                      {Math.min(crmPage * crmPageSize, filteredClients.length)}
                    </span>
                    <span>of</span>
                    <span className="font-semibold text-[#1D1D1F]">{filteredClients.length}</span>
                    <span>clients</span>

                    <span className="mx-1 text-black/20">|</span>

                    <div className="flex items-center gap-1.5">
                      <span>Per page:</span>
                      <select
                        value={crmPageSize}
                        onChange={(e) => {
                          setCrmPageSize(Number(e.target.value));
                          setCrmPage(1);
                        }}
                        className="rounded-lg border border-black/[0.08] bg-white px-2 py-0.5 text-xs text-[#1D1D1F] focus:outline-none"
                      >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 self-end sm:self-auto">
                    <button
                      onClick={() => setCrmPage(1)}
                      disabled={crmPage <= 1}
                      className="rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                      title="First page"
                    >
                      <ChevronsLeft className="size-4" />
                    </button>
                    <button
                      onClick={() => setCrmPage((p) => Math.max(1, p - 1))}
                      disabled={crmPage <= 1}
                      className="rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                      title="Previous page"
                    >
                      <ChevronLeft className="size-4" />
                    </button>

                    <div className="flex items-center gap-1 px-1">
                      {Array.from({ length: crmTotalPages }, (_, i) => i + 1).map((pageNum) => (
                        <button
                          key={pageNum}
                          onClick={() => setCrmPage(pageNum)}
                          className={`min-w-6 h-6 rounded-md px-1.5 text-xs font-medium transition-all ${
                            crmPage === pageNum
                              ? "bg-[#1D1D1F] text-white font-semibold shadow-xs"
                              : "text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F]"
                          }`}
                        >
                          {pageNum}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setCrmPage((p) => Math.min(crmTotalPages, p + 1))}
                      disabled={crmPage >= crmTotalPages}
                      className="rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                      title="Next page"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                    <button
                      onClick={() => setCrmPage(crmTotalPages)}
                      disabled={crmPage >= crmTotalPages}
                      className="rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                      title="Last page"
                    >
                      <ChevronsRight className="size-4" />
                    </button>
                  </div>
                </div>
              </div>

              </>
            )}

            {peekClient && !profileClientId && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
                onClick={() => setPeekClientId(null)}
              >
                <div
                  className="w-full max-w-md rounded-2xl border border-black/[0.08] bg-white p-5 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-mono text-[11px] text-[#86868B]">{peekClient.id}</span>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${stageChipClass(peekClient.stage)}`}>
                          {peekClient.stage}
                        </span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                            peekClient.priority === "High"
                              ? "bg-red-50 text-red-600"
                              : peekClient.priority === "Medium"
                                ? "bg-amber-50 text-amber-700"
                                : "bg-black/[0.04] text-[#86868B]"
                          }`}
                        >
                          {peekClient.priority}
                        </span>
                      </div>
                      <h3 className="mt-1 text-base font-semibold text-[#1D1D1F]">{peekClient.name}</h3>
                      <p className="text-xs text-[#6E6E73]">{peekClient.organization}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPeekClientId(null)}
                      className="rounded-full p-2 text-[#86868B] hover:bg-[#F5F5F7] hover:text-[#1D1D1F]"
                    >
                      <X className="size-4" />
                    </button>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl bg-[#F5F5F7] p-2.5">
                      <span className="block text-[10px] uppercase text-[#86868B]">Deal value</span>
                      <span className="font-semibold text-[#1D1D1F]">{peekClient.dealValueDisplay}</span>
                    </div>
                    <div className="rounded-xl bg-[#F5F5F7] p-2.5">
                      <span className="block text-[10px] uppercase text-[#86868B]">Location</span>
                      <span className="block truncate font-semibold text-[#1D1D1F]">
                        {peekClient.location}
                      </span>
                    </div>
                    <div className="col-span-2 rounded-xl bg-[#F5F5F7] p-2.5">
                      <span className="block text-[10px] uppercase text-[#86868B]">Requirement</span>
                      <span className="font-medium text-[#1D1D1F]">{peekClient.equipmentInterest}</span>
                    </div>
                    <div className="rounded-xl bg-[#F5F5F7] p-2.5">
                      <span className="block text-[10px] uppercase text-[#86868B]">Phone</span>
                      <span className="font-semibold text-[#1D1D1F]">{peekClient.phone}</span>
                    </div>
                    <div className="rounded-xl bg-[#F5F5F7] p-2.5">
                      <span className="block text-[10px] uppercase text-[#86868B]">Intent</span>
                      <span className="font-semibold text-[#1D1D1F]">{peekClient.intent}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      type="button"
                      onClick={() => openClientProfile(peekClient.id)}
                      className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-[#1D1D1F] text-xs font-semibold text-white hover:bg-black"
                    >
                      <Edit3 className="size-3.5" />
                      Edit profile
                    </button>
                    <a
                      href={whatsappUrl(
                        `Hello ${peekClient.name}, following up from Omnicore Harare regarding your inquiry for ${peekClient.equipmentInterest}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center rounded-full border border-black/[0.08] px-4 text-[#1fa855] hover:bg-emerald-50"
                    >
                      <WhatsAppIcon className="size-4" />
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        setPendingAction({ type: "delete-clients", ids: [peekClient.id] })
                      }
                      className="inline-flex h-11 items-center justify-center rounded-full border border-red-200 px-4 text-red-600 hover:bg-red-50"
                      title="Move to recycle bin"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

                        {/* Modal: New Client / Deal */}
            {showAddClientModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-150">
                <div className="w-full max-w-xl rounded-2xl border border-black/[0.08] bg-white p-6 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-black/[0.06] pb-3">
                    <h3 className="text-sm font-semibold text-[#1D1D1F]">
                      Create New Client / Tender Lead
                    </h3>
                    <button
                      onClick={() => setShowAddClientModal(false)}
                      className="rounded-full p-1 text-[#86868B] hover:bg-[#F5F5F7]"
                    >
                      <X className="size-4" />
                    </button>
                  </div>

                  <form onSubmit={handleCreateClient} className="mt-4 space-y-3.5 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="font-medium text-[#1D1D1F] block mb-1">Client Full Name *</label>
                        <input
                          type="text"
                          required
                          value={newClientName}
                          onChange={(e) => setNewClientName(e.target.value)}
                          placeholder="e.g. Tendai Mashingaidze"
                          className="w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-medium text-[#1D1D1F] block mb-1">Company / Mining Syndicate</label>
                        <input
                          type="text"
                          value={newClientOrg}
                          onChange={(e) => setNewClientOrg(e.target.value)}
                          placeholder="e.g. Mberengwa Chrome JV"
                          className="w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="font-medium text-[#1D1D1F] block mb-1">WhatsApp / Phone *</label>
                        <input
                          type="text"
                          required
                          value={newClientPhone}
                          onChange={(e) => setNewClientPhone(e.target.value)}
                          placeholder="+263 77..."
                          className="w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-medium text-[#1D1D1F] block mb-1">Email Address</label>
                        <input
                          type="email"
                          value={newClientEmail}
                          onChange={(e) => setNewClientEmail(e.target.value)}
                          placeholder="client@syndicate.co.zw"
                          className="w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="font-medium text-[#1D1D1F] block mb-1">Site Location</label>
                        <input
                          type="text"
                          value={newClientLocation}
                          onChange={(e) => setNewClientLocation(e.target.value)}
                          placeholder="e.g. Kadoma / Golden Valley"
                          className="w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-medium text-[#1D1D1F] block mb-1">Province in Zimbabwe</label>
                        <select
                          value={newClientProvince}
                          onChange={(e) => setNewClientProvince(e.target.value)}
                          className="w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
                        >
                          {PROVINCES.filter((p) => p !== "All Zimbabwe").map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                      <div>
                        <label className="font-medium text-[#1D1D1F] block mb-1">Division</label>
                        <select
                          value={newClientService}
                          onChange={(e) => setNewClientService(e.target.value)}
                          className="w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-2.5 focus:bg-white focus:outline-none"
                        >
                          <option value="Mining Equipment">Mining Equipment</option>
                          <option value="Construction Machinery Hire">Machinery Hire</option>
                          <option value="Hardware & Construction">Hardware & Fence</option>
                          <option value="Farming Machinery">Farming Plant</option>
                          <option value="Industry & Manufacturing">Industrial Plant</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-medium text-[#1D1D1F] block mb-1">Deal Type</label>
                        <select
                          value={newClientIntent}
                          onChange={(e) => setNewClientIntent(e.target.value as CRMClient["intent"])}
                          className="w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-2.5 focus:bg-white focus:outline-none"
                        >
                          <option value="Buy">Outright Purchase</option>
                          <option value="Hire">Plant Hire</option>
                          <option value="Both">Both</option>
                          <option value="Consultation">Technical Consult</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-medium text-[#1D1D1F] block mb-1">Priority</label>
                        <select
                          value={newClientPriority}
                          onChange={(e) => setNewClientPriority(e.target.value as CRMClient["priority"])}
                          className="w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-2.5 focus:bg-white focus:outline-none"
                        >
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Normal">Normal</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-medium text-[#1D1D1F] block mb-1">Estimated Value ($)</label>
                        <input
                          type="text"
                          value={newClientDealValue}
                          onChange={(e) => setNewClientDealValue(e.target.value)}
                          placeholder="e.g. 15000"
                          className="w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-medium text-[#1D1D1F] block mb-1">Equipment Specification Required</label>
                      <input
                        type="text"
                        value={newClientInterest}
                        onChange={(e) => setNewClientInterest(e.target.value)}
                        placeholder="e.g. 200x300 Jaw crusher with diesel motor option"
                        className="w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-medium text-[#1D1D1F] block mb-1">Initial Notes</label>
                      <textarea
                        rows={2}
                        value={newClientNotes}
                        onChange={(e) => setNewClientNotes(e.target.value)}
                        placeholder="Project timelines, access constraints, payment structure..."
                        className="w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-2.5 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-2 border-t border-black/[0.06]">
                      <button
                        type="button"
                        onClick={() => setShowAddClientModal(false)}
                        className="rounded-full bg-[#F5F5F7] px-4 py-1.5 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F]"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="rounded-full bg-[#1D1D1F] px-4 py-1.5 text-xs font-semibold text-white hover:bg-black"
                      >
                        Save Client Record
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: MACHINERY INVENTORY & SPEC WRITER */}
        {/* ========================================================================= */}
        {activeTab === "products" && (
          <div className="space-y-6">
            {productProfileOpen && editingProduct ? (
              <form onSubmit={handleSaveProduct} className="space-y-5">
                <RecordPager
                  index={productNavIndex}
                  total={filteredProducts.length}
                  title={editingProduct.name}
                  subtitle={editingProduct.sku || editingProduct.id}
                  onBack={closeProductProfile}
                  backLabel="All machines"
                  onPrev={() => stepProduct(-1)}
                  onNext={() => stepProduct(1)}
                />

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
                  {/* Left Main Specifications Column */}
                  <div className="space-y-6 lg:col-span-8">
                    {/* Card 1: Equipment Visual & Harare Yard Photo Studio */}
                    <div className="rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-7 shadow-xs space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-black/[0.06] pb-4 gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="flex size-8 items-center justify-center rounded-xl bg-black/[0.05] text-[#1D1D1F]">
                              <Eye className="size-4.5" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-[#1D1D1F] text-base">
                                Equipment Visual & Yard Photo Studio
                              </h3>
                              <p className="text-xs text-[#86868B] mt-0.5">
                                High-resolution photography shown across public catalogue, division pages, client WhatsApp spec sheets, and tender documents.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 self-start sm:self-auto">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              editingProduct.stockStatus === "In Yard Cranborne"
                                ? "bg-[#E8F8EE] text-[#1B833E]"
                                : editingProduct.stockStatus === "In Transit (Beitbridge)"
                                ? "bg-[#FFF4E5] text-[#B25E00]"
                                : "bg-black/[0.04] text-[#6E6E73]"
                            }`}
                          >
                            {editingProduct.stockStatus || "In Yard Cranborne"}
                          </span>
                        </div>
                      </div>

                      {/* Main Photo Visual Workspace */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                        {/* Prominent High-Definition Preview Canvas (7 cols) */}
                        <div className="lg:col-span-7 space-y-3">
                          <div className="relative w-full h-64 sm:h-76 md:h-84 rounded-2xl overflow-hidden bg-black/[0.05] border border-black/[0.08] shadow-sm group">
                            <img
                              src={editingProduct.image || "/images/jaw-crusher.jpg"}
                              alt={editingProduct.name}
                              className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "/images/hero.jpg";
                              }}
                            />
                            {/* Top Badges Overlay */}
                            <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                              <span className="rounded-full bg-black/75 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md flex items-center gap-2 shadow-md">
                                <span className="size-2 rounded-full bg-[#1FA855] animate-pulse" />
                                <span>Active Listing Photo</span>
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  setZoomedPhoto({
                                    src: editingProduct.image || "/images/jaw-crusher.jpg",
                                    title: editingProduct.name,
                                  })
                                }
                                className="pointer-events-auto rounded-full bg-black/60 hover:bg-black p-2 text-white shadow-md backdrop-blur-md transition-all active:scale-90"
                                title="Zoom & Inspect HD Image"
                              >
                                <ZoomIn className="size-4" />
                              </button>
                            </div>

                            {/* Bottom Identity Overlay */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-10 text-white">
                              <p className="text-sm font-semibold truncate leading-tight">{editingProduct.name}</p>
                              <div className="flex items-center gap-2 mt-1 text-xs text-white/80">
                                <span className="capitalize font-medium">{editingProduct.category} Division</span>
                                <span>•</span>
                                <span className="font-mono text-[11px]">{editingProduct.sku || editingProduct.id}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#86868B]">
                            <span className="flex items-center gap-1.5">
                              <CheckCircle2 className="size-3.5 text-[#1B833E]" />
                              <span>Live high-resolution preview connected</span>
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                setZoomedPhoto({
                                  src: editingProduct.image || "/images/jaw-crusher.jpg",
                                  title: editingProduct.name,
                                })
                              }
                              className="font-medium text-[#1D1D1F] hover:underline inline-flex items-center gap-1"
                            >
                              <ZoomIn className="size-3" />
                              <span>Inspect HD Fullscreen</span>
                            </button>
                          </div>
                        </div>

                        {/* Photo Controls, Upload & URL Input (5 cols) */}
                        <div className="lg:col-span-5 space-y-4 rounded-2xl bg-[#F9F9FA] p-4.5 border border-black/[0.06]">
                          <div>
                            <span className="text-xs font-semibold text-[#1D1D1F] block">
                              Photo Source & Upload
                            </span>
                            <p className="text-[11px] text-[#86868B] mt-0.5">
                              Upload a machine image from your computer or specify an image asset path.
                            </p>
                          </div>

                          {/* Upload Dropzone */}
                          <div>
                            <label className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-black/[0.15] bg-white p-4 hover:border-black/30 hover:bg-[#F5F5F7] cursor-pointer transition-all">
                              <div className="flex size-9 items-center justify-center rounded-full bg-black/[0.05] text-[#1D1D1F]">
                                <Upload className="size-4" />
                              </div>
                              <div className="text-center">
                                <span className="text-xs font-semibold text-[#1D1D1F] block">
                                  Upload Machine Photo
                                </span>
                                <span className="text-[10px] text-[#86868B] block mt-0.5">
                                  PNG, JPG, WEBP up to 8MB
                                </span>
                              </div>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, true)}
                                className="hidden"
                              />
                            </label>
                          </div>

                          {/* Direct Path / URL Input */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-medium text-[#1D1D1F] flex items-center justify-between">
                              <span>Asset Path or URL:</span>
                              <span className="text-[10px] text-[#86868B] font-mono">/images/...</span>
                            </label>
                            <input
                              type="text"
                              value={editingProduct.image}
                              onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                              placeholder="/images/... or https://..."
                              className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-white px-3 text-xs text-[#1D1D1F] focus:outline-none focus:ring-1 focus:ring-black/20 font-mono text-[11px]"
                            />
                          </div>

                          {/* Multi-Channel Distribution Badges */}
                          <div className="border-t border-black/[0.06] pt-3 space-y-1.5 text-[11px] text-[#6E6E73]">
                            <span className="font-semibold text-[#1D1D1F] text-[10px] uppercase tracking-wider block">
                              Active Photo Distribution
                            </span>
                            <div className="flex items-center gap-1.5 text-xs">
                              <span className="size-1.5 rounded-full bg-[#1FA855]" />
                              <span>Public Catalogue card</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs">
                              <span className="size-1.5 rounded-full bg-[#1FA855]" />
                              <span>WhatsApp client quote spec sheet</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs">
                              <span className="size-1.5 rounded-full bg-[#1FA855]" />
                              <span>Cranborne yard inventory record</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Professional Spacious Harare Yard Asset Library (Preset Selector) */}
                      <div className="border-t border-black/[0.06] pt-5 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <Package className="size-4 text-[#1D1D1F]" />
                              <h4 className="text-sm font-semibold text-[#1D1D1F]">
                                Harare Yard Fleet Photography Library
                              </h4>
                            </div>
                            <p className="text-xs text-[#86868B] mt-0.5">
                              Click any verified machine card below to instantly set as the primary photo.
                            </p>
                          </div>

                          {/* Instant Search Bar */}
                          <div className="relative min-w-[220px]">
                            <Search className="absolute left-3 top-2.5 size-3.5 text-[#86868B]" />
                            <input
                              type="text"
                              value={photoPresetSearch}
                              onChange={(e) => setPhotoPresetSearch(e.target.value)}
                              placeholder="Search machine models..."
                              className="w-full h-8.5 rounded-full border border-black/[0.08] bg-[#F5F5F7] pl-8.5 pr-3 text-xs text-[#1D1D1F] focus:bg-white focus:outline-none transition-colors"
                            />
                            {photoPresetSearch && (
                              <button
                                type="button"
                                onClick={() => setPhotoPresetSearch("")}
                                className="absolute right-2.5 top-2.5 text-[#86868B] hover:text-[#1D1D1F]"
                              >
                                <X className="size-3.5" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Category Filter Tabs */}
                        <div className="flex flex-wrap items-center gap-1.5">
                          {[
                            { id: "all", label: "All Fleet", count: 23 },
                            { id: "mining", label: "Mining Circuits", count: 7 },
                            { id: "hire", label: "Plant Hire Fleet", count: 5 },
                            { id: "farming", label: "Farming & Feed", count: 4 },
                            { id: "hardware", label: "Hardware & Fence", count: 4 },
                            { id: "industry", label: "Industrial Power", count: 3 },
                          ].map((f) => {
                            const active = presetCategoryFilter === f.id;
                            return (
                              <button
                                key={f.id}
                                type="button"
                                onClick={() => setPresetCategoryFilter(f.id)}
                                className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${
                                  active
                                    ? "bg-[#1D1D1F] text-white shadow-2xs font-semibold"
                                    : "bg-[#F5F5F7] text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-black/[0.06]"
                                }`}
                              >
                                <span>{f.label}</span>
                                <span
                                  className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                                    active ? "bg-white/20 text-white" : "bg-black/[0.05] text-[#86868B]"
                                  }`}
                                >
                                  {f.count}
                                </span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Spacious Visual Grid of Machinery Cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3.5 max-h-[440px] overflow-y-auto p-2 rounded-2xl bg-[#F9F9FA] border border-black/[0.06]">
                          {YARD_PHOTO_PRESETS.filter((p) => {
                            const matchesCat = presetCategoryFilter === "all" || p.category === presetCategoryFilter;
                            const matchesSearch =
                              !photoPresetSearch ||
                              p.label.toLowerCase().includes(photoPresetSearch.toLowerCase()) ||
                              p.spec.toLowerCase().includes(photoPresetSearch.toLowerCase()) ||
                              p.badge.toLowerCase().includes(photoPresetSearch.toLowerCase());
                            return matchesCat && matchesSearch;
                          }).map((preset) => {
                            const isSelected = editingProduct.image === preset.src;
                            return (
                              <button
                                type="button"
                                key={preset.src}
                                onClick={() => {
                                  setEditingProduct({ ...editingProduct, image: preset.src });
                                  triggerToast(`Applied ${preset.label} yard photo`);
                                }}
                                className={`group relative flex flex-col text-left rounded-2xl p-2.5 border transition-all ${
                                  isSelected
                                    ? "border-[#1D1D1F] bg-white ring-2 ring-[#1D1D1F] shadow-sm"
                                    : "border-black/[0.08] bg-white hover:border-black/[0.2] hover:shadow-xs"
                                }`}
                              >
                                <div className="relative h-28 sm:h-32 w-full rounded-xl overflow-hidden bg-black/[0.04] mb-2.5">
                                  <img
                                    src={preset.src}
                                    alt={preset.label}
                                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).src = "/images/hero.jpg";
                                    }}
                                  />
                                  {/* Category pill */}
                                  <span className="absolute top-1.5 left-1.5 rounded-md bg-black/70 px-2 py-0.5 text-[9px] font-semibold text-white uppercase tracking-wider backdrop-blur-xs">
                                    {preset.category}
                                  </span>

                                  {/* Selection Checkmark */}
                                  {isSelected && (
                                    <div className="absolute top-1.5 right-1.5 size-6 rounded-full bg-[#1FA855] text-white flex items-center justify-center shadow-xs">
                                      <Check className="size-3.5 stroke-[2.5]" />
                                    </div>
                                  )}
                                </div>

                                <div className="space-y-0.5 min-w-0 flex-1">
                                  <p className="text-xs font-semibold text-[#1D1D1F] truncate group-hover:text-black leading-tight">
                                    {preset.label}
                                  </p>
                                  <p className="text-[11px] text-[#6E6E73] truncate">
                                    {preset.spec}
                                  </p>
                                  <span className="inline-block text-[10px] font-medium text-[#86868B] bg-black/[0.03] px-1.5 py-0.5 rounded mt-1">
                                    {preset.badge}
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Model & Commercial Identity */}
                    <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-4">
                      <h3 className="font-semibold text-[#1D1D1F] text-sm border-b border-black/[0.06] pb-3">
                        Model & Commercial Identity
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="sm:col-span-2">
                          <label className="mb-1 block font-medium text-[#1D1D1F]">
                            Equipment Model / Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={editingProduct.name}
                            onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                            placeholder="e.g. 250x400 Jaw Crusher or Cat 320D Excavator"
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">
                            Division
                          </label>
                          <select
                            value={editingProduct.category}
                            onChange={(e) =>
                              setEditingProduct({
                                ...editingProduct,
                                category: e.target.value as ExtendedEquipment["category"],
                              })
                            }
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          >
                            <option value="mining">Mining Equipment</option>
                            <option value="hire">Construction Machinery Hire</option>
                            <option value="hardware">Hardware & Construction</option>
                            <option value="farming">Farming Machinery</option>
                            <option value="industry">Industry & Manufacturing</option>
                          </select>
                        </div>

                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">
                            Commercial Deal Type
                          </label>
                          <select
                            value={editingProduct.intent}
                            onChange={(e) =>
                              setEditingProduct({
                                ...editingProduct,
                                intent: e.target.value as ExtendedEquipment["intent"],
                              })
                            }
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          >
                            <option value="sale">Outright Sale</option>
                            <option value="hire">Plant Hire / Rental</option>
                          </select>
                        </div>

                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">
                            Indicative Rate / Price USD
                          </label>
                          <input
                            type="text"
                            value={editingProduct.priceUSD || editingProduct.price || ""}
                            onChange={(e) =>
                              setEditingProduct({
                                ...editingProduct,
                                priceUSD: e.target.value,
                                price: e.target.value,
                              })
                            }
                            placeholder="e.g. $4,800 USD or $180/hr dry"
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">
                            Price Note / Terms
                          </label>
                          <input
                            type="text"
                            value={editingProduct.priceNote || ""}
                            onChange={(e) => setEditingProduct({ ...editingProduct, priceNote: e.target.value })}
                            placeholder="e.g. FOB Cranborne Yard or Wet / Dry Options"
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">
                            Cranborne Yard Stock Status
                          </label>
                          <select
                            value={editingProduct.stockStatus || "In Yard Cranborne"}
                            onChange={(e) =>
                              setEditingProduct({
                                ...editingProduct,
                                stockStatus: e.target.value as ExtendedEquipment["stockStatus"],
                              })
                            }
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none font-medium"
                          >
                            <option value="In Yard Cranborne">In Yard Cranborne</option>
                            <option value="In Transit (Beitbridge)">In Transit (Beitbridge)</option>
                            <option value="Active on Site">Active on Site</option>
                            <option value="Special Order">Special Order</option>
                          </select>
                        </div>

                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">
                            SKU / Model Identifier
                          </label>
                          <input
                            type="text"
                            value={editingProduct.sku || editingProduct.id}
                            onChange={(e) => setEditingProduct({ ...editingProduct, sku: e.target.value })}
                            placeholder="e.g. OMNI-MIN-402"
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none font-mono"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Card 3: Technical Specifications & Power Drive */}
                    <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-4">
                      <h3 className="font-semibold text-[#1D1D1F] text-sm border-b border-black/[0.06] pb-3">
                        Technical Specifications & Power Engineering
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">
                            Hourly Throughput / Operating Capacity
                          </label>
                          <input
                            type="text"
                            value={editingProduct.throughput || ""}
                            onChange={(e) => setEditingProduct({ ...editingProduct, throughput: e.target.value })}
                            placeholder="e.g. 5–8 Tonnes / Hour or 37m Boom Reach"
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">
                            Power Drive / Motor Configuration
                          </label>
                          <input
                            type="text"
                            value={editingProduct.powerOption || ""}
                            onChange={(e) => setEditingProduct({ ...editingProduct, powerOption: e.target.value })}
                            placeholder="e.g. 15kW 3-Phase Electric or 22HP Diesel Kit"
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="mb-1 block font-medium text-[#1D1D1F]">
                            Quick Specification Tagline
                          </label>
                          <input
                            type="text"
                            value={editingProduct.spec || ""}
                            onChange={(e) => setEditingProduct({ ...editingProduct, spec: e.target.value })}
                            placeholder="e.g. Primary crush · gold & chrome circuits"
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">
                            Equipment Condition
                          </label>
                          <select
                            value={editingProduct.condition || "New"}
                            onChange={(e) =>
                              setEditingProduct({
                                ...editingProduct,
                                condition: e.target.value as ExtendedEquipment["condition"],
                              })
                            }
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          >
                            <option value="New">Brand New (Factory Direct)</option>
                            <option value="Refurbished / Certified">Refurbished / Harare Certified</option>
                          </select>
                        </div>

                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">
                            Warranty Period (Months)
                          </label>
                          <input
                            type="number"
                            min={0}
                            max={60}
                            value={editingProduct.warrantyMonths ?? 12}
                            onChange={(e) =>
                              setEditingProduct({
                                ...editingProduct,
                                warrantyMonths: Number(e.target.value) || 0,
                              })
                            }
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="mb-1 block font-medium text-[#1D1D1F]">
                            Catalogue Badge / Highlight Tag
                          </label>
                          <input
                            type="text"
                            value={editingProduct.badge || ""}
                            onChange={(e) => setEditingProduct({ ...editingProduct, badge: e.target.value })}
                            placeholder="e.g. Processing, In Stock, Immediate Delivery, Heavy Fleet"
                            className="h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Card 4: Detailed Overviews & Field Application Notes */}
                    <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-4">
                      <h3 className="font-semibold text-[#1D1D1F] text-sm border-b border-black/[0.06] pb-3">
                        Catalogue Copy & Field Engineering Notes
                      </h3>

                      <div className="space-y-3 text-xs">
                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">
                            Catalogue Overview & Application Summary *
                          </label>
                          <textarea
                            rows={3}
                            required
                            value={editingProduct.blurb}
                            onChange={(e) => setEditingProduct({ ...editingProduct, blurb: e.target.value })}
                            placeholder="Clear, punchy operational overview for miners, farmers, or contractors."
                            className="w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 leading-relaxed text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="mb-1 block font-medium text-[#1D1D1F]">
                            Detailed Technical Notes & Commissioning Details
                          </label>
                          <textarea
                            rows={4}
                            value={editingProduct.detailedNotes || ""}
                            onChange={(e) => setEditingProduct({ ...editingProduct, detailedNotes: e.target.value })}
                            placeholder="Liner manganese rating, discharge mesh settings, electrical starter box type, recommended generator kVA, and field commissioning protocol."
                            className="w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 leading-relaxed text-[#1D1D1F] focus:bg-white focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] pt-4">
                        <button
                          type="button"
                          onClick={closeProductProfile}
                          className="inline-flex h-11 items-center rounded-full border border-black/[0.08] bg-[#F5F5F7] px-5 text-xs font-medium text-[#1D1D1F] hover:bg-black/[0.06] transition-colors"
                        >
                          Cancel
                        </button>

                        <button
                          type="submit"
                          className="inline-flex h-11 items-center gap-2 rounded-full bg-[#1D1D1F] px-6 text-xs font-semibold text-white hover:bg-black transition-all active:scale-95 shadow-xs"
                        >
                          <Check className="size-4" />
                          <span>Save Specifications</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Actions & Live Tools Column */}
                  <div className="space-y-5 lg:col-span-4">
                    {/* Live WhatsApp Spec Card Generator */}
                    <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#86868B]">
                          Client WhatsApp Quotation
                        </span>
                        <span className="rounded-full bg-[#E8F8EE] px-2 py-0.5 text-[9px] font-bold text-[#1B833E]">
                          Live Spec Card
                        </span>
                      </div>
                      <p className="text-xs text-[#6E6E73] leading-relaxed">
                        Share these verified machinery specs and photo directly with clients inquiring on WhatsApp.
                      </p>

                      <div className="rounded-xl border border-black/[0.06] bg-[#F9F9FA] p-3 text-[11px] space-y-2 font-mono text-[#1D1D1F]">
                        {/* Machine Visual Thumbnail */}
                        <div className="relative h-36 w-full rounded-lg overflow-hidden bg-black/[0.05] border border-black/[0.05]">
                          <img
                            src={editingProduct.image || "/images/jaw-crusher.jpg"}
                            alt={editingProduct.name}
                            className="size-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/hero.jpg";
                            }}
                          />
                          <span className="absolute top-1.5 left-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[9px] font-medium text-white backdrop-blur-xs font-sans capitalize">
                            {editingProduct.category}
                          </span>
                        </div>

                        <div>
                          <p className="font-semibold text-xs font-sans text-[#1D1D1F]">{editingProduct.name}</p>
                          <p className="text-[#6E6E73] text-[10px]">SKU: {editingProduct.sku || editingProduct.id}</p>
                        </div>
                        <div className="border-t border-black/[0.06] pt-1.5 space-y-1 text-[11px]">
                          <div>• <span className="text-[#86868B]">Throughput:</span> {editingProduct.throughput || editingProduct.spec || "Site Rated"}</div>
                          <div>• <span className="text-[#86868B]">Drive:</span> {editingProduct.powerOption || "Electric / Diesel"}</div>
                          <div>• <span className="text-[#86868B]">Yard:</span> {editingProduct.stockStatus || "In Yard Cranborne"}</div>
                          <div>• <span className="text-[#86868B]">Rate:</span> {editingProduct.priceUSD || editingProduct.price || "Tender on Request"}</div>
                        </div>
                      </div>

                      <a
                        href={whatsappUrl(
                          `Hello from Omnicore Solutions Harare. Regarding ${editingProduct.name} (${editingProduct.sku || editingProduct.id}):\n• Capacity: ${editingProduct.throughput || editingProduct.spec || "Site Rated"}\n• Power: ${editingProduct.powerOption || "Electric 3-Phase / Diesel"}\n• Availability: ${editingProduct.stockStatus || "In Yard Cranborne"}\n• Rate: ${editingProduct.priceUSD || editingProduct.price || "Tender on Request"}\n\nInspections welcome at 115 Chiremba Rd, Cranborne, Harare.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#1fa855] text-xs font-semibold text-white shadow-xs hover:bg-[#1b934b] transition-all"
                      >
                        <WhatsAppIcon className="size-4" />
                        <span>Send Client Spec Sheet</span>
                      </a>
                    </div>

                    {/* Yard & Availability Management */}
                    <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-3">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#86868B]">
                        Yard Management & Quick Actions
                      </span>

                      <button
                        type="button"
                        onClick={() => handleToggleStockStatus(editingProduct.id)}
                        className="inline-flex h-10 w-full items-center justify-between rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3.5 text-xs font-medium text-[#1D1D1F] hover:bg-black/[0.06] transition-colors"
                      >
                        <span>Rotate Stock Status</span>
                        <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-semibold text-[#1D1D1F] shadow-2xs border border-black/[0.04]">
                          {editingProduct.stockStatus || "In Yard Cranborne"}
                        </span>
                      </button>

                      <div className="flex flex-col gap-2 pt-1 text-xs">
                        <Link
                          to="/catalogue"
                          className="inline-flex h-10 items-center justify-between rounded-xl border border-black/[0.08] bg-white px-3.5 font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
                        >
                          <span>Open Public Catalogue</span>
                          <ExternalLink className="size-3.5 text-[#86868B]" />
                        </Link>

                        <Link
                          to="/services/$slug"
                          params={{ slug: editingProduct.category }}
                          className="inline-flex h-10 items-center justify-between rounded-xl border border-black/[0.08] bg-white px-3.5 font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
                        >
                          <span className="capitalize">View {editingProduct.category} Division</span>
                          <ExternalLink className="size-3.5 text-[#86868B]" />
                        </Link>
                      </div>
                    </div>

                    {/* Recycle */}
                    <div className="rounded-2xl border border-red-200 bg-red-50/40 p-5 shadow-xs space-y-3">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-red-700">
                        Catalogue Decommissioning
                      </span>
                      <p className="text-xs text-red-600/90 leading-relaxed">
                        Move this machinery listing to the recycle bin. It will disappear from Cranborne inventory and the public catalogue until restored.
                      </p>
                      <button
                        type="button"
                        onClick={() => handleDeleteProduct(editingProduct.id)}
                        className="inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-full border border-red-200 bg-white text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="size-3.5" />
                        <span>Move to Recycle Bin</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-[#1D1D1F]">
                  Machinery & Catalogue Inventory
                </h2>
                <p className="text-xs text-[#86868B] mt-0.5">
                  Manage technical specifications, throughput, power drives, and stock status across Cranborne yard.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-[#86868B]" />
                  <input
                    type="text"
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    placeholder="Search model, throughput, SKU..."
                    className="h-9 w-48 sm:w-64 rounded-full border border-black/[0.08] bg-white pl-9 pr-3 text-xs text-[#1D1D1F] placeholder-[#86868B] shadow-2xs focus:outline-none"
                  />
                </div>

                <select
                  value={productCategoryFilter}
                  onChange={(e) => setProductCategoryFilter(e.target.value)}
                  className="h-9 rounded-full border border-black/[0.08] bg-white px-3 text-xs text-[#1D1D1F] shadow-2xs focus:outline-none"
                >
                  <option value="all">All Divisions</option>
                  <option value="mining">Mining</option>
                  <option value="hire">Hire Plant</option>
                  <option value="hardware">Hardware & Fence</option>
                  <option value="farming">Farming</option>
                  <option value="industry">Industrial</option>
                </select>

                <button
                  onClick={() => setShowAddProductModal(true)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#1D1D1F] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-black transition-all active:scale-95"
                >
                  <Plus className="size-3.5" />
                  <span>Add Machine</span>
                </button>
                <button
                  onClick={() => setActiveTab("recycle")}
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3 py-2 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7]"
                  title="Open recycle bin"
                >
                  <Recycle className="size-3.5 text-[#6E6E73]" />
                  <span className="hidden sm:inline">Bin</span>
                  {recycleBin.filter((i) => i.kind === "product").length > 0 && (
                    <span className="rounded-full bg-black/[0.06] px-1.5 text-[10px] font-semibold">
                      {recycleBin.filter((i) => i.kind === "product").length}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {selectedProductIds.length > 0 && (
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#1D1D1F]/10 bg-[#1D1D1F] px-4 py-2.5 text-white shadow-xs">
                <span className="text-xs font-semibold">
                  {selectedProductIds.length} machine{selectedProductIds.length === 1 ? "" : "s"} selected
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProductIds([])}
                    className="rounded-full px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={() => setPendingAction({ type: "delete-products", ids: selectedProductIds })}
                    className="inline-flex items-center gap-1.5 rounded-full bg-red-500 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-red-400"
                  >
                    <Trash2 className="size-3.5" />
                    Move to recycle bin
                  </button>
                </div>
              </div>
            )}

            {/* Clean Products Table */}
            <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-black/[0.06] bg-[#FBFBFC] text-[11px] font-semibold text-[#86868B] uppercase tracking-wider">
                      <th className="w-10 py-3 pl-4 pr-1">
                        <RowCheck
                          label="Select all machines on this page"
                          checked={
                            paginatedProducts.length > 0 &&
                            paginatedProducts.every((p) => selectedProductIds.includes(p.id))
                          }
                          indeterminate={
                            paginatedProducts.some((p) => selectedProductIds.includes(p.id)) &&
                            !paginatedProducts.every((p) => selectedProductIds.includes(p.id))
                          }
                          onChange={(next) => {
                            const pageIds = paginatedProducts.map((p) => p.id);
                            setSelectedProductIds((prev) =>
                              next
                                ? [...new Set([...prev, ...pageIds])]
                                : prev.filter((id) => !pageIds.includes(id)),
                            );
                          }}
                        />
                      </th>
                      <th className="py-3 px-4">SKU / Equipment Name</th>
                      <th className="py-3 px-3">Division</th>
                      <th className="py-3 px-3">Throughput & Drive</th>
                      <th className="py-3 px-3">Yard Stock Status</th>
                      <th className="py-3 px-3">Indicative Rate</th>
                      <th className="py-3 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/[0.04]">
                    {filteredProducts.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-[#86868B]">
                          No machinery records match the current filter.
                        </td>
                      </tr>
                    ) : (
                      paginatedProducts.map((item) => (
                        <tr
                          key={item.id}
                          onClick={() => setPeekProductId(item.id)}
                          className={`cursor-pointer transition-colors ${
                            selectedProductIds.includes(item.id)
                              ? "bg-[#F3F8FF]"
                              : peekProductId === item.id
                                ? "bg-[#F5F5F7]"
                                : "hover:bg-black/[0.015]"
                          }`}
                        >
                          <td
                            className="w-10 py-3 pl-4 pr-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <RowCheck
                              label={`Select ${item.name}`}
                              checked={selectedProductIds.includes(item.id)}
                              onChange={(next) =>
                                setSelectedProductIds((prev) =>
                                  next ? [...prev, item.id] : prev.filter((id) => id !== item.id),
                                )
                              }
                            />
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="size-11 rounded-xl overflow-hidden bg-black/[0.04] border border-black/[0.06] shrink-0 shadow-2xs">
                                <img
                                  src={item.image || "/images/hero.jpg"}
                                  alt={item.name}
                                  className="size-full object-cover"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = "/images/hero.jpg";
                                  }}
                                />
                              </div>
                              <div>
                                <span className="font-semibold text-[#1D1D1F] block">{item.name}</span>
                                <span className="text-[10px] font-mono text-[#86868B]">{item.sku || item.id}</span>
                              </div>
                            </div>
                          </td>

                          <td className="py-3 px-3">
                            <span className="rounded-full bg-black/[0.04] px-2 py-0.5 text-[10px] font-medium text-[#6E6E73] uppercase tracking-wide">
                              {item.category}
                            </span>
                          </td>

                          <td className="py-3 px-3 text-[#6E6E73]">
                            <span className="text-[#1D1D1F] font-medium block">
                              {item.throughput || item.spec}
                            </span>
                            <span className="text-[10px] text-[#86868B] block truncate max-w-[200px]">
                              {item.powerOption || "Electric 380V / Diesel"}
                            </span>
                          </td>

                          <td className="py-3 px-3" onClick={(e) => e.stopPropagation()}>
                            <button
                              onClick={() => handleToggleStockStatus(item.id)}
                              className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium transition-all ${
                                item.stockStatus === "In Yard Cranborne"
                                  ? "bg-[#E8F8EE] text-[#1B833E]"
                                  : item.stockStatus === "In Transit (Beitbridge)"
                                  ? "bg-[#FFF4E5] text-[#B25E00]"
                                  : "bg-black/[0.04] text-[#6E6E73]"
                              }`}
                            >
                              {item.stockStatus || "In Yard Cranborne"}
                            </button>
                          </td>

                          <td className="py-3 px-3 font-semibold text-[#1D1D1F]">
                            {item.priceUSD || item.price || "Tender on Req"}
                          </td>

                          <td className="py-3 px-3 text-right" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-end gap-1">
                              <button
                                onClick={() => openProductProfile(item)}
                                className="inline-flex h-11 items-center gap-1 rounded-full border border-black/[0.08] bg-white px-3 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all"
                              >
                                <Edit3 className="size-3 text-[#6E6E73]" />
                                <span>Edit Specs</span>
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  setPendingAction({ type: "delete-products", ids: [item.id] })
                                }
                                className="inline-flex size-11 items-center justify-center rounded-full border border-red-200 bg-white text-red-600 hover:bg-red-50"
                                title="Move to recycle bin"
                              >
                                <Trash2 className="size-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Product Pagination Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-black/[0.06] bg-[#FBFBFC] px-4 py-3 text-xs text-[#6E6E73]">
                <div className="flex flex-wrap items-center gap-2">
                  <span>Showing</span>
                  <span className="font-semibold text-[#1D1D1F]">
                    {filteredProducts.length === 0 ? 0 : (productPage - 1) * productPageSize + 1}
                  </span>
                  <span>to</span>
                  <span className="font-semibold text-[#1D1D1F]">
                    {Math.min(productPage * productPageSize, filteredProducts.length)}
                  </span>
                  <span>of</span>
                  <span className="font-semibold text-[#1D1D1F]">{filteredProducts.length}</span>
                  <span>machinery models</span>

                  <span className="mx-1 text-black/20">|</span>

                  <div className="flex items-center gap-1.5">
                    <span>Per page:</span>
                    <select
                      value={productPageSize}
                      onChange={(e) => {
                        setProductPageSize(Number(e.target.value));
                        setProductPage(1);
                      }}
                      className="rounded-lg border border-black/[0.08] bg-white px-2 py-0.5 text-xs text-[#1D1D1F] focus:outline-none"
                    >
                      <option value={6}>6</option>
                      <option value={12}>12</option>
                      <option value={24}>24</option>
                      <option value={50}>50</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-1 self-end sm:self-auto">
                  <button
                    onClick={() => setProductPage(1)}
                    disabled={productPage <= 1}
                    className="rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    title="First page"
                  >
                    <ChevronsLeft className="size-4" />
                  </button>
                  <button
                    onClick={() => setProductPage((p) => Math.max(1, p - 1))}
                    disabled={productPage <= 1}
                    className="rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    title="Previous page"
                  >
                    <ChevronLeft className="size-4" />
                  </button>

                  <div className="flex items-center gap-1 px-1">
                    {Array.from({ length: productTotalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => setProductPage(pageNum)}
                        className={`min-w-6 h-6 rounded-md px-1.5 text-xs font-medium transition-all ${
                          productPage === pageNum
                            ? "bg-[#1D1D1F] text-white font-semibold shadow-xs"
                            : "text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F]"
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setProductPage((p) => Math.min(productTotalPages, p + 1))}
                    disabled={productPage >= productTotalPages}
                    className="rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    title="Next page"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                  <button
                    onClick={() => setProductPage(productTotalPages)}
                    disabled={productPage >= productTotalPages}
                    className="rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    title="Last page"
                  >
                    <ChevronsRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>

              </>
            )}

            {peekProduct && !productProfileOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
                onClick={() => setPeekProductId(null)}
              >
                <div
                  className="w-full max-w-md rounded-2xl border border-black/[0.08] bg-white p-5 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="size-16 shrink-0 overflow-hidden rounded-xl border border-black/[0.06] bg-black/[0.04]">
                        <img
                          src={peekProduct.image || "/images/hero.jpg"}
                          alt={peekProduct.name}
                          className="size-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/hero.jpg";
                          }}
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-[11px] text-[#86868B]">{peekProduct.sku || peekProduct.id}</p>
                        <h3 className="text-base font-semibold text-[#1D1D1F]">{peekProduct.name}</h3>
                        <p className="text-xs uppercase tracking-wide text-[#6E6E73]">{peekProduct.category}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPeekProductId(null)}
                      className="rounded-full p-2 text-[#86868B] hover:bg-[#F5F5F7] hover:text-[#1D1D1F]"
                    >
                      <X className="size-4" />
                    </button>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl bg-[#F5F5F7] p-2.5">
                      <span className="block text-[10px] uppercase text-[#86868B]">Stock</span>
                      <span className="font-semibold text-[#1D1D1F]">{peekProduct.stockStatus || "In Yard Cranborne"}</span>
                    </div>
                    <div className="rounded-xl bg-[#F5F5F7] p-2.5">
                      <span className="block text-[10px] uppercase text-[#86868B]">Rate</span>
                      <span className="font-semibold text-[#1D1D1F]">{peekProduct.priceUSD || peekProduct.price || "Tender on Req"}</span>
                    </div>
                    <div className="col-span-2 rounded-xl bg-[#F5F5F7] p-2.5">
                      <span className="block text-[10px] uppercase text-[#86868B]">Throughput / drive</span>
                      <span className="font-medium text-[#1D1D1F]">
                        {peekProduct.throughput || peekProduct.spec} · {peekProduct.powerOption || "Electric / Diesel"}
                      </span>
                    </div>
                    <div className="col-span-2 rounded-xl bg-[#F5F5F7] p-2.5">
                      <span className="block text-[10px] uppercase text-[#86868B]">Overview</span>
                      <span className="text-[#1D1D1F]">{peekProduct.blurb}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      type="button"
                      onClick={() => openProductProfile(peekProduct)}
                      className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-[#1D1D1F] text-xs font-semibold text-white hover:bg-black"
                    >
                      <Edit3 className="size-3.5" />
                      Edit specifications
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setPendingAction({ type: "delete-products", ids: [peekProduct.id] })
                      }
                      className="inline-flex h-11 items-center justify-center rounded-full border border-red-200 px-4 text-red-600 hover:bg-red-50"
                      title="Move to recycle bin"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

                        {/* Modal: Add New Equipment */}
            {showAddProductModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-150">
                <div className="w-full max-w-xl rounded-2xl border border-black/[0.08] bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
                  <div className="flex items-center justify-between border-b border-black/[0.06] pb-3">
                    <h3 className="text-sm font-semibold text-[#1D1D1F]">
                      Add Machinery to Cranborne Catalogue
                    </h3>
                    <button
                      onClick={() => setShowAddProductModal(false)}
                      className="rounded-full p-1 text-[#86868B] hover:bg-[#F5F5F7]"
                    >
                      <X className="size-4" />
                    </button>
                  </div>

                  <form onSubmit={handleCreateProduct} className="mt-4 space-y-3.5 text-xs">
                    {/* Equipment Photo & Live Preview in Add Modal */}
                    <div className="rounded-xl border border-black/[0.08] bg-[#FBFBFC] p-3.5 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-semibold text-[#1D1D1F] block text-xs">
                            Equipment Photo & Live Preview
                          </span>
                          <span className="text-[11px] text-[#86868B]">
                            Upload a photo from your device or select from Harare yard photo library.
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 items-start">
                        {/* Live Photo Preview */}
                        <div className="relative size-28 sm:size-32 rounded-xl overflow-hidden bg-black/[0.05] border border-black/[0.08] shrink-0 shadow-xs group">
                          <img
                            src={newProdImage || "/images/jaw-crusher.jpg"}
                            alt="Preview"
                            className="size-full object-cover object-center"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/hero.jpg";
                            }}
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <label className="cursor-pointer text-white text-[10px] font-semibold bg-black/70 px-2 py-1 rounded-md hover:bg-black">
                              Change
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, false)}
                                className="hidden"
                              />
                            </label>
                          </div>
                          <span className="absolute bottom-1 right-1 rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-medium text-white backdrop-blur-xs">
                            Live Preview
                          </span>
                        </div>

                        {/* Upload & Presets */}
                        <div className="flex-1 space-y-3 w-full">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <label className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.1] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7] cursor-pointer transition-all active:scale-95">
                              <Upload className="size-3.5 text-[#1D1D1F]" />
                              <span>Upload Machine Image</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, false)}
                                className="hidden"
                              />
                            </label>

                            {/* Instant Preset Search */}
                            <div className="relative min-w-[180px]">
                              <Search className="absolute left-2.5 top-2 size-3 text-[#86868B]" />
                              <input
                                type="text"
                                value={newPhotoPresetSearch}
                                onChange={(e) => setNewPhotoPresetSearch(e.target.value)}
                                placeholder="Search presets..."
                                className="w-full h-7 rounded-full border border-black/[0.08] bg-[#F5F5F7] pl-7 pr-2.5 text-[11px] text-[#1D1D1F] focus:bg-white focus:outline-none"
                              />
                              {newPhotoPresetSearch && (
                                <button
                                  type="button"
                                  onClick={() => setNewPhotoPresetSearch("")}
                                  className="absolute right-2 top-2 text-[#86868B] hover:text-[#1D1D1F]"
                                >
                                  <X className="size-3" />
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Category Filter Pills for Add Modal */}
                          <div className="flex flex-wrap items-center gap-1">
                            {[
                              { id: "all", label: "All Fleet" },
                              { id: "mining", label: "Mining" },
                              { id: "hire", label: "Hire" },
                              { id: "farming", label: "Farming" },
                              { id: "hardware", label: "Hardware" },
                              { id: "industry", label: "Industry" },
                            ].map((f) => (
                              <button
                                key={f.id}
                                type="button"
                                onClick={() => setNewPresetCategoryFilter(f.id)}
                                className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition-all ${
                                  newPresetCategoryFilter === f.id
                                    ? "bg-[#1D1D1F] text-white font-semibold shadow-2xs"
                                    : "bg-black/[0.04] text-[#6E6E73] hover:text-[#1D1D1F]"
                                }`}
                              >
                                {f.label}
                              </button>
                            ))}
                          </div>

                          {/* Roomy Grid of Verified Preset Photo Cards */}
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto p-2 rounded-xl bg-[#F9F9FA] border border-black/[0.06]">
                            {YARD_PHOTO_PRESETS.filter((p) => {
                              const matchesCat = newPresetCategoryFilter === "all" || p.category === newPresetCategoryFilter;
                              const matchesSearch =
                                !newPhotoPresetSearch ||
                                p.label.toLowerCase().includes(newPhotoPresetSearch.toLowerCase()) ||
                                p.spec.toLowerCase().includes(newPhotoPresetSearch.toLowerCase());
                              return matchesCat && matchesSearch;
                            }).map((preset) => {
                              const isSelected = newProdImage === preset.src;
                              return (
                                <button
                                  type="button"
                                  key={preset.src}
                                  onClick={() => setNewProdImage(preset.src)}
                                  className={`group relative flex flex-col text-left rounded-xl p-2 border transition-all ${
                                    isSelected
                                      ? "border-[#1D1D1F] bg-white ring-2 ring-[#1D1D1F] shadow-xs"
                                      : "border-black/[0.08] bg-white hover:border-black/[0.2]"
                                  }`}
                                >
                                  <div className="relative h-20 w-full rounded-lg overflow-hidden bg-black/[0.04] mb-1.5">
                                    <img
                                      src={preset.src}
                                      alt={preset.label}
                                      className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                                      onError={(e) => {
                                        (e.target as HTMLImageElement).src = "/images/hero.jpg";
                                      }}
                                    />
                                    <span className="absolute top-1 left-1 rounded bg-black/70 px-1.5 py-0.5 text-[8px] font-semibold text-white uppercase tracking-wider backdrop-blur-xs">
                                      {preset.category}
                                    </span>
                                    {isSelected && (
                                      <div className="absolute top-1 right-1 size-5 rounded-full bg-[#1FA855] text-white flex items-center justify-center shadow-xs">
                                        <Check className="size-3 stroke-[2.5]" />
                                      </div>
                                    )}
                                  </div>

                                  <div className="min-w-0">
                                    <p className="text-[11px] font-semibold text-[#1D1D1F] truncate group-hover:text-black">
                                      {preset.label}
                                    </p>
                                    <p className="text-[10px] text-[#6E6E73] truncate">
                                      {preset.spec}
                                    </p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          <div className="flex items-center gap-2 pt-1">
                            <span className="text-[11px] font-medium text-[#1D1D1F] shrink-0">Custom URL / Path:</span>
                            <input
                              type="text"
                              value={newProdImage}
                              onChange={(e) => setNewProdImage(e.target.value)}
                              placeholder="/images/... or https://..."
                              className="w-full h-8 rounded-xl border border-black/[0.08] bg-white px-3 text-xs text-[#1D1D1F] focus:outline-none font-mono text-[11px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="font-medium text-[#1D1D1F] block mb-1">Equipment Model / Name *</label>
                        <input
                          type="text"
                          required
                          value={newProdName}
                          onChange={(e) => setNewProdName(e.target.value)}
                          placeholder="e.g. 250x400 Jaw Crusher or Cat 320D"
                          className="w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-medium text-[#1D1D1F] block mb-1">Division</label>
                        <select
                          value={newProdCategory}
                          onChange={(e) =>
                            setNewProdCategory(e.target.value as ExtendedEquipment["category"])
                          }
                          className="w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
                        >
                          <option value="mining">Mining Equipment</option>
                          <option value="hire">Construction Machinery Hire</option>
                          <option value="hardware">Hardware & Construction</option>
                          <option value="farming">Farming Machinery</option>
                          <option value="industry">Industry & Manufacturing</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="font-medium text-[#1D1D1F] block mb-1">Hourly Throughput</label>
                        <input
                          type="text"
                          value={newProdThroughput}
                          onChange={(e) => setNewProdThroughput(e.target.value)}
                          placeholder="e.g. 5–15 TPH or 35m boom"
                          className="w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-medium text-[#1D1D1F] block mb-1">Power / Motor Drive</label>
                        <input
                          type="text"
                          value={newProdPower}
                          onChange={(e) => setNewProdPower(e.target.value)}
                          placeholder="e.g. 15kW 380V or 35HP diesel"
                          className="w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-medium text-[#1D1D1F] block mb-1">Indicative Price / Rate</label>
                        <input
                          type="text"
                          value={newProdPrice}
                          onChange={(e) => setNewProdPrice(e.target.value)}
                          placeholder="e.g. $18,500 FOB Harare"
                          className="w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-medium text-[#1D1D1F] block mb-1">Technical Overview / Tagline</label>
                      <input
                        type="text"
                        value={newProdBlurb}
                        onChange={(e) => setNewProdBlurb(e.target.value)}
                        placeholder="Primary crushing for gold ore circuits. Heavy cast-steel eccentric shaft."
                        className="w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-2 border-t border-black/[0.06]">
                      <button
                        type="button"
                        onClick={() => setShowAddProductModal(false)}
                        className="rounded-full bg-[#F5F5F7] px-4 py-1.5 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F]"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="rounded-full bg-[#1D1D1F] px-4 py-1.5 text-xs font-semibold text-white hover:bg-black"
                      >
                        Add to Inventory
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: SITE COPY & CMS WRITER */}
        {/* ========================================================================= */}
        {activeTab === "cms" && (
          <div className="w-full space-y-6">
            {/* Top Control Bar with Quick Actions */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 rounded-3xl bg-white p-5 sm:p-6 border border-black/[0.06] shadow-xs">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-black/[0.05] text-[#1D1D1F]">
                    <Sparkles className="size-4 text-amber-500" />
                  </div>
                  <h2 className="text-xl font-semibold tracking-tight text-[#1D1D1F]">
                    Website Copy, Brand & Content Management
                  </h2>
                </div>
                <p className="text-xs text-[#86868B] mt-1 max-w-2xl">
                  Manage live headlines, Harare yard details, official contact channels, operating hours, and divisional messaging across Omnicore Solutions. Changes update in real-time nationwide.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <div className="relative min-w-[200px] sm:min-w-[240px]">
                  <Search className="absolute left-3 top-2.5 size-3.5 text-[#86868B]" />
                  <input
                    type="text"
                    placeholder="Search any copy or field..."
                    value={cmsSearch}
                    onChange={(e) => setCmsSearch(e.target.value)}
                    className="w-full h-8.5 rounded-full border border-black/[0.08] bg-[#F5F5F7] pl-8.5 pr-3 text-xs focus:bg-white focus:outline-none transition-colors"
                  />
                  {cmsSearch && (
                    <button
                      type="button"
                      onClick={() => setCmsSearch("")}
                      className="absolute right-2.5 top-2.5 text-[#86868B] hover:text-[#1D1D1F]"
                    >
                      <X className="size-3.5" />
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleResetSiteCopy}
                  className="inline-flex h-8.5 items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all active:scale-95"
                >
                  <RotateCcw className="size-3.5 text-[#86868B]" />
                  <span>Reset Defaults</span>
                </button>

                {/* View Layout Mode Switcher (Full Real Estate vs Split Studio) */}
                <div className="inline-flex rounded-full bg-[#F5F5F7] p-0.5 border border-black/[0.08] text-xs">
                  <button
                    type="button"
                    onClick={() => setCmsLayoutMode("full")}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
                      cmsLayoutMode === "full"
                        ? "bg-white text-[#1D1D1F] shadow-2xs font-semibold"
                        : "text-[#6E6E73] hover:text-[#1D1D1F]"
                    }`}
                    title="Expand across 100% of screen real estate with multi-column layouts"
                  >
                    <Maximize2 className="size-3.5" />
                    <span>Full-Width Studio</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCmsLayoutMode("split")}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
                      cmsLayoutMode === "split"
                        ? "bg-white text-[#1D1D1F] shadow-2xs font-semibold"
                        : "text-[#6E6E73] hover:text-[#1D1D1F]"
                    }`}
                    title="View side-by-side interactive live preview"
                  >
                    <Columns className="size-3.5" />
                    <span>Split Live Preview</span>
                  </button>
                </div>

                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8.5 items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all active:scale-95"
                >
                  <ExternalLink className="size-3.5 text-[#86868B]" />
                  <span>View Public Site</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleSaveSiteCopy()}
                  className={`inline-flex h-8.5 items-center gap-1.5 rounded-full px-5 text-xs font-semibold text-white shadow-xs transition-all active:scale-95 ${
                    hasUnsavedChanges
                      ? "bg-[#1FA855] hover:bg-[#1B934B] animate-pulse"
                      : "bg-[#1D1D1F] hover:bg-black"
                  }`}
                >
                  <Check className="size-3.5" />
                  <span>{hasUnsavedChanges ? "Publish Changes Live *" : "Published Live"}</span>
                </button>
              </div>
            </div>

            {/* Category Navigation Pills */}
            <div className="flex flex-wrap items-center gap-1.5 rounded-2xl bg-white p-2 border border-black/[0.06] shadow-2xs">
              {[
                { id: "hero", label: "🌟 Hero & Brand", count: 12 },
                { id: "yard", label: "📍 Yard, Facility & Delivery", count: 8 },
                { id: "contact", label: "📞 Contact Channels & Hotlines", count: 10 },
                { id: "hours", label: "⏰ Hours, Warranties & Terms", count: 10 },
                { id: "divisions", label: "🚜 Division Copy (5 Sectors)", count: 15 },
                { id: "about", label: "🏢 About & Corporate Pillars", count: 8 },
                { id: "social", label: "⚖️ Social, Legal & Footer", count: 8 },
                { id: "all", label: "📋 All Sections", count: 71 },
              ].map((cat) => {
                const isActive = cmsCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCmsCategory(cat.id as typeof cmsCategory)}
                    className={`inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${
                      isActive
                        ? "bg-[#1D1D1F] text-white shadow-2xs font-semibold"
                        : "text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] font-semibold ${
                        isActive ? "bg-white/20 text-white" : "bg-black/[0.05] text-[#86868B]"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Main Content: Full-Width Studio or Split Live Preview */}
            <div className={cmsLayoutMode === "split" ? "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" : "w-full"}>
              {/* Field Editor Column */}
              <div className={cmsLayoutMode === "split" ? "lg:col-span-8 xl:col-span-8 space-y-6" : "w-full space-y-6"}>
                <form onSubmit={handleSaveSiteCopy} className="space-y-6">
                  {/* Category 1: Hero & Brand */}
                  {(cmsCategory === "hero" || cmsCategory === "all" || cmsSearch) && (
                    <div className="rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-7 shadow-xs space-y-5">
                      <div className="flex items-center justify-between pb-3.5 border-b border-black/[0.05]">
                        <div className="flex items-center gap-2.5">
                          <div className="flex size-8 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                            <Sparkles className="size-4.5" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-[#1D1D1F]">
                              Hero Banner & Brand Identity Messaging
                            </h3>
                            <p className="text-xs text-[#86868B] mt-0.5">
                              Controls the primary landing headlines, yard announcement banner, call-to-actions, and key stats.
                            </p>
                          </div>
                        </div>
                        <span className="rounded-full bg-amber-100/70 px-3 py-1 text-xs font-semibold text-amber-800">
                          Above The Fold
                        </span>
                      </div>

                      {/* Brand Row: Multi-column */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Company Legal Name
                          </label>
                          <input
                            type="text"
                            value={cmsForm.name}
                            onChange={(e) => updateCmsField("name", e.target.value)}
                            className="w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="Omnicore Solutions"
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Brand Short Name
                          </label>
                          <input
                            type="text"
                            value={cmsForm.shortName}
                            onChange={(e) => updateCmsField("shortName", e.target.value)}
                            className="w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="Omnicore"
                          />
                        </div>
                        <div className="xl:col-span-2">
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Company Tagline
                          </label>
                          <input
                            type="text"
                            value={cmsForm.tagline}
                            onChange={(e) => updateCmsField("tagline", e.target.value)}
                            className="w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="Machinery for Zimbabwe's farms, mines and sites."
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Founded Year
                          </label>
                          <input
                            type="text"
                            value={cmsForm.foundedYear}
                            onChange={(e) => updateCmsField("foundedYear", e.target.value)}
                            className="w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="2024"
                          />
                        </div>
                      </div>

                      {/* Announcement & Yard Badge Row */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Top Yard & Operational Announcement Banner
                          </label>
                          <input
                            type="text"
                            value={cmsForm.heroBannerAnnouncement || ""}
                            onChange={(e) => updateCmsField("heroBannerAnnouncement", e.target.value)}
                            className="w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="Cranborne Yard Open Mon–Sat · Lowbed Deliveries Nationwide"
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Cranborne Yard Badge Text (Top of Hero)
                          </label>
                          <input
                            type="text"
                            value={cmsForm.heroBadge}
                            onChange={(e) => updateCmsField("heroBadge", e.target.value)}
                            className="w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="Cranborne yard · 115 Chiremba Road, Harare"
                          />
                        </div>
                      </div>

                      {/* Headlines Row */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start">
                        <div className="lg:col-span-6 space-y-1">
                          <label className="font-semibold text-[#1D1D1F] text-xs block">
                            Homepage Hero Headline
                          </label>
                          <input
                            type="text"
                            value={cmsForm.heroHeadline}
                            onChange={(e) => updateCmsField("heroHeadline", e.target.value)}
                            className="w-full h-11 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3.5 text-sm font-semibold text-[#1D1D1F] focus:bg-white focus:outline-none"
                            placeholder="Plant for Zimbabwe’s mines, farms and pours."
                          />
                        </div>

                        <div className="lg:col-span-6 space-y-1">
                          <div className="flex items-center justify-between">
                            <label className="font-semibold text-[#1D1D1F] text-xs">
                              Hero Narrative Subheadline
                            </label>
                            <span className="text-[10px] text-[#86868B]">
                              {cmsForm.heroSubheadline.length} chars
                            </span>
                          </div>
                          <textarea
                            rows={3}
                            value={cmsForm.heroSubheadline}
                            onChange={(e) => updateCmsField("heroSubheadline", e.target.value)}
                            className="w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 text-xs leading-relaxed focus:bg-white focus:outline-none"
                            placeholder="Gold circuits, fence plant, self-loading mixers..."
                          />
                        </div>
                      </div>

                      {/* Action CTA Buttons */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Primary CTA Button (WhatsApp Direct)
                          </label>
                          <input
                            type="text"
                            value={cmsForm.heroCtaPrimary}
                            onChange={(e) => updateCmsField("heroCtaPrimary", e.target.value)}
                            className="w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-medium"
                            placeholder="Chat on WhatsApp"
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Secondary CTA Button (Tender Quote)
                          </label>
                          <input
                            type="text"
                            value={cmsForm.heroCtaSecondary}
                            onChange={(e) => updateCmsField("heroCtaSecondary", e.target.value)}
                            className="w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-medium"
                            placeholder="Request a firm quote"
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Tertiary CTA Button (Catalogue Browse)
                          </label>
                          <input
                            type="text"
                            value={cmsForm.heroCtaTertiary}
                            onChange={(e) => updateCmsField("heroCtaTertiary", e.target.value)}
                            className="w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-medium"
                            placeholder="Open the catalogue"
                          />
                        </div>
                      </div>

                      {/* 4 Quick Stats Highlights - Full Responsive 4-Column Grid */}
                      <div className="pt-3 border-t border-black/[0.05]">
                        <p className="font-semibold text-[#1D1D1F] text-xs mb-2.5">
                          Homepage 4 Statistics Highlights
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          <div className="rounded-2xl border border-black/[0.06] bg-[#F9F9FA] p-3 space-y-2">
                            <span className="text-[10px] font-bold text-[#86868B] uppercase tracking-wider">Stat 1</span>
                            <div className="space-y-1.5">
                              <input
                                type="text"
                                placeholder="Label (e.g. Harare hub)"
                                value={cmsForm.stat1Label}
                                onChange={(e) => updateCmsField("stat1Label", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold"
                              />
                              <input
                                type="text"
                                placeholder="Detail (e.g. Cranborne yard)"
                                value={cmsForm.stat1Detail}
                                onChange={(e) => updateCmsField("stat1Detail", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#6E6E73]"
                              />
                            </div>
                          </div>

                          <div className="rounded-2xl border border-black/[0.06] bg-[#F9F9FA] p-3 space-y-2">
                            <span className="text-[10px] font-bold text-[#86868B] uppercase tracking-wider">Stat 2</span>
                            <div className="space-y-1.5">
                              <input
                                type="text"
                                placeholder="Label (e.g. 1–25 TPH)"
                                value={cmsForm.stat2Label}
                                onChange={(e) => updateCmsField("stat2Label", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold"
                              />
                              <input
                                type="text"
                                placeholder="Detail (e.g. Gold circuits)"
                                value={cmsForm.stat2Detail}
                                onChange={(e) => updateCmsField("stat2Detail", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#6E6E73]"
                              />
                            </div>
                          </div>

                          <div className="rounded-2xl border border-black/[0.06] bg-[#F9F9FA] p-3 space-y-2">
                            <span className="text-[10px] font-bold text-[#86868B] uppercase tracking-wider">Stat 3</span>
                            <div className="space-y-1.5">
                              <input
                                type="text"
                                placeholder="Label (e.g. Wet & dry)"
                                value={cmsForm.stat3Label}
                                onChange={(e) => updateCmsField("stat3Label", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold"
                              />
                              <input
                                type="text"
                                placeholder="Detail (e.g. Plant hire)"
                                value={cmsForm.stat3Detail}
                                onChange={(e) => updateCmsField("stat3Detail", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#6E6E73]"
                              />
                            </div>
                          </div>

                          <div className="rounded-2xl border border-black/[0.06] bg-[#F9F9FA] p-3 space-y-2">
                            <span className="text-[10px] font-bold text-[#86868B] uppercase tracking-wider">Stat 4</span>
                            <div className="space-y-1.5">
                              <input
                                type="text"
                                placeholder="Label (e.g. 10 provinces)"
                                value={cmsForm.stat4Label}
                                onChange={(e) => updateCmsField("stat4Label", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold"
                              />
                              <input
                                type="text"
                                placeholder="Detail (e.g. Lowbed delivery)"
                                value={cmsForm.stat4Detail}
                                onChange={(e) => updateCmsField("stat4Detail", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#6E6E73]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Category 2: Yard Location & Facility */}
                  {(cmsCategory === "yard" || cmsCategory === "all" || cmsSearch) && (
                    <div className="rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-xs space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-black/[0.05]">
                        <div className="flex items-center gap-2">
                          <div className="flex size-7 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                            <MapPin className="size-4" />
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-[#1D1D1F]">
                              Yard Location & Physical Presence
                            </h3>
                            <p className="text-[11px] text-[#86868B]">
                              Physical demonstration yard, lowbed loading access, and Google Maps pin coordinates.
                            </p>
                          </div>
                        </div>
                        <span className="rounded-full bg-blue-100/60 px-2 py-0.5 text-[10px] font-semibold text-blue-800">
                          Harare Hub
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Street Address Line 1
                          </label>
                          <input
                            type="text"
                            value={cmsForm.yardAddressLine1}
                            onChange={(e) => updateCmsField("yardAddressLine1", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="115 Chiremba Road"
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Suburb & Industrial Belt Line 2
                          </label>
                          <input
                            type="text"
                            value={cmsForm.yardAddressLine2}
                            onChange={(e) => updateCmsField("yardAddressLine2", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="Cranborne, Harare"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            City / Metro
                          </label>
                          <input
                            type="text"
                            value={cmsForm.yardCity}
                            onChange={(e) => updateCmsField("yardCity", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="Harare"
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Country
                          </label>
                          <input
                            type="text"
                            value={cmsForm.yardCountry}
                            onChange={(e) => updateCmsField("yardCountry", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="Zimbabwe"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                          Google Maps Pin URL
                        </label>
                        <input
                          type="url"
                          value={cmsForm.googleMapsUrl}
                          onChange={(e) => updateCmsField("googleMapsUrl", e.target.value)}
                          className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]"
                          placeholder="https://www.google.com/maps/search/?api=1&query=..."
                        />
                      </div>

                      <div>
                        <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                          Directions & Heavy Machinery Loading Guidance
                        </label>
                        <textarea
                          rows={2}
                          value={cmsForm.yardDirectionsNote}
                          onChange={(e) => updateCmsField("yardDirectionsNote", e.target.value)}
                          className="w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 text-xs leading-relaxed focus:bg-white focus:outline-none"
                          placeholder="Along Chiremba Road, close to major Harare arterial routes..."
                        />
                      </div>

                      <div>
                        <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                          Yard Inspection & Testing Policy
                        </label>
                        <input
                          type="text"
                          value={cmsForm.inspectionNotice}
                          onChange={(e) => updateCmsField("inspectionNotice", e.target.value)}
                          className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                          placeholder="Physical yard mechanical inspections welcome Monday–Saturday at 115 Chiremba Rd, Cranborne."
                        />
                      </div>
                    </div>
                  )}

                  {/* Category 3: Contact Channels & WhatsApp */}
                  {(cmsCategory === "contact" || cmsCategory === "all" || cmsSearch) && (
                    <div className="rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-xs space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-black/[0.05]">
                        <div className="flex items-center gap-2">
                          <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                            <Phone className="size-4" />
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-[#1D1D1F]">
                              Contact Channels, Emergency Hotlines & WhatsApp Desk
                            </h3>
                            <p className="text-[11px] text-[#86868B]">
                              Direct voice lines, 24/7 site breakdown hotlines, WhatsApp numbers, and official email inboxes.
                            </p>
                          </div>
                        </div>
                        <span className="rounded-full bg-emerald-100/60 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                          Direct Lines
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Primary Phone (Display)
                          </label>
                          <input
                            type="text"
                            value={cmsForm.primaryPhone}
                            onChange={(e) => updateCmsField("primaryPhone", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="+263 77 733 4569"
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Primary Phone (Dialable URL)
                          </label>
                          <input
                            type="text"
                            value={cmsForm.primaryPhoneTel}
                            onChange={(e) => updateCmsField("primaryPhoneTel", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]"
                            placeholder="+263777334569"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Secondary Alternate Phone (Display)
                          </label>
                          <input
                            type="text"
                            value={cmsForm.secondaryPhone}
                            onChange={(e) => updateCmsField("secondaryPhone", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="+263 78 871 6082"
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Secondary Phone (Dialable URL)
                          </label>
                          <input
                            type="text"
                            value={cmsForm.secondaryPhoneTel}
                            onChange={(e) => updateCmsField("secondaryPhoneTel", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]"
                            placeholder="+263788716082"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Emergency 24/7 Breakdown Hotline (Display)
                          </label>
                          <input
                            type="text"
                            value={cmsForm.emergencyHotline}
                            onChange={(e) => updateCmsField("emergencyHotline", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="+263 77 733 4569"
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Emergency Hotline (Dialable URL)
                          </label>
                          <input
                            type="text"
                            value={cmsForm.emergencyHotlineTel}
                            onChange={(e) => updateCmsField("emergencyHotlineTel", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]"
                            placeholder="+263777334569"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            WhatsApp Business Number (digits only)
                          </label>
                          <input
                            type="text"
                            value={cmsForm.whatsappNumber}
                            onChange={(e) => updateCmsField("whatsappNumber", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]"
                            placeholder="263777334569"
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Technical Desk Email
                          </label>
                          <input
                            type="email"
                            value={cmsForm.email}
                            onChange={(e) => updateCmsField("email", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="omnicore-solutions@outlook.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                          Sales & Tenders Email
                        </label>
                        <input
                          type="email"
                          value={cmsForm.salesEmail}
                          onChange={(e) => updateCmsField("salesEmail", e.target.value)}
                          className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                          placeholder="sales@omnicoresolutions.co.zw"
                        />
                      </div>

                      <div>
                        <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                          Default WhatsApp Inbound Message Preset
                        </label>
                        <input
                          type="text"
                          value={cmsForm.whatsappMessage}
                          onChange={(e) => updateCmsField("whatsappMessage", e.target.value)}
                          className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                          placeholder="Hello Omnicore Harare Desk — I would like an equipment quote."
                        />
                      </div>
                    </div>
                  )}

                  {/* Category 4: Hours & SLAs */}
                  {(cmsCategory === "hours" || cmsCategory === "all" || cmsSearch) && (
                    <div className="rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-xs space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-black/[0.05]">
                        <div className="flex items-center gap-2">
                          <div className="flex size-7 items-center justify-center rounded-lg bg-purple-50 text-purple-700">
                            <Clock className="size-4" />
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-[#1D1D1F]">
                              Operating Hours, Dispatch Turnaround & SLAs
                            </h3>
                            <p className="text-[11px] text-[#86868B]">
                              Demonstration times, loading schedules, after-hours hotlines, delivery turnarounds, and terms.
                            </p>
                          </div>
                        </div>
                        <span className="rounded-full bg-purple-100/60 px-2 py-0.5 text-[10px] font-semibold text-purple-800">
                          SLA & Yard Times
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Monday – Friday Hours
                          </label>
                          <input
                            type="text"
                            value={cmsForm.hoursWeekday}
                            onChange={(e) => updateCmsField("hoursWeekday", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="08:00 – 17:00"
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Saturday Hours
                          </label>
                          <input
                            type="text"
                            value={cmsForm.hoursSaturday}
                            onChange={(e) => updateCmsField("hoursSaturday", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="08:00 – 13:00"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Sunday & Public Holiday Policy
                          </label>
                          <input
                            type="text"
                            value={cmsForm.hoursSunday}
                            onChange={(e) => updateCmsField("hoursSunday", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="Closed · WhatsApp desk monitored"
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Quotation & Price SLA Statement
                          </label>
                          <input
                            type="text"
                            value={cmsForm.responseSLA}
                            onChange={(e) => updateCmsField("responseSLA", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="Average tender & pricing turnaround under 15 minutes during yard hours."
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                          Nationwide Dispatch & Delivery Lead Time
                        </label>
                        <input
                          type="text"
                          value={cmsForm.dispatchTurnaround}
                          onChange={(e) => updateCmsField("dispatchTurnaround", e.target.value)}
                          className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                          placeholder="Same-day lowbed loading for in-stock plant; 24–48h nationwide delivery."
                        />
                      </div>

                      <div>
                        <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                          After-Hours & Breakdown Emergency Notice
                        </label>
                        <input
                          type="text"
                          value={cmsForm.afterHoursNotice}
                          onChange={(e) => updateCmsField("afterHoursNotice", e.target.value)}
                          className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                          placeholder="Urgent site breakdown & pump dispatch hotline active 24/7 on WhatsApp."
                        />
                      </div>

                      <div>
                        <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                          Standard Factory Parts Warranty Statement
                        </label>
                        <input
                          type="text"
                          value={cmsForm.warrantyNotice}
                          onChange={(e) => updateCmsField("warrantyNotice", e.target.value)}
                          className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                          placeholder="12-month factory parts warranty & Harare commissioning included."
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Accepted Payment Currencies & Terms
                          </label>
                          <input
                            type="text"
                            value={cmsForm.termsNotice}
                            onChange={(e) => updateCmsField("termsNotice", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="All quotes issued in USD payable via Nostro, RTGS, or cash on collection."
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Payment Channels Accepted
                          </label>
                          <input
                            type="text"
                            value={cmsForm.paymentMethods}
                            onChange={(e) => updateCmsField("paymentMethods", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="Bank Transfer, Nostro, USD Cash, EcoCash, ZIPIT"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                          Formal Tenders & PRAZ Procurement Notice
                        </label>
                        <input
                          type="text"
                          value={cmsForm.tendersNotice || ""}
                          onChange={(e) => updateCmsField("tendersNotice", e.target.value)}
                          className="w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                          placeholder="PRAZ Registered Supplier · Formal tenders, municipal quotes & mine procurement packs issued within 24h."
                        />
                      </div>
                    </div>
                  )}

                  {/* Category 5: Division Messaging */}
                  {(cmsCategory === "divisions" || cmsCategory === "all" || cmsSearch) && (
                    <div className="rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-7 shadow-xs space-y-5">
                      <div className="flex items-center justify-between pb-3.5 border-b border-black/[0.05]">
                        <div className="flex items-center gap-2.5">
                          <div className="flex size-8 items-center justify-center rounded-xl bg-orange-50 text-orange-700">
                            <Package className="size-4.5" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-[#1D1D1F]">
                              Specialized Division Headlines, Eyebrows & Narrative Copy
                            </h3>
                            <p className="text-xs text-[#86868B] mt-0.5">
                              Custom positioning headlines, sector eyebrows, and sub-narratives across the 5 industrial division sections.
                            </p>
                          </div>
                        </div>
                        <span className="rounded-full bg-orange-100/70 px-3 py-1 text-xs font-semibold text-orange-800">
                          5 Sectors
                        </span>
                      </div>

                      {/* Spacious Multi-Column Grid of 5 Industrial Divisions */}
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4.5">
                        {/* 1. Mining */}
                        <div className="p-4 rounded-2xl bg-[#F9F9FA] border border-black/[0.05] space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                              1. Mining Equipment
                            </span>
                            <span className="text-[10px] font-medium text-[#86868B]">Gold & Chrome</span>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <label className="text-[10px] font-medium text-[#86868B] block mb-1">Eyebrow</label>
                              <input
                                type="text"
                                value={cmsForm.miningEyebrow}
                                onChange={(e) => updateCmsField("miningEyebrow", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-medium text-[#86868B] block mb-1">Headline</label>
                              <input
                                type="text"
                                value={cmsForm.miningHeadline}
                                onChange={(e) => updateCmsField("miningHeadline", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-medium text-[#86868B] block mb-1">Narrative Subheadline</label>
                              <textarea
                                rows={2}
                                value={cmsForm.miningSubheadline || ""}
                                onChange={(e) => updateCmsField("miningSubheadline", e.target.value)}
                                className="w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed"
                                placeholder="Complete gravity and milling circuits engineered for small-scale and commercial miners..."
                              />
                            </div>
                          </div>
                        </div>

                        {/* 2. Plant Hire */}
                        <div className="p-4 rounded-2xl bg-[#F9F9FA] border border-black/[0.05] space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                              2. Plant Hire Fleet
                            </span>
                            <span className="text-[10px] font-medium text-[#86868B]">Yellow Metal</span>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <label className="text-[10px] font-medium text-[#86868B] block mb-1">Eyebrow</label>
                              <input
                                type="text"
                                value={cmsForm.hireEyebrow}
                                onChange={(e) => updateCmsField("hireEyebrow", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-medium text-[#86868B] block mb-1">Headline</label>
                              <input
                                type="text"
                                value={cmsForm.hireHeadline}
                                onChange={(e) => updateCmsField("hireHeadline", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-medium text-[#86868B] block mb-1">Narrative Subheadline</label>
                              <textarea
                                rows={2}
                                value={cmsForm.hireSubheadline || ""}
                                onChange={(e) => updateCmsField("hireSubheadline", e.target.value)}
                                className="w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed"
                                placeholder="Late-model CAT diggers, 37m concrete boom pumps..."
                              />
                            </div>
                          </div>
                        </div>

                        {/* 3. Farming Machinery */}
                        <div className="p-4 rounded-2xl bg-[#F9F9FA] border border-black/[0.05] space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                              3. Farming Machinery
                            </span>
                            <span className="text-[10px] font-medium text-[#86868B]">Agro-Processing</span>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <label className="text-[10px] font-medium text-[#86868B] block mb-1">Eyebrow</label>
                              <input
                                type="text"
                                value={cmsForm.farmingEyebrow}
                                onChange={(e) => updateCmsField("farmingEyebrow", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-medium text-[#86868B] block mb-1">Headline</label>
                              <input
                                type="text"
                                value={cmsForm.farmingHeadline}
                                onChange={(e) => updateCmsField("farmingHeadline", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-medium text-[#86868B] block mb-1">Narrative Subheadline</label>
                              <textarea
                                rows={2}
                                value={cmsForm.farmingSubheadline || ""}
                                onChange={(e) => updateCmsField("farmingSubheadline", e.target.value)}
                                className="w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed"
                                placeholder="Hammer mills, vertical feed mixers, and oil presses..."
                              />
                            </div>
                          </div>
                        </div>

                        {/* 4. Hardware & Fence */}
                        <div className="p-4 rounded-2xl bg-[#F9F9FA] border border-black/[0.05] space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                              4. Hardware & Construction
                            </span>
                            <span className="text-[10px] font-medium text-[#86868B]">Fencing & Civils</span>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <label className="text-[10px] font-medium text-[#86868B] block mb-1">Eyebrow</label>
                              <input
                                type="text"
                                value={cmsForm.hardwareEyebrow}
                                onChange={(e) => updateCmsField("hardwareEyebrow", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-medium text-[#86868B] block mb-1">Headline</label>
                              <input
                                type="text"
                                value={cmsForm.hardwareHeadline}
                                onChange={(e) => updateCmsField("hardwareHeadline", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-medium text-[#86868B] block mb-1">Narrative Subheadline</label>
                              <textarea
                                rows={2}
                                value={cmsForm.hardwareSubheadline || ""}
                                onChange={(e) => updateCmsField("hardwareSubheadline", e.target.value)}
                                className="w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed"
                                placeholder="Diamond mesh, razor wire, block machines..."
                              />
                            </div>
                          </div>
                        </div>

                        {/* 5. Industry & Power */}
                        <div className="p-4 rounded-2xl bg-[#F9F9FA] border border-black/[0.05] space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-purple-800 uppercase tracking-wider">
                              5. Industry & Manufacturing
                            </span>
                            <span className="text-[10px] font-medium text-[#86868B]">Power & Motors</span>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <label className="text-[10px] font-medium text-[#86868B] block mb-1">Eyebrow</label>
                              <input
                                type="text"
                                value={cmsForm.industryEyebrow}
                                onChange={(e) => updateCmsField("industryEyebrow", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-medium text-[#86868B] block mb-1">Headline</label>
                              <input
                                type="text"
                                value={cmsForm.industryHeadline}
                                onChange={(e) => updateCmsField("industryHeadline", e.target.value)}
                                className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-medium text-[#86868B] block mb-1">Narrative Subheadline</label>
                              <textarea
                                rows={2}
                                value={cmsForm.industrySubheadline || ""}
                                onChange={(e) => updateCmsField("industrySubheadline", e.target.value)}
                                className="w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed"
                                placeholder="Heavy-duty electric motors, screw compressors..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Category 6: About & Pillars */}
                  {(cmsCategory === "about" || cmsCategory === "all" || cmsSearch) && (
                    <div className="rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-7 shadow-xs space-y-5">
                      <div className="flex items-center justify-between pb-3.5 border-b border-black/[0.05]">
                        <div className="flex items-center gap-2.5">
                          <div className="flex size-8 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                            <Building2 className="size-4.5" />
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-[#1D1D1F]">
                              Corporate Narrative, Mission & 4 Guarantees
                            </h3>
                            <p className="text-xs text-[#86868B] mt-0.5">
                              Harare yard presence story, nationwide mission, and core operational guarantees across Zimbabwe.
                            </p>
                          </div>
                        </div>
                        <span className="rounded-full bg-indigo-100/70 px-3 py-1 text-xs font-semibold text-indigo-800">
                          About & Mission
                        </span>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            About Section Headline
                          </label>
                          <input
                            type="text"
                            value={cmsForm.aboutHeadline}
                            onChange={(e) => updateCmsField("aboutHeadline", e.target.value)}
                            className="w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="Direct Importers & Stockists of Heavy Industrial Equipment"
                          />
                        </div>

                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Company Mission Statement
                          </label>
                          <textarea
                            rows={2}
                            value={cmsForm.aboutMission}
                            onChange={(e) => updateCmsField("aboutMission", e.target.value)}
                            className="w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-2.5 text-xs leading-relaxed focus:bg-white focus:outline-none"
                            placeholder="Supplying verified commercial machinery with local parts, field commissioning..."
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                          Company Origin & Harare Physical Stock Narrative
                        </label>
                        <textarea
                          rows={2}
                          value={cmsForm.aboutStory || ""}
                          onChange={(e) => updateCmsField("aboutStory", e.target.value)}
                          className="w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 text-xs leading-relaxed focus:bg-white focus:outline-none"
                          placeholder="Founded to bridge the equipment gap for Zimbabwean miners, contractors, and farmers, Omnicore Solutions maintains a fully-stocked Cranborne yard..."
                        />
                      </div>

                      <div className="space-y-3 pt-2 border-t border-black/[0.05]">
                        <span className="font-semibold text-xs text-[#1D1D1F] block">
                          4 Core Operational Guarantees
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          <div className="rounded-xl border border-black/[0.05] bg-[#F9F9FA] p-3 space-y-1">
                            <label className="text-[10px] font-bold text-[#86868B] block uppercase tracking-wider">Pillar 1 · Yard Stock</label>
                            <input
                              type="text"
                              value={cmsForm.aboutPillar1}
                              onChange={(e) => updateCmsField("aboutPillar1", e.target.value)}
                              className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs focus:bg-white focus:outline-none font-medium"
                            />
                          </div>
                          <div className="rounded-xl border border-black/[0.05] bg-[#F9F9FA] p-3 space-y-1">
                            <label className="text-[10px] font-bold text-[#86868B] block uppercase tracking-wider">Pillar 2 · Field Proven</label>
                            <input
                              type="text"
                              value={cmsForm.aboutPillar2}
                              onChange={(e) => updateCmsField("aboutPillar2", e.target.value)}
                              className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs focus:bg-white focus:outline-none font-medium"
                            />
                          </div>
                          <div className="rounded-xl border border-black/[0.05] bg-[#F9F9FA] p-3 space-y-1">
                            <label className="text-[10px] font-bold text-[#86868B] block uppercase tracking-wider">Pillar 3 · Spares Back-up</label>
                            <input
                              type="text"
                              value={cmsForm.aboutPillar3}
                              onChange={(e) => updateCmsField("aboutPillar3", e.target.value)}
                              className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs focus:bg-white focus:outline-none font-medium"
                            />
                          </div>
                          <div className="rounded-xl border border-black/[0.05] bg-[#F9F9FA] p-3 space-y-1">
                            <label className="text-[10px] font-bold text-[#86868B] block uppercase tracking-wider">Pillar 4 · Logistics</label>
                            <input
                              type="text"
                              value={cmsForm.aboutPillar4}
                              onChange={(e) => updateCmsField("aboutPillar4", e.target.value)}
                              className="w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs focus:bg-white focus:outline-none font-medium"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Category 7: Social & Legal */}
                  {(cmsCategory === "social" || cmsCategory === "all" || cmsSearch) && (
                    <div className="rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-xs space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-black/[0.05]">
                        <div className="flex items-center gap-2">
                          <div className="flex size-7 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                            <Globe className="size-4" />
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-[#1D1D1F]">
                              Social Profiles & Footer Compliance
                            </h3>
                            <p className="text-[11px] text-[#86868B]">
                              Official social channels, company overview, and bottom copyright statement.
                            </p>
                          </div>
                        </div>
                        <span className="rounded-full bg-teal-100/60 px-2 py-0.5 text-[10px] font-semibold text-teal-800">
                          Channels
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            LinkedIn Company Profile URL
                          </label>
                          <input
                            type="url"
                            value={cmsForm.linkedinUrl}
                            onChange={(e) => updateCmsField("linkedinUrl", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]"
                            placeholder="https://www.linkedin.com/company/..."
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Facebook Page URL
                          </label>
                          <input
                            type="url"
                            value={cmsForm.facebookUrl}
                            onChange={(e) => updateCmsField("facebookUrl", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]"
                            placeholder="https://www.facebook.com/..."
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Founded Year
                          </label>
                          <input
                            type="text"
                            value={cmsForm.foundedYear}
                            onChange={(e) => updateCmsField("foundedYear", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="2024"
                          />
                        </div>
                        <div>
                          <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                            Registration & Scope Subtitle
                          </label>
                          <input
                            type="text"
                            value={cmsForm.companyReg}
                            onChange={(e) => updateCmsField("companyReg", e.target.value)}
                            className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                            placeholder="Harare Industrial & Mining Machinery Supplier"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                          Footer Brand & Mission Summary
                        </label>
                        <textarea
                          rows={2}
                          value={cmsForm.footerAbout}
                          onChange={(e) => updateCmsField("footerAbout", e.target.value)}
                          className="w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 text-xs leading-relaxed focus:bg-white focus:outline-none"
                          placeholder="Direct supply, equipment hire, and on-site plant commissioning..."
                        />
                      </div>

                      <div>
                        <label className="font-semibold text-[#1D1D1F] text-xs block mb-1">
                          Footer Copyright Notice
                        </label>
                        <input
                          type="text"
                          value={cmsForm.footerCopyright}
                          onChange={(e) => updateCmsField("footerCopyright", e.target.value)}
                          className="w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none"
                          placeholder="© 2026 Omnicore Solutions. All rights reserved..."
                        />
                      </div>
                    </div>
                  )}

                  {/* Submit / Publish Action Bar */}
                  <div className="rounded-2xl border border-black/[0.06] bg-white p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-[#86868B]">
                      <CheckCircle2 className="size-4 text-emerald-600" />
                      <span>Updates propagate instantaneously to all visitors and components across the site.</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={handleResetSiteCopy}
                        className="rounded-full border border-black/[0.08] bg-[#F5F5F7] px-4 py-2 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-all"
                      >
                        Reset
                      </button>
                      <button
                        type="submit"
                        className="rounded-full bg-[#1D1D1F] px-6 py-2 text-xs font-semibold text-white shadow-xs hover:bg-black transition-all active:scale-95 flex items-center gap-1.5"
                      >
                        <Check className="size-3.5" />
                        <span>Publish All Changes Live</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Right Column: Live Interactive Visual Preview Studio (5 cols) */}
              <div className="lg:col-span-5 xl:col-span-5 sticky top-20 space-y-4">
                <div className="rounded-3xl border border-black/[0.06] bg-white p-5 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                        <Eye className="size-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[#1D1D1F]">
                          Live Interactive Visual Preview
                        </h3>
                        <p className="text-[10px] text-[#86868B]">
                          Simulates real-time rendering as you type
                        </p>
                      </div>
                    </div>

                    <span className="flex items-center gap-1 rounded-full bg-emerald-100/70 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                      <span className="size-1.5 rounded-full bg-emerald-600 animate-ping" />
                      <span>Live Sync</span>
                    </span>
                  </div>

                  {/* Preview Mode Selector */}
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-1 rounded-xl bg-black/[0.04] p-1 text-[11px]">
                    {[
                      { id: "hero", label: "Hero" },
                      { id: "yard", label: "Yard" },
                      { id: "whatsapp", label: "WhatsApp" },
                      { id: "about", label: "About" },
                      { id: "divisions", label: "Divisions" },
                      { id: "footer", label: "Footer" },
                    ].map((mode) => (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setCmsPreviewTab(mode.id as typeof cmsPreviewTab)}
                        className={`rounded-lg py-1 font-medium transition-all text-center ${
                          cmsPreviewTab === mode.id
                            ? "bg-white text-[#1D1D1F] font-semibold shadow-2xs"
                            : "text-[#6E6E73] hover:text-[#1D1D1F]"
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>

                  {/* PREVIEW CONTAINER 1: HERO BANNER */}
                  {cmsPreviewTab === "hero" && (
                    <div className="rounded-2xl bg-[#14110E] p-4 text-[#F3EFE6] border border-black/20 space-y-3 relative overflow-hidden shadow-inner">
                      <div className="flex items-center gap-1.5">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] text-white/90">
                          <span className="size-1.5 rounded-full bg-[#1FA855]" />
                          <span className="truncate max-w-[200px]">{cmsForm.heroBadge || "Cranborne yard"}</span>
                        </div>
                      </div>

                      <h4 className="text-base sm:text-lg font-semibold tracking-tight text-white leading-tight">
                        {cmsForm.heroHeadline || "Plant for Zimbabwe’s mines, farms and pours."}
                      </h4>

                      <p className="text-[11px] leading-relaxed text-white/75 line-clamp-3">
                        {cmsForm.heroSubheadline || "Gold circuits, fence plant, self-loading mixers..."}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#1FA855] px-3 py-1 text-[10px] font-semibold text-white">
                          <WhatsAppIcon className="size-3" />
                          {cmsForm.heroCtaPrimary || "WhatsApp"}
                        </span>
                        <span className="rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-[#14110E]">
                          {cmsForm.heroCtaSecondary || "Request Quote"}
                        </span>
                        <span className="rounded-full border border-white/20 px-2.5 py-1 text-[10px] text-white/80">
                          {cmsForm.heroCtaTertiary || "Catalogue"}
                        </span>
                      </div>

                      {/* Stat chips */}
                      <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-white/10 text-[10px]">
                        <div className="bg-white/5 rounded-lg p-1.5">
                          <p className="font-semibold text-white truncate">{cmsForm.stat1Label || "Harare hub"}</p>
                          <p className="text-white/60 truncate">{cmsForm.stat1Detail || "Cranborne yard"}</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-1.5">
                          <p className="font-semibold text-white truncate">{cmsForm.stat2Label || "1–25 TPH"}</p>
                          <p className="text-white/60 truncate">{cmsForm.stat2Detail || "Gold circuits"}</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-1.5">
                          <p className="font-semibold text-white truncate">{cmsForm.stat3Label || "Wet & dry"}</p>
                          <p className="text-white/60 truncate">{cmsForm.stat3Detail || "Plant hire"}</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-1.5">
                          <p className="font-semibold text-white truncate">{cmsForm.stat4Label || "10 provinces"}</p>
                          <p className="text-white/60 truncate">{cmsForm.stat4Detail || "Lowbed delivery"}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PREVIEW CONTAINER 2: YARD CARD */}
                  {cmsPreviewTab === "yard" && (
                    <div className="rounded-2xl bg-[#F5F5F7] p-4 border border-black/[0.06] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-[#1D1D1F] border border-black/[0.05]">
                          <MapPin className="size-3 text-[#0071E3]" />
                          {cmsForm.yardCity || "Harare"} Yard Pin
                        </span>
                        <span className="text-[10px] text-[#86868B]">{cmsForm.yardCountry || "Zimbabwe"}</span>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-[#1D1D1F]">
                          {cmsForm.yardAddressLine1 || "115 Chiremba Road"}
                        </h4>
                        <p className="text-xs text-[#6E6E73]">{cmsForm.yardAddressLine2 || "Cranborne, Harare"}</p>
                      </div>

                      <p className="text-[11px] leading-relaxed text-[#86868B] bg-white rounded-xl p-2.5 border border-black/[0.04]">
                        {cmsForm.yardDirectionsNote || "Heavy machinery can be inspected, demonstrated, and loaded onto lowbeds directly from our yard."}
                      </p>

                      <div className="space-y-1 text-[11px]">
                        <div className="flex items-center justify-between">
                          <span className="text-[#86868B]">Mon – Fri:</span>
                          <span className="font-medium text-[#1D1D1F]">{cmsForm.hoursWeekday || "08:00 – 17:00"}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#86868B]">Saturday:</span>
                          <span className="font-medium text-[#1D1D1F]">{cmsForm.hoursSaturday || "08:00 – 13:00"}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#86868B]">Sunday:</span>
                          <span className="font-medium text-[#1D1D1F]">{cmsForm.hoursSunday || "Closed"}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-1">
                        <a
                          href={cmsForm.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-xl bg-white border border-black/[0.08] py-1.5 text-center text-[10px] font-semibold text-[#1D1D1F] hover:bg-black/[0.02]"
                        >
                          Google Maps Pin ↗
                        </a>
                        <a
                          href={`tel:${cmsForm.primaryPhoneTel}`}
                          className="flex-1 rounded-xl bg-[#1D1D1F] py-1.5 text-center text-[10px] font-semibold text-white hover:bg-black"
                        >
                          Call Yard Desk
                        </a>
                      </div>
                    </div>
                  )}

                  {/* PREVIEW CONTAINER 3: WHATSAPP DESK */}
                  {cmsPreviewTab === "whatsapp" && (
                    <div className="rounded-2xl bg-[#E8F5E9] p-4 border border-[#A5D6A7] space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <WhatsAppIcon className="size-4 text-[#1FA855]" />
                          <span className="text-xs font-bold text-[#1B5E20]">Harare WhatsApp Desk</span>
                        </div>
                        <span className="text-[10px] font-medium text-[#2E7D32]">
                          Active · +{cmsForm.whatsappNumber}
                        </span>
                      </div>

                      <div className="rounded-xl bg-white p-3 border border-[#C8E6C9] shadow-2xs space-y-1.5">
                        <span className="text-[9px] font-bold text-[#6E6E73] uppercase tracking-wide">
                          Pre-Filled User Message:
                        </span>
                        <div className="rounded-lg bg-[#F1F8E9] p-2 text-xs text-[#1B5E20] italic border-l-2 border-[#1FA855]">
                          "{cmsForm.whatsappMessage || "Hello Omnicore Harare Desk — I would like an equipment quote."}"
                        </div>
                        <p className="text-[10px] text-[#6E6E73]">
                          SLA: {cmsForm.responseSLA || "Average response < 15 mins"}
                        </p>
                      </div>

                      {/* Floating pill preview */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[10px] text-[#6E6E73]">Website Floating FAB:</span>
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#1FA855] px-3 py-1.5 text-white shadow-xs">
                          <WhatsAppIcon className="size-3.5" />
                          <div className="text-left">
                            <span className="text-[10px] font-bold block leading-tight">WhatsApp Desk</span>
                            <span className="text-[8px] text-emerald-100 block leading-tight">{cmsForm.yardAddressLine2 || "Cranborne · Harare"}</span>
                          </div>
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/${cmsForm.whatsappNumber}?text=${encodeURIComponent(cmsForm.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center rounded-xl bg-[#1FA855] py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#1B934B] transition-all"
                      >
                        Test WhatsApp Link ↗
                      </a>
                    </div>
                  )}

                  {/* PREVIEW CONTAINER 4: ABOUT & 4 PILLARS */}
                  {cmsPreviewTab === "about" && (
                    <div className="rounded-2xl bg-[#F5F5F7] p-4 border border-black/[0.06] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-[#1D1D1F] border border-black/[0.05]">
                          <Building2 className="size-3 text-indigo-600" />
                          Company Value Proposition
                        </span>
                        <span className="text-[10px] text-[#86868B]">Harare Operations</span>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-[#1D1D1F]">
                          {cmsForm.aboutHeadline || "Direct Importers & Stockists of Heavy Industrial Equipment"}
                        </h4>
                        <p className="text-xs text-[#6E6E73] mt-1 leading-relaxed">
                          {cmsForm.aboutMission || "Supplying verified commercial machinery with local parts, field commissioning, and technical back-up across all 10 provinces of Zimbabwe."}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-black/[0.06] space-y-2">
                        <span className="text-[10px] font-bold text-[#86868B] uppercase tracking-wider block">
                          4 Core Guarantees:
                        </span>
                        <div className="space-y-1.5 text-[11px]">
                          <div className="flex items-start gap-1.5 bg-white p-2 rounded-xl border border-black/[0.04]">
                            <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-medium text-[#1D1D1F]">{cmsForm.aboutPillar1}</span>
                          </div>
                          <div className="flex items-start gap-1.5 bg-white p-2 rounded-xl border border-black/[0.04]">
                            <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-medium text-[#1D1D1F]">{cmsForm.aboutPillar2}</span>
                          </div>
                          <div className="flex items-start gap-1.5 bg-white p-2 rounded-xl border border-black/[0.04]">
                            <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-medium text-[#1D1D1F]">{cmsForm.aboutPillar3}</span>
                          </div>
                          <div className="flex items-start gap-1.5 bg-white p-2 rounded-xl border border-black/[0.04]">
                            <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-medium text-[#1D1D1F]">{cmsForm.aboutPillar4}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PREVIEW CONTAINER 5: DIVISIONS PREVIEW */}
                  {cmsPreviewTab === "divisions" && (
                    <div className="rounded-2xl bg-[#F5F5F7] p-4 border border-black/[0.06] space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-[#1D1D1F] border border-black/[0.05]">
                          <Package className="size-3 text-orange-600" />
                          5 Industrial Sectors
                        </span>
                        <span className="text-[10px] text-[#86868B]">Live Headlines</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="bg-white p-2.5 rounded-xl border border-black/[0.04]">
                          <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wide block">
                            {cmsForm.miningEyebrow || "Mining"}
                          </span>
                          <p className="font-semibold text-[#1D1D1F] mt-0.5">
                            {cmsForm.miningHeadline}
                          </p>
                        </div>
                        <div className="bg-white p-2.5 rounded-xl border border-black/[0.04]">
                          <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wide block">
                            {cmsForm.hireEyebrow || "Hire Fleet"}
                          </span>
                          <p className="font-semibold text-[#1D1D1F] mt-0.5">
                            {cmsForm.hireHeadline}
                          </p>
                        </div>
                        <div className="bg-white p-2.5 rounded-xl border border-black/[0.04]">
                          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide block">
                            {cmsForm.farmingEyebrow || "Farming"}
                          </span>
                          <p className="font-semibold text-[#1D1D1F] mt-0.5">
                            {cmsForm.farmingHeadline}
                          </p>
                        </div>
                        <div className="bg-white p-2.5 rounded-xl border border-black/[0.04]">
                          <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-wide block">
                            {cmsForm.hardwareEyebrow || "Hardware"}
                          </span>
                          <p className="font-semibold text-[#1D1D1F] mt-0.5">
                            {cmsForm.hardwareHeadline}
                          </p>
                        </div>
                        <div className="bg-white p-2.5 rounded-xl border border-black/[0.04]">
                          <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wide block">
                            {cmsForm.industryEyebrow || "Industry"}
                          </span>
                          <p className="font-semibold text-[#1D1D1F] mt-0.5">
                            {cmsForm.industryHeadline}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PREVIEW CONTAINER 6: FOOTER */}
                  {cmsPreviewTab === "footer" && (
                    <div className="rounded-2xl bg-[#F5F5F7] p-4 border border-black/[0.06] space-y-3">
                      <div className="flex items-center gap-2">
                        <img src="/mark.png" alt="Logo" className="size-6 object-contain" />
                        <span className="text-xs font-bold text-[#1D1D1F]">{cmsForm.name || "Omnicore Solutions"}</span>
                      </div>

                      <p className="text-[11px] leading-relaxed text-[#6E6E73]">
                        {cmsForm.footerAbout || "Direct supply, equipment hire, and on-site plant commissioning from Cranborne, Harare."}
                      </p>

                      <div className="pt-2 border-t border-black/[0.06] space-y-1">
                        <p className="text-[10px] text-[#86868B] font-mono">
                          {cmsForm.footerCopyright || `© 2026 Omnicore Solutions.`}
                        </p>
                        <div className="flex gap-2 text-[10px] text-[#0071E3]">
                          <span>LinkedIn</span>
                          <span>·</span>
                          <span>Facebook</span>
                          <span>·</span>
                          <span>{cmsForm.email}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Propagation Status Box */}
                  <div className="rounded-xl bg-[#F5F5F7] p-3 text-[11px] text-[#6E6E73] space-y-1">
                    <div className="flex items-center justify-between text-[#1D1D1F] font-semibold text-xs">
                      <span>Sync Engine</span>
                      <span className="text-emerald-600 font-mono text-[10px]">Real-Time Event Broadcast</span>
                    </div>
                    <p className="text-[10px]">
                      Storage Key: <code className="font-mono text-[9px] bg-black/[0.04] px-1 py-0.5 rounded">omnicore_site_copy_v2</code>
                    </p>
                    <p className="text-[10px]">
                      Connected components: <span className="font-medium text-[#1D1D1F]">Homepage Hero, Yard Badges, Contact Channels, FAB Widget, Site Footer</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: FIELD DEPLOYMENTS & HIRE FLEET */}
        {/* ========================================================================= */}
        {activeTab === "hire" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-[#1D1D1F]">
                Active Plant Hire Deployments
              </h2>
              <p className="text-xs text-[#86868B] mt-0.5">
                Heavy machinery operating on contract across Zimbabwe infrastructure, mines, and farms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: "DEP-01",
                  plant: "20-Tonne CAT 320D Excavator",
                  client: "Great Dyke Quarries Ltd",
                  site: "Shamva Gold Claims, Mash Central",
                  operator: "Wet Rate (With Certified Operator)",
                  rate: "$480 / day",
                  status: "Active on Site",
                  scheduledReturn: "15 Oct 2026",
                },
                {
                  id: "DEP-02",
                  plant: "37m Concrete Boom Pump",
                  client: "Terracotta Projects",
                  site: "Highland Park Ext, Harare",
                  operator: "Wet Rate (With Certified Operator)",
                  rate: "$1,800 / pour",
                  status: "Active on Site",
                  scheduledReturn: "27 Sep 2026",
                },
                {
                  id: "DEP-03",
                  plant: "TLB Backhoe Loader (4x4 Turbo)",
                  client: "Zim-Agro Holdings",
                  site: "Chinhoyi Farm Block 4",
                  operator: "Dry Rate (Machine Only)",
                  rate: "$240 / day",
                  status: "Active on Site",
                  scheduledReturn: "30 Sep 2026",
                },
                {
                  id: "DEP-04",
                  plant: "Motor Grader (Shantui 160HP)",
                  client: "Norton Municipality Subcontractor",
                  site: "Norton Ring Road Phase 2",
                  operator: "Wet Rate (With Certified Operator)",
                  rate: "$520 / day",
                  status: "Scheduled Mobilization",
                  scheduledReturn: "05 Oct 2026",
                },
              ].map((dep) => (
                <div
                  key={dep.id}
                  className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#86868B]">{dep.id}</span>
                    <span className="rounded-full bg-[#E8F8EE] px-2.5 py-0.5 text-[10px] font-semibold text-[#1B833E]">
                      {dep.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-[#1D1D1F]">{dep.plant}</h3>
                    <p className="text-xs text-[#6E6E73] mt-0.5">
                      Client: <strong className="text-[#1D1D1F]">{dep.client}</strong>
                    </p>
                    <p className="text-xs text-[#86868B] mt-0.5">📍 {dep.site}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 rounded-xl bg-[#F5F5F7] p-3 text-xs">
                    <div>
                      <span className="text-[10px] text-[#86868B] block uppercase">Billing Rate</span>
                      <span className="font-semibold text-[#1D1D1F]">{dep.rate}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#86868B] block uppercase">Operator</span>
                      <span className="text-[#1D1D1F] truncate block">{dep.operator}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: RECYCLE BIN */}
        {/* ========================================================================= */}
        {activeTab === "recycle" && (
          <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-[#1D1D1F]">Recycle Bin</h2>
                <p className="mt-0.5 text-xs text-[#86868B]">
                  Clients and machines removed from the backoffice. Restore them, or delete forever.
                </p>
              </div>
              <button
                type="button"
                disabled={recycleBin.length === 0}
                onClick={() => setPendingAction({ type: "empty-bin" })}
                className="inline-flex h-11 items-center gap-1.5 rounded-full border border-red-200 bg-white px-4 text-xs font-semibold text-red-600 hover:bg-red-50 disabled:pointer-events-none disabled:opacity-40"
              >
                <Trash2 className="size-3.5" />
                Empty recycle bin
              </button>
            </div>

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-1.5">
                {(
                  [
                    { id: "all", label: "All", count: recycleBin.length },
                    {
                      id: "client",
                      label: "Clients",
                      count: recycleBin.filter((i) => i.kind === "client").length,
                    },
                    {
                      id: "product",
                      label: "Machines",
                      count: recycleBin.filter((i) => i.kind === "product").length,
                    },
                  ] as const
                ).map((f) => {
                  const active = recycleFilter === f.id;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setRecycleFilter(f.id)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
                        active
                          ? "bg-[#1D1D1F] text-white shadow-xs"
                          : "border border-black/[0.06] bg-white text-[#6E6E73] hover:text-[#1D1D1F]"
                      }`}
                    >
                      <span>{f.label}</span>
                      <span className={`text-[10px] ${active ? "text-white/80" : "text-[#86868B]"}`}>
                        {f.count}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-[#86868B]" />
                <input
                  type="text"
                  value={recycleSearch}
                  onChange={(e) => setRecycleSearch(e.target.value)}
                  placeholder="Search recycle bin..."
                  className="h-9 w-full rounded-full border border-black/[0.08] bg-white pl-9 pr-3 text-xs text-[#1D1D1F] placeholder-[#86868B] shadow-2xs focus:outline-none sm:w-64"
                />
              </div>
            </div>

            {selectedBinIds.length > 0 && (
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-[#1D1D1F] px-4 py-2.5 text-white shadow-xs">
                <span className="text-xs font-semibold">
                  {selectedBinIds.length} record{selectedBinIds.length === 1 ? "" : "s"} selected
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedBinIds([])}
                    className="rounded-full px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={() => setPendingAction({ type: "restore", binIds: selectedBinIds })}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1D1D1F]"
                  >
                    <ArchiveRestore className="size-3.5" />
                    Restore
                  </button>
                  <button
                    type="button"
                    onClick={() => setPendingAction({ type: "destroy", binIds: selectedBinIds })}
                    className="inline-flex items-center gap-1.5 rounded-full bg-red-500 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-red-400"
                  >
                    <Trash2 className="size-3.5" />
                    Delete forever
                  </button>
                </div>
              </div>
            )}

            <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-black/[0.06] bg-[#FBFBFC] text-[11px] font-semibold uppercase tracking-wider text-[#86868B]">
                      <th className="w-10 py-3 pl-4 pr-1">
                        <RowCheck
                          label="Select all visible recycle bin records"
                          checked={
                            filteredRecycleItems.length > 0 &&
                            filteredRecycleItems.every((i) => selectedBinIds.includes(i.binId))
                          }
                          indeterminate={
                            filteredRecycleItems.some((i) => selectedBinIds.includes(i.binId)) &&
                            !filteredRecycleItems.every((i) => selectedBinIds.includes(i.binId))
                          }
                          onChange={(next) => {
                            const ids = filteredRecycleItems.map((i) => i.binId);
                            setSelectedBinIds((prev) =>
                              next ? [...new Set([...prev, ...ids])] : prev.filter((id) => !ids.includes(id)),
                            );
                          }}
                        />
                      </th>
                      <th className="px-4 py-3">Record</th>
                      <th className="px-3 py-3">Type</th>
                      <th className="px-3 py-3">Deleted</th>
                      <th className="px-3 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/[0.04]">
                    {filteredRecycleItems.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="py-16 text-center">
                          <div className="mx-auto flex max-w-sm flex-col items-center gap-2">
                            <div className="flex size-12 items-center justify-center rounded-2xl bg-black/[0.04] text-[#86868B]">
                              <Recycle className="size-5" />
                            </div>
                            <p className="text-sm font-semibold text-[#1D1D1F]">Recycle bin is empty</p>
                            <p className="text-xs text-[#86868B]">
                              Deleted clients and machines will appear here so you can restore them.
                            </p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      filteredRecycleItems.map((item) => (
                        <tr key={item.binId} className="hover:bg-black/[0.015]">
                          <td className="w-10 py-3 pl-4 pr-1">
                            <RowCheck
                              label={`Select ${item.title}`}
                              checked={selectedBinIds.includes(item.binId)}
                              onChange={(next) =>
                                setSelectedBinIds((prev) =>
                                  next ? [...prev, item.binId] : prev.filter((id) => id !== item.binId),
                                )
                              }
                            />
                          </td>
                          <td className="px-4 py-3">
                            <span className="block font-semibold text-[#1D1D1F]">{item.title}</span>
                            <span className="block truncate text-[11px] text-[#6E6E73]">{item.subtitle}</span>
                          </td>
                          <td className="px-3 py-3">
                            <span className="rounded-full bg-black/[0.04] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#6E6E73]">
                              {item.kind === "client" ? "Client" : "Machine"}
                            </span>
                          </td>
                          <td className="px-3 py-3 text-[#6E6E73]">{formatBinDate(item.deletedAt)}</td>
                          <td className="px-3 py-3 text-right">
                            <div className="flex items-center justify-end gap-1">
                              <button
                                type="button"
                                onClick={() => setPendingAction({ type: "restore", binIds: [item.binId] })}
                                className="inline-flex h-11 items-center gap-1 rounded-full border border-black/[0.08] bg-white px-3 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7]"
                              >
                                <ArchiveRestore className="size-3.5 text-[#6E6E73]" />
                                Restore
                              </button>
                              <button
                                type="button"
                                onClick={() => setPendingAction({ type: "destroy", binIds: [item.binId] })}
                                className="inline-flex size-11 items-center justify-center rounded-full border border-red-200 bg-white text-red-600 hover:bg-red-50"
                                title="Delete forever"
                              >
                                <Trash2 className="size-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>

      {pendingConfirm && pendingAction && (
        <ConfirmModal
          title={pendingConfirm.title}
          body={pendingConfirm.body}
          confirmLabel={pendingConfirm.confirmLabel}
          tone={pendingConfirm.tone}
          onCancel={() => setPendingAction(null)}
          onConfirm={runPendingAction}
        />
      )}
    </div>
  );
}
