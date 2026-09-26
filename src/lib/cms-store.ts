import { useState, useEffect } from "react";
import { equipment as initialEquipment, site as initialSite, type Equipment } from "@/data/site";

export type CRMClient = {
  id: string;
  name: string;
  organization: string;
  phone: string;
  email: string;
  location: string;
  province: string;
  service: string;
  equipmentInterest: string;
  intent: "Buy" | "Hire" | "Both" | "Consultation";
  stage: "Lead" | "Discovery" | "Tender Quoted" | "Negotiation" | "Won" | "Lost";
  priority: "High" | "Medium" | "Normal";
  dealValue: number;
  dealValueDisplay: string;
  lastContact: string;
  nextFollowUp: string;
  notes: string;
  timeline: { date: string; note: string; author: string }[];
};

export type ExtendedEquipment = Equipment & {
  sku?: string;
  stockStatus?: "In Yard Cranborne" | "In Transit (Beitbridge)" | "Active on Site" | "Special Order";
  throughput?: string;
  powerOption?: string;
  priceUSD?: string;
  condition?: "New" | "Refurbished / Certified";
  warrantyMonths?: number;
  detailedNotes?: string;
};

export type RecycleBinKind = "client" | "product";

export type RecycleBinItem = {
  binId: string;
  kind: RecycleBinKind;
  deletedAt: string;
  title: string;
  subtitle: string;
  snapshot: CRMClient | ExtendedEquipment;
};

export type SiteCopyContent = {
  // Brand & Identity
  name: string;
  shortName: string;
  tagline: string;
  foundedYear: string;
  companyReg: string;

  // Hero Section
  heroBadge: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroBannerAnnouncement: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  heroCtaTertiary: string;

  // Hero Quick Stats (4 cards)
  stat1Label: string;
  stat1Detail: string;
  stat2Label: string;
  stat2Detail: string;
  stat3Label: string;
  stat3Detail: string;
  stat4Label: string;
  stat4Detail: string;

  // Yard & Physical Location
  yardAddressLine1: string;
  yardAddressLine2: string;
  yardCity: string;
  yardCountry: string;
  googleMapsUrl: string;
  yardDirectionsNote: string;

  // Contact Channels
  primaryPhone: string;
  primaryPhoneTel: string;
  secondaryPhone: string;
  secondaryPhoneTel: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  salesEmail: string;

  // Operating Hours & Service SLAs
  hoursWeekday: string;
  hoursSaturday: string;
  hoursSunday: string;
  afterHoursNotice: string;
  responseSLA: string;
  emergencyHotline: string;
  emergencyHotlineTel: string;
  dispatchTurnaround: string;
  warrantyNotice: string;
  termsNotice: string;
  paymentMethods: string;
  inspectionNotice: string;
  tendersNotice: string;

  // Social Links
  linkedinUrl: string;
  facebookUrl: string;

  // Division Eyebrows & Headlines
  miningEyebrow: string;
  miningHeadline: string;
  miningSubheadline: string;
  hardwareEyebrow: string;
  hardwareHeadline: string;
  hardwareSubheadline: string;
  hireEyebrow: string;
  hireHeadline: string;
  hireSubheadline: string;
  farmingEyebrow: string;
  farmingHeadline: string;
  farmingSubheadline: string;
  industryEyebrow: string;
  industryHeadline: string;
  industrySubheadline: string;

  // About & Pillars
  aboutHeadline: string;
  aboutMission: string;
  aboutStory: string;
  aboutPillar1: string;
  aboutPillar2: string;
  aboutPillar3: string;
  aboutPillar4: string;

  // Footer & Compliance
  footerAbout: string;
  footerCopyright: string;
};

