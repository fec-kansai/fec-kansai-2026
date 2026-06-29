import type { SideEvent } from "./types";

export const sideEvents: SideEvent[] = [
  {
    id: "kansai-frontend-meetup-1",
    endsAt: "2026-06-22T21:00:00+09:00",
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
  {
    id: "kansai-frontend-meetup-2",
    endsAt: "2026-07-29T21:00:00+09:00",
    title: "Kansai Frontend Meetup #2—フロントエンド何でもLT大会",
    hosts: "主催：フロントエンドカンファレンス関西",
    image: "/side-meetup-event-2.png",
    description: [
      "Kansai Frontend Meetup は、フロントエンドカンファレンス関西のスタッフが立ち上げた、関西のフロントエンド好きが気軽に集まれるコミュニティイベントです。",
      "今回は「フロントエンド何でもLT大会」と題して、お仕事の話から個人開発、Web 標準やフレームワーク、ツール、UX、WebGL、クリエイティブコーディングまで——フロントエンドにまつわるあれこれを LT で持ち寄ります。10 分トーク 3 本と 5 分の LT 8 本をお届けします。",
      "「全ての人が自分なりにフロントエンドを楽しめる場」を目指しています。初参加の方も、ひとりで来る方も大歓迎です！気軽においでや〜。",
    ],
    tags: ["LT大会", "fec_kansai"],
    link: {
      url: "https://fec-kansai.connpass.com/event/396639/",
      label: "詳細・参加申し込みはこちら",
    },
  },
];
