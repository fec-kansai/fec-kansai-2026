export type NavLink = {
  name: string;
  url: string;
};

export const navItems: NavLink[] = [
  // Anchors are absolute (/#…) so the menu also works from the /side-events route,
  // where these sections don't exist — clicking jumps back to the section on the LP.
  { name: "メッセージ", url: "/#message" },
  { name: "開催日・アクセス", url: "/#access" },
  { name: "プロポーザル", url: "/#proposal" },
  { name: "スポンサー募集", url: "/#sponsor" },
  { name: "チケット情報", url: "/#ticket" },
  { name: "公式キャラクター", url: "/#character" },
  { name: "サイドイベント", url: "/side-events" },
];

export type FooterLink = {
  name: string;
  url: string;
};

export const sponsorLinks: FooterLink[] = [
  { name: "協賛資料", url: "/sponsor/materials" },
  { name: "スポンサー募集URL", url: "/sponsor" },
];

export const socialLinks: FooterLink[] = [
  {
    name: "X (Twitter)",
    url: "https://x.com/fec_kansai",
  },
  {
    name: "GitHub",
    url: "https://github.com/fec-kansai",
  },
  {
    name: "Note",
    url: "https://note.com/fec_kansai",
  },
  {
    name: "Fortee",
    url: "https://fortee.jp/fec-kansai-2026",
  },
  {
    name: "connpass",
    url: "https://fec-kansai.connpass.com/",
  },
];

export const contactLinks: FooterLink[] = [
  {
    name: "お問い合わせフォーム",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdpT0zG5oK_jxoLhYHqDLcCc6WqStOQ0swHRsJNI8b7yGe5Fw/viewform",
  },
];

export const policyLinks: FooterLink[] = [
  {
    name: "行動規範",
    url: "https://docs.google.com/document/d/1ehwr1skJ_HS0Ef2VL18Hoka1WSB_Qvi5WYOOrRP_zSA/edit?tab=t.0",
  },
  {
    name: "プライバシーポリシー",
    url: "https://docs.google.com/document/d/1EZ-C2aJ_mzKHgZa3IYePkB5zC9TYBBTDJRiwA7KxotM/edit?tab=t.0",
  },
  {
    name: "反社会性力排除ポリシー",
    url: "https://docs.google.com/document/d/187gfjUQYCNd0SI2h5VrQCPG6FyIvodq_foECA_9eCpw/edit?tab=t.0#heading=h.d0ms26m8foq6",
  },
  {
    name: "関連イベントのガイドライン",
    url: "https://docs.google.com/document/d/107_5Vfr-dFtrKDtJWbHezFlomkG5chJez51tWMuGV98/edit?tab=t.0#heading=h.guugr5k3pdib",
  },
  {
    name: "ロゴ利用ガイドライン",
    url: "https://docs.google.com/document/d/136MWPcrD4lUasjDi_yY3jWQHXdlt0rg306XBjaZ9pDk/edit?usp=sharing",
  },
  {
    name: "キャンセルポリシー",
    url: "https://docs.google.com/document/d/1YKUO01ROvD2nnEN8YW37VKkF35HKavWQ9uG4JDJcaco/edit?tab=t.0",
  },
];

export const organizationLink: FooterLink = {
  name: "一般社団法人 関西開発者会議",
  url: "https://k3jp.org/",
};