export const defaultSiteCopy: SiteCopyContent = {
  // Brand & Identity
  name: initialSite.name,
  shortName: initialSite.shortName,
  tagline: initialSite.tagline,
  foundedYear: "2024",
  companyReg: "Harare Industrial & Mining Machinery Supplier",

  // Hero Section
  heroBadge: "Cranborne yard · 115 Chiremba Road, Harare",
  heroHeadline: "Plant for Zimbabwe’s mines, farms and pours.",
  heroSubheadline:
    "Gold circuits, fence plant, self-loading mixers, excavators and farm mills — specified in Harare, delivered nationwide, commissioned on the ground.",
  heroBannerAnnouncement: "Cranborne Yard Open Mon–Sat · Lowbed Deliveries to Midlands, Matabeleland, Manicaland & Mashonaland",
  heroCtaPrimary: "Chat on WhatsApp",
  heroCtaSecondary: "Request a firm quote",
  heroCtaTertiary: "Open the catalogue",

  // Hero Quick Stats
  stat1Label: "Harare hub",
  stat1Detail: "Cranborne yard",
  stat2Label: "1–25 TPH",
  stat2Detail: "Gold circuits",
  stat3Label: "Wet & dry",
  stat3Detail: "Plant hire",
  stat4Label: "10 provinces",
  stat4Detail: "Lowbed delivery",

  // Yard & Physical Location
  yardAddressLine1: initialSite.address.line1,
  yardAddressLine2: initialSite.address.line2,
  yardCity: "Harare",
  yardCountry: "Zimbabwe",
  googleMapsUrl: initialSite.address.maps,
  yardDirectionsNote: "5 minutes from Harare CBD along Chiremba Rd, Cranborne Industrial Belt. Lowbed and heavy truck access.",

  // Contact Channels
  primaryPhone: initialSite.phoneDisplay,
  primaryPhoneTel: initialSite.phoneTel,
  secondaryPhone: initialSite.phoneAltDisplay,
  secondaryPhoneTel: initialSite.phoneAltTel,
  whatsappNumber: initialSite.whatsappNumber,
  whatsappMessage: "Hello Omnicore Harare Desk — I would like an equipment quote.",
  email: initialSite.email,
  salesEmail: "sales@omnicoresolutions.co.zw",

  // Operating Hours & Service SLAs
  hoursWeekday: "08:00 – 17:00",
  hoursSaturday: "08:00 – 13:00",
  hoursSunday: "Closed · WhatsApp desk monitored",
  afterHoursNotice: "Urgent site breakdown & pump dispatch hotline active 24/7 on WhatsApp.",
  responseSLA: "Average tender & pricing turnaround under 15 minutes during yard hours.",
  emergencyHotline: "+263 77 733 4569",
  emergencyHotlineTel: "+263777334569",
  dispatchTurnaround: "Same-day lowbed loading for in-stock plant; 24–48h nationwide delivery.",
  warrantyNotice: "12-month factory parts warranty & Harare commissioning included.",
  termsNotice: "All quotes issued in USD payable via Nostro, RTGS at official bank rate, or cash on collection.",
  paymentMethods: "Bank Transfer, Nostro, USD Cash, EcoCash, ZIPIT",
  inspectionNotice: "Physical yard mechanical inspections welcome Monday–Saturday at 115 Chiremba Rd, Cranborne.",
  tendersNotice: "PRAZ Registered Supplier · Formal tenders, municipal quotes & mine procurement packs issued within 24h.",

  // Social Links
  linkedinUrl: initialSite.linkedin,
  facebookUrl: initialSite.facebook,

  // Division Eyebrows & Headlines
  miningEyebrow: "Gold · Chrome · Lithium",
  miningHeadline: "Plant that turns ore into cashflow.",
  miningSubheadline: "Complete gravity and milling circuits engineered for small-scale and commercial miners across Kadoma, Kwekwe, Gwanda, and Shamva.",
  hardwareEyebrow: "Build · Fence · Supply",
  hardwareHeadline: "The hardware that keeps a site moving.",
  hardwareSubheadline: "Diamond mesh, razor wire, block machines, and farm fencing hardware built to withstand rigorous Zimbabwean field conditions.",
  hireEyebrow: "Heavy Fleet · Harare Yard",
  hireHeadline: "Yellow plant on wet or dry rate without the downtime.",
  hireSubheadline: "Late-model CAT diggers, 37m concrete boom pumps, and self-loading mixers with certified operators ready for rapid mobilization.",
  farmingEyebrow: "Feed · Grind · Value Add",
  farmingHeadline: "Agro-processing machinery for commercial and smallholder farms.",
  farmingSubheadline: "Hammer mills, vertical feed mixers, and oil presses designed for commercial poultry, cattle pen-fattening, and crop processing.",
  industryEyebrow: "Power · Motors · Compressors",
  industryHeadline: "Industrial gear that doesn't buckle under load shedding.",
  industrySubheadline: "Heavy-duty electric motors, screw compressors, and diesel backup sets calibrated for uninterrupted industrial operation.",

  // About & Pillars
  aboutHeadline: "Direct Importers & Stockists of Heavy Industrial Equipment",
  aboutMission:
    "Supplying verified commercial machinery with local parts, field commissioning, and technical back-up across all 10 provinces of Zimbabwe.",
  aboutStory: "Founded to bridge the equipment gap for Zimbabwean miners, contractors, and farmers, Omnicore Solutions maintains a fully-stocked Cranborne yard with experienced mechanical engineers on site.",
  aboutPillar1: "Physical Harare Yard Stock — inspect before purchase at Cranborne",
  aboutPillar2: "Zimbabwe-Field Proven — built for local ore grades and rural power grids",
  aboutPillar3: "Spares & Technical Backup — OEM wear parts stocked in Harare",
  aboutPillar4: "Nationwide Logistics — lowbed and crane-truck delivery to your site",

  // Footer & Compliance
  footerAbout:
    "Direct supply, equipment hire, and on-site plant commissioning from Cranborne, Harare — delivering to claims, farms and project sites nationwide.",
  footerCopyright: `© ${new Date().getFullYear()} Omnicore Solutions. All rights reserved. Machinery & Plant Zimbabwe · Cranborne, Harare`,
};

