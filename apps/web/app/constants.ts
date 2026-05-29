export type NavLink = {
  name: string;
  url: string;
};

export const navItems: NavLink[] = [
  { name: "メッセージ", url: "#message" },
  { name: "開催日・アクセス", url: "#access" },
  { name: "プロポーザル", url: "#proposal" },
  { name: "スポンサー募集", url: "#sponsor" },
  { name: "チケット情報", url: "#ticket" },
  { name: "公式キャラクター", url: "#character" },
];

export type FooterLink = {
  name: string;
  url: string;
};

export const sponsorLinks: FooterLink[] = [
  { name: "協賛資料", url: "/sponsor/materials" },
  { name: "スポンサー募集URL", url: "/sponsor" },
];

export const infoLinks: FooterLink[] = [
  { name: "行動規範", url: "/code-of-conduct" },
  { name: "プライバシーポリシー", url: "/privacy-policy" },
  { name: "反社会性力排除ポリシー", url: "/anti-social-forces-policy" },
  { name: "関連イベントのガイドライン", url: "/related-events-guideline" },
  { name: "ロゴ利用ガイドライン", url: "/logo-guideline" },
  { name: "キャンセルポリシー", url: "/cancellation-policy" },
];
