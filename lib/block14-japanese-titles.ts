// Japanese title translations for Block 14 sessions and projects

export const sessionTitlesJP: { [key: string]: string } = {
  "Opening Plenary": "開会プレナリー",
  "Security: Cyber Security Information Sharing (1)": "セキュリティ：サイバーセキュリティ情報共有（1）",
  "AgentWG + FASE: AI + Blockchain": "AgentWG + FASE: AI + ブロックチェーン",
  "Security: Cyber Security Information Sharing (2)": "セキュリティ：サイバーセキュリティ情報共有（2）",
  "FASE: Harmonization among Crypto-asset, stablecoin and tokenized deposit": "FASE：暗号資産、ステーブルコイン、トークン化預金の調和",
  "IKP: Accountable Wallet": "IKP：責任あるウォレット（Accountable Wallet）",
  "FASE: Establishing Technical Metrics to Evaluate the 'Decentralization' of Blockchain Networks": "FASE：ブロックチェーンネットワークの「分散化」を評価する技術指標の確立",
  "Agent Hack": "エージェントハック",
  "IKP + FASE: Forensics and Analysis, Toward a Common Lexicon for Harmful On-Chain Activities": "IKP + FASE：フォレンジックスと分析、有害なオンチェーン活動の共通用語集に向けて",
  "Networking Reception": "ネットワーキングレセプション",
  "Announcement of Blockchain Technology Competition": "ブロックチェーン技術コンペティション発表",
  "Security: Security Target and Protection Profile": "セキュリティ：セキュリティターゲットとプロテクションプロファイル",
  "IKP: Crypto Agility and PQC Migration": "IKP：暗号アジリティとPQC移行",
  "Security: Governance of security supply chain": "セキュリティ：セキュリティサプライチェーンのガバナンス",
  "IKP: Privacy Enhanced Authentication and Key Management (competition)": "IKP：プライバシー強化認証と鍵管理（コンペティション）",
  "Security: Offline Key Management": "セキュリティ：オフライン鍵管理",
  "IKP: Proof of Personhood": "IKP：人格証明（Proof of Personhood）",
  "Audit: securities law and regulation - assurances / risk management": "監査：証券法と規制 - 保証 / リスク管理",
  "FASE: Practical Stablecoin Implementation Guide": "FASE：実践的ステーブルコイン実装ガイド",
  "Policy priorities for stablecoin regulation: past, present and future": "ステーブルコイン規制の政策優先事項：過去、現在、未来",
};

export const projectTitlesJP: { [key: string]: string } = {
  "Cyber Security Information Sharing Framework": "サイバーセキュリティ情報共有フレームワーク",
  "Security AI Agent Project": "セキュリティAIエージェントプロジェクト",
  "Offline Key Management": "オフライン鍵管理",
  "ST/PP (Security Target/Protection Profile)": "ST/PP（セキュリティターゲット/プロテクションプロファイル）",
  "Governance of the security supply chain": "セキュリティサプライチェーンのガバナンス",
  "PQC Migration": "PQC移行",
  "Privacy Enhanced Authentication": "プライバシー強化認証",
  "Accountable Wallet": "責任あるウォレット（Accountable Wallet）",
  "Forensics and Analysis": "フォレンジックスと分析",
  "Illicit Activities": "違法活動",
  "Establishing Technical Metrics to evaluate the decentralization of the blockchain network": "ブロックチェーンネットワークの分散化を評価する技術指標の確立",
  "Practical Stablecoin Implementation Guide": "実践的ステーブルコイン実装ガイド",
  "Harmonization among Crypto-asset, stablecoin and tokenized deposit": "暗号資産、ステーブルコイン、トークン化預金の調和",
  "Agent Standards and Frameworks": "エージェント標準とフレームワーク",
};

// Helper function to get Japanese title for a session or project
export function getJapaneseTitle(englishTitle: string, type: 'session' | 'project' = 'session'): string | null {
  const mapping = type === 'session' ? sessionTitlesJP : projectTitlesJP;
  return mapping[englishTitle] || null;
}

// Helper function to format title with Japanese subtitle
export function formatTitleWithJP(englishTitle: string, type: 'session' | 'project' = 'session'): string {
  if (!englishTitle || typeof englishTitle !== 'string') return englishTitle || '';
  const mapping = type === 'session' ? sessionTitlesJP : projectTitlesJP;
  const jpTitle = mapping[englishTitle.trim()];
  if (jpTitle) {
    return `${englishTitle} / ${jpTitle}`;
  }
  // Try to find a match with trimmed title
  const trimmedTitle = englishTitle.trim();
  const trimmedMatch = mapping[trimmedTitle];
  if (trimmedMatch) {
    return `${englishTitle} / ${trimmedMatch}`;
  }
  return englishTitle;
}