export const defaultCRMClients: CRMClient[] = [
  {
    id: "CRM-1001",
    name: "Tafadzwa Moyo",
    organization: "Golden Valley Gold Syndicate",
    phone: "+263 77 234 5678",
    email: "tmoyo@kadomamining.co.zw",
    location: "Kadoma / Golden Valley",
    province: "Mashonaland West",
    service: "Mining Equipment",
    equipmentInterest: "200x300 Jaw Crusher & 1200x2400 Ball Mill circuit",
    intent: "Buy",
    stage: "Tender Quoted",
    priority: "High",
    dealValue: 18500,
    dealValueDisplay: "$18,500",
    lastContact: "Today, 08:35",
    nextFollowUp: "Tomorrow, 10:00",
    notes: "Requires diesel engine drive configuration due to local grid instability. Ready for Cranborne yard mechanical inspection on Friday.",
    timeline: [
      { date: "26 Sep 2026", note: "Formal FOB Harare tender quotation issued with 35HP diesel option.", author: "Farai M. (Technical Desk)" },
      { date: "25 Sep 2026", note: "Inbound quote received through online site form.", author: "System" },
    ],
  },
  {
    id: "CRM-1002",
    name: "Farai Chitepo",
    organization: "Chitepo Infrastructure Civils",
    phone: "+263 71 890 1234",
    email: "farai@chitepoconstruction.co.zw",
    location: "Borrowdale West, Harare",
    province: "Harare",
    service: "Construction Machinery Hire",
    equipmentInterest: "37m Concrete Boom Pump + 2 Operators",
    intent: "Hire",
    stage: "Discovery",
    priority: "High",
    dealValue: 3600,
    dealValueDisplay: "$3,600",
    lastContact: "Yesterday, 16:15",
    nextFollowUp: "28 Sep, 09:00",
    notes: "Two-day raft foundation pour. Requires wet rate with certified operator and 80m pipeline extensions.",
    timeline: [
      { date: "25 Sep 2026", note: "Confirmed pump availability from Cranborne yard for next Tuesday.", author: "Blessing T." },
    ],
  },
  {
    id: "CRM-1003",
    name: "Blessing Hove",
    organization: "Mazowe Citrus & Cattle Estates",
    phone: "+263 78 456 7890",
    email: "blessing@mazowefarms.zw",
    location: "Mazowe Farming Belt",
    province: "Mashonaland Central",
    service: "Farming Machinery",
    equipmentInterest: "3-Tonne Vertical Feed Mixer + 15kW Motor",
    intent: "Buy",
    stage: "Negotiation",
    priority: "Medium",
    dealValue: 7200,
    dealValueDisplay: "$7,200",
    lastContact: "25 Sep, 11:20",
    nextFollowUp: "29 Sep, 14:00",
    notes: "Negotiating inclusion of magnetic trap and extra screen sets for maize and soy grinding.",
    timeline: [
      { date: "25 Sep 2026", note: "Client visited Cranborne yard to inspect mixer auger thickness.", author: "Farai M." },
    ],
  },
  {
    id: "CRM-1004",
    name: "Kudzai Ndlovu",
    organization: "Great Dyke Metals Ltd",
    phone: "+263 77 567 8901",
    email: "kudzai@greatdykemetals.zw",
    location: "Zvishavane Overburden Claims",
    province: "Midlands",
    service: "Construction Machinery Hire",
    equipmentInterest: "CAT 320D 20-Tonne Excavator (30 Days)",
    intent: "Hire",
    stage: "Won",
    priority: "High",
    dealValue: 14400,
    dealValueDisplay: "$14,400",
    lastContact: "24 Sep, 14:40",
    nextFollowUp: "15 Oct, 12:00",
    notes: "Contract signed, deposit cleared. Lowbed mobilized to Midlands site with dedicated operator.",
    timeline: [
      { date: "24 Sep 2026", note: "Signed hire agreement returned and lowbed dispatch scheduled.", author: "Logistics Desk" },
    ],
  },
  {
    id: "CRM-1005",
    name: "Sekai Matarise",
    organization: "Harare Perimeter Security Co.",
    phone: "+263 73 345 6789",
    email: "smatarise@securefencing.co.zw",
    location: "Msasa Industrial, Harare",
    province: "Harare",
    service: "Hardware & Construction",
    equipmentInterest: "Double-Twist Barbed Wire Manufacturing Plant",
    intent: "Buy",
    stage: "Tender Quoted",
    priority: "Medium",
    dealValue: 9500,
    dealValueDisplay: "$9,500",
    lastContact: "23 Sep, 09:15",
    nextFollowUp: "30 Sep, 11:00",
    notes: "Requires machine commissioning and coil wire supplier introductions in Harare.",
    timeline: [
      { date: "23 Sep 2026", note: "Sent equipment layout drawing and power specification (5.5kW).", author: "Technical Desk" },
    ],
  },
  {
    id: "CRM-1006",
    name: "Edmore Chinyanga",
    organization: "Shamva River Gold Claim",
    phone: "+263 77 654 3210",
    email: "edmore@shamvaalluvial.zw",
    location: "Shamva District",
    province: "Mashonaland Central",
    service: "Mining Equipment",
    equipmentInterest: "10 TPH Gold Wash Plant Trommel & Shaking Table",
    intent: "Buy",
    stage: "Lead",
    priority: "High",
    dealValue: 22000,
    dealValueDisplay: "$22,000",
    lastContact: "22 Sep, 15:30",
    nextFollowUp: "28 Sep, 10:00",
    notes: "Alluvial deposit along riverbank. Inquiring about water pump volume and sluice box sizing.",
    timeline: [
      { date: "22 Sep 2026", note: "Inbound WhatsApp inquiry logged.", author: "Farai M." },
    ],
  },
  {
    id: "CRM-1007",
    name: "Rutendo Mutasa",
    organization: "Mutasa Feedlot & Agro Services",
    phone: "+263 78 123 9876",
    email: "rmutasa@mutasafeedlot.co.zw",
    location: "Marondera Agro Corridor",
    province: "Mashonaland East",
    service: "Farming Machinery",
    equipmentInterest: "Farm Hammer Mill with 7.5kW Motor & Cyclone",
    intent: "Buy",
    stage: "Won",
    priority: "Normal",
    dealValue: 3850,
    dealValueDisplay: "$3,850",
    lastContact: "21 Sep, 13:00",
    nextFollowUp: "05 Oct, 09:00",
    notes: "Machine collected from Cranborne yard. Customer reported successful test milling.",
    timeline: [
      { date: "21 Sep 2026", note: "Full payment received and yard gate pass issued.", author: "Finance Desk" },
    ],
  },
  {
    id: "CRM-1008",
    name: "Munyaradzi Gumbo",
    organization: "Bulawayo Aggregates & Paving",
    phone: "+263 71 334 8899",
    email: "mgumbo@byoaggregates.zw",
    location: "Khami Road, Bulawayo",
    province: "Matabeleland North",
    service: "Construction Machinery Hire",
    equipmentInterest: "Self-Loading Concrete Mixer (4.0m³)",
    intent: "Hire",
    stage: "Discovery",
    priority: "Medium",
    dealValue: 5800,
    dealValueDisplay: "$5,800",
    lastContact: "20 Sep, 10:45",
    nextFollowUp: "29 Sep, 15:00",
    notes: "Evaluating freight cost from Cranborne Harare yard down to Bulawayo job site.",
    timeline: [
      { date: "20 Sep 2026", note: "Provided national lowbed mobilization rate schedule.", author: "Logistics Desk" },
    ],
  },
];

