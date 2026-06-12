import type { SideEvent } from "./components/SideEventSection/types";

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
  // TODO: Uncomment this when the official character section is ready
  // { name: "公式キャラクター", url: "/#character" },
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

export const sideEvents: SideEvent[] = [
  {
    id: "kansai-frontend-meetup-1",
    status: "ended",
    date: { month: 6, day: 22, weekday: "mon" },
    title:
      "Kansai Frontend Meetup #1—プロポーザル締め切り間近！プロポーザルもくもく会",
    hosts:
      "主催：主催者名が入ります / 主催者名入ります / 主催者名入ります / 主催者名入ります",
    image: "/side-meetup-event.png",
    description: [
      "フロントエンドカンファレンス関西2026（2026/10/12開催）の CFP に向けて、みんなでプロポーザルを書く会です。",
      "当日はもくもく会の前にプロポーザルで見られているポイントやネタの見つけ方、プロポーザルを書くコツを可能な範囲でお話しします。もくもく会でもスタッフや他の参加者に相談しながら、実際にプロポーザルを書いていきましょう。",
      "ぜひ、初めてのプロポーザルを書く場にしてください！",
    ],
    tags: ["もくもく会", "CFP", "オフライン開催"],
    link: {
      url: "https://fortee.jp/fec-kansai-2026",
      label: "詳細・参加申し込みはこちら",
    },
  },
  {
    id: "side-event-2",
    status: "upcoming",
    date: { month: 6, day: 1, weekday: "mon" },
    title: "イベント名が入ります。",
    hosts:
      "主催：主催者名入ります / 主催者名入ります / 主催者名入ります / 主催者名入ります",
    description: [
      "イベント詳細テキストが入ります。イベント詳細テキストが入ります。イベント詳細テキストが入ります。イベント詳細テキストが入ります。イベント詳細テキストが入ります。イベント詳細テキストが入ります。イベント詳細テキストが入ります。",
    ],
    tags: [
      "タグタグタグ",
      "タグタグタグタグタグタグタグタグタグタグタグタグ",
      "タグタグタグ",
    ],
    link: {
      url: "https://fortee.jp/fec-kansai-2026",
      label: "詳細・参加申し込みはこちら",
    },
  },
  {
    id: "side-event-3",
    status: "upcoming",
    date: { month: 6, day: 1, weekday: "mon" },
    title: "イベント名が入ります。",
    hosts:
      "主催：主催者名入ります / 主催者名入ります / 主催者名入ります / 主催者名入ります",
    description: [
      "イベント詳細テキストが入ります。イベント詳細テキストが入ります。イベント詳細テキストが入ります。イベント詳細テキストが入ります。イベント詳細テキストが入ります。イベント詳細テキストが入ります。イベント詳細テキストが入ります。",
    ],
    tags: [
      "タグタグタグ",
      "タグタグタグタグタグタグタグタグタグタグタグタグ",
      "タグタグタグ",
    ],
    link: {
      url: "https://fortee.jp/fec-kansai-2026",
      label: "詳細・参加申し込みはこちら",
    },
  },
  {
    id: "side-event-4",
    status: "upcoming",
    date: { month: 6, day: 1, weekday: "mon" },
    title: "イベント名が入ります。",
    hosts:
      "主催：主催者名入ります / 主催者名入ります / 主催者名入ります / 主催者名入ります",
    description: [
      "イベント詳細テキストが入ります。イベント詳細テキストが入ります。イベント詳細テキストが入ります。イベント詳細テキストが入ります。イベント詳細テキストが入ります。イベント詳細テキストが入ります。イベント詳細テキストが入ります。",
    ],
    tags: [
      "タグタグタグ",
      "タグタグタグタグタグタグタグタグタグタグタグタグ",
      "タグタグタグ",
    ],
    link: {
      url: "https://fortee.jp/fec-kansai-2026",
      label: "詳細・参加申し込みはこちら",
    },
  },
];

export const infoLinks: FooterLink[] = [
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
