/**
 * Controlled theme vocabulary for publications and project hubs.
 * Prefer these tags over free-text keywords (see docs/content-model.md).
 */
export const THEMES = [
  "pqc",
  "nft",
  "sbt",
  "wallet",
  "stablecoin",
  "defi",
  "zkp",
  "cybersecurity",
  "ai",
  "identity",
  "privacy",
  "forensics",
  "governance",
  "layer2",
  "custody",
  "ransomware",
  "decentralization",
  "agentic-ai",
] as const;

export type Theme = (typeof THEMES)[number];

export const THEME_LABELS: Record<Theme, string> = {
  pqc: "Post-quantum cryptography",
  nft: "NFT",
  sbt: "Soulbound tokens",
  wallet: "Wallet",
  stablecoin: "Stablecoin",
  defi: "DeFi",
  zkp: "Zero-knowledge proofs",
  cybersecurity: "Cybersecurity",
  ai: "AI",
  identity: "Identity",
  privacy: "Privacy",
  forensics: "Forensics & analysis",
  governance: "Governance",
  layer2: "Layer 2",
  custody: "Custody",
  ransomware: "Ransomware",
  decentralization: "Decentralization",
  "agentic-ai": "Agentic AI",
};