export const defaultExtendedEquipment: ExtendedEquipment[] = initialEquipment.map((item, idx) => ({
  ...item,
  sku: `OMNI-${item.category.toUpperCase().slice(0, 3)}-${100 + idx}`,
  stockStatus: "In Yard Cranborne",
  throughput: item.category === "mining" ? "5 – 15 TPH" : item.category === "farming" ? "1.5 – 3 TPH" : "Site Rated",
  powerOption: "Electric 3-Phase / Diesel Engine Option",
  priceUSD: item.category === "hire" ? "Daily Rate on Tender" : "Direct Yard Quote",
  condition: "New",
  warrantyMonths: 12,
  detailedNotes: `Heavy-duty specification engineered for continuous African field operation. Supported by Cranborne yard spare parts and Harare field commissioning team.`,
}));

const STORAGE_KEY_CRM = "omnicore_crm_clients_v2";
const STORAGE_KEY_EQUIPMENT = "omnicore_equipment_inventory_v2";
const STORAGE_KEY_SITE_COPY = "omnicore_site_copy_v2";
const STORAGE_KEY_RECYCLE = "omnicore_recycle_bin_v1";

export function getStoredCRMClients(): CRMClient[] {
  if (typeof window === "undefined") return defaultCRMClients;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CRM);
    if (!raw) return defaultCRMClients;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : defaultCRMClients;
  } catch {
    return defaultCRMClients;
  }
}

