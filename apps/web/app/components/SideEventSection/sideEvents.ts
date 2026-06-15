import type { SideEvent } from "./types";

export const sideEvents: SideEvent[] = [
  {
    id: "kansai-frontend-meetup-1",
    status: "upcoming",
    date: { month: 6, day: 22, weekday: "mon" },
    title:
      "Kansai Frontend Meetup #1—プロポーザル締め切り間近！プロポーザルもくもく会",
    hosts: "主催：フロントエンドカンファレンス関西",
    image: "/side-meetup-event.png",
    description: [
      "Kansai Frontend Meetup は、フロントエンドカンファレンス関西のスタッフが立ち上げた、関西のフロントエンド好きが気軽に集まれるコミュニティイベントです。",
      "「Frontend, Unbounded. ／ フロントエンドは、みんなの話やで。」——UI を描く人も、体験を設計する人も、コードを書く人も、プロダクトを問う人も。画面の向こうに立つすべての人へ、関西からーー全ての人が自分なりにフロントエンドを楽しめる場を目指しています。",
      "カンファレンスのような大きな舞台だけでなく、小さな集まりも大事にし、関西のフロントエンド、テックコミュニティを面白くしていくことを目指していきます。初参加の方も、ひとりで来る方も大歓迎です！気軽においでや〜。",
    ],
    tags: ["もくもく会", "CFP", "fec_kansai"],
    link: {
      url: "https://fec-kansai.connpass.com/event/395873/",
      label: "詳細・参加申し込みはこちら",
    },
  },
];