export function saveStoredCRMClients(clients: CRMClient[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY_CRM, JSON.stringify(clients));
    window.dispatchEvent(new CustomEvent("omnicore-crm-updated"));
  } catch {
    // ignore
  }
}

export function getStoredEquipment(): ExtendedEquipment[] {
  if (typeof window === "undefined") return defaultExtendedEquipment;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_EQUIPMENT);
    if (!raw) return defaultExtendedEquipment;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : defaultExtendedEquipment;
  } catch {
    return defaultExtendedEquipment;
  }
}

export function saveStoredEquipment(items: ExtendedEquipment[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY_EQUIPMENT, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent("omnicore-equipment-updated"));
  } catch {
    // ignore
  }
}

export function getStoredSiteCopy(): SiteCopyContent {
  if (typeof window === "undefined") return defaultSiteCopy;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SITE_COPY);
    if (!raw) return defaultSiteCopy;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? { ...defaultSiteCopy, ...parsed } : defaultSiteCopy;
  } catch {
    return defaultSiteCopy;
  }
}

export function saveStoredSiteCopy(copy: SiteCopyContent) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY_SITE_COPY, JSON.stringify(copy));
    window.dispatchEvent(new CustomEvent("omnicore-copy-updated"));
  } catch {
    // ignore
  }
}

export function resetStoredSiteCopy(): SiteCopyContent {
  if (typeof window === "undefined") return defaultSiteCopy;
  try {
    localStorage.setItem(STORAGE_KEY_SITE_COPY, JSON.stringify(defaultSiteCopy));
    window.dispatchEvent(new CustomEvent("omnicore-copy-updated"));
    return defaultSiteCopy;
  } catch {
    return defaultSiteCopy;
  }
}

export function useSiteCopy(): SiteCopyContent {
  const [copy, setCopy] = useState<SiteCopyContent>(getStoredSiteCopy);

  useEffect(() => {
    function onUpdate() {
      setCopy(getStoredSiteCopy());
    }
    window.addEventListener("omnicore-copy-updated", onUpdate);
    return () => {
      window.removeEventListener("omnicore-copy-updated", onUpdate);
    };
  }, []);

  return copy;
}

function makeBinId(kind: RecycleBinKind, sourceId: string) {
  return `bin-${kind}-${sourceId}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

export function toRecycleClient(client: CRMClient): RecycleBinItem {
  return {
    binId: makeBinId("client", client.id),
    kind: "client",
    deletedAt: new Date().toISOString(),
    title: client.name,
    subtitle: `${client.organization} · ${client.id}`,
    snapshot: client,
  };
}

export function toRecycleProduct(item: ExtendedEquipment): RecycleBinItem {
  return {
    binId: makeBinId("product", item.id),
    kind: "product",
    deletedAt: new Date().toISOString(),
    title: item.name,
    subtitle: `${item.sku || item.id} · ${item.category}`,
    snapshot: item,
  };
}

export function getStoredRecycleBin(): RecycleBinItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_RECYCLE);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveStoredRecycleBin(items: RecycleBinItem[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY_RECYCLE, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent("omnicore-recycle-updated"));
  } catch {
    // ignore
  }
}



