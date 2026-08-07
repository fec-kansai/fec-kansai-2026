import type { Session, TimetableSlot, Track, TrackId } from "./types";

/**
 * Sessions extracted from https://fortee.jp/fec-kansai-2026/timetable .
 * Sponsor sessions are not published on fortee yet, so those slots keep the
 * placeholder content.
 */

/** Lead copy above the timetable card. Each entry becomes its own line. */
export const timetableIntro: string[] = [
  "フロントエンドカンファレンス関西2026のタイムテーブルは、最新トレンドから実務に役立つ内容まで、多彩なセッションが揃っています。",
  "セッションの合間には交流やリフレッシュの時間も用意されており、他の参加者とのつながりも深められます。",
  "タイムテーブルをチェックして、気になるセッションを見つけましょう！",
];

/** Column order on desktop and legend order on mobile. */
export const tracks: Track[] = [
  { id: "a", name: "トラックA", hall: "グランホール1" },
  { id: "b", name: "トラックB", hall: "グランホール2" },
];

/** Full-programme link shown as the CTA under the timetable. */
export const forteeLink = {
  url: "https://fortee.jp/fec-kansai-2026/timetable",
  label: "タイムテーブルを見る (Fortee)",
};

const FORTEE_TIMETABLE = forteeLink.url;
const PROPOSAL = "https://fortee.jp/fec-kansai-2026/proposal";
const AVATAR = "https://fortee.jp/files/fec-kansai-2026/speaker";

/** Dummy talk shown in the sponsor cells until the real programme lands. */
const dummySession = (category: string): Session => ({
  category,
  title: "セッションタイトルは後日公開予定です（ダミー）",
  speaker: "スピーカー名",
  url: FORTEE_TIMETABLE,
  surveyUrl: FORTEE_TIMETABLE,
});

/** Both tracks filled with the same dummy talk. */
const dummySessions = (category: string): Record<TrackId, Session | null> => ({
  a: dummySession(category),
  b: dummySession(category),
});

const REGULAR = "レギュラートーク";
const LT = "LT";

export const timetableSlots: TimetableSlot[] = [
  {
    id: "doors-open",
    kind: "shared",
    startsAt: "10:00",
    endsAt: "10:30",
    label: "開場・受付",
  },
  {
    id: "opening",
    kind: "sessions",
    startsAt: "10:30",
    endsAt: "10:45",
    sessions: {
      a: {
        category: "主催者",
        title: "オープニングトーク",
        speaker: "スピーカー名",
      },
      b: null,
    },
  },
  {
    id: "regular-1",
    kind: "sessions",
    startsAt: "10:45",
    endsAt: "11:15",
    sessions: {
      a: {
        category: REGULAR,
        title: "今さら理解するウェブフォント2026",
        speaker: "takanorip",
        speakerImage: `${AVATAR}/d176a07a-3e9e-4db8-92a2-29d0a5a35185.jpg`,
        url: `${PROPOSAL}/fab5d33b-5324-4a9e-9553-c8565a71514c`,
      },
      b: {
        category: REGULAR,
        title: "HTMLを着たCanvas 2D - HTML-in-Canvasで作る未来のWeb UI表現",
        speaker: "池田 泰延",
        speakerImage: `${AVATAR}/0e646cbd-5327-49c9-bf10-c5be2c7b622e.jpg`,
        url: `${PROPOSAL}/efcdb282-48d3-4754-8562-791407c58d83`,
      },
    },
  },
  {
    id: "break-1",
    kind: "break",
    startsAt: "11:15",
    endsAt: "11:25",
    label: "休憩・移動時間",
  },
  {
    id: "regular-2",
    kind: "sessions",
    startsAt: "11:25",
    endsAt: "11:55",
    sessions: {
      a: {
        category: REGULAR,
        title: "ブラウザとサーバーから考えるAI時代のフロントエンド監視",
        speaker: "Shogo Fukami",
        speakerImage: `${AVATAR}/d1a5ffb7-7c60-4dca-b9a2-85edbc158b67.jpg`,
        url: `${PROPOSAL}/4c876c07-9cfe-4686-8345-3f11bfcaee94`,
      },
      b: {
        category: REGULAR,
        title: "UI実装者が書いたシナリオだからこそ、意味を持つk6負荷試験",
        speaker: "梅木和弥",
        speakerImage: `${AVATAR}/258958ee-7a66-4b62-a9c6-56bad44fed34.jpg`,
        url: `${PROPOSAL}/725e7950-2a02-4d4c-9d8f-54433b79e436`,
      },
    },
  },
  {
    id: "lunch",
    kind: "break",
    startsAt: "11:55",
    endsAt: "12:10",
    label: "お昼休憩",
  },
  {
    id: "sponsor-1",
    kind: "sessions",
    startsAt: "12:10",
    endsAt: "12:30",
    sessions: dummySessions("スポンサーセッション"),
  },
  {
    id: "sponsor-2",
    kind: "sessions",
    startsAt: "12:30",
    endsAt: "12:50",
    sessions: dummySessions("スポンサーセッション"),
  },
  {
    id: "sponsor-3",
    kind: "sessions",
    startsAt: "12:50",
    endsAt: "13:20",
    sessions: dummySessions("スポンサーセッション"),
  },
  {
    id: "regular-3",
    kind: "sessions",
    startsAt: "13:20",
    endsAt: "13:50",
    sessions: {
      a: {
        category: REGULAR,
        title:
          "Figmaをゲームエディタに！コードを書かなくてもSPAゲーム制作に参加できる仕組み",
        speaker: "まぁし / 知念",
        speakerImage: `${AVATAR}/0e6a8e1a-d147-430e-80d3-05af578fc958.jpg`,
        url: `${PROPOSAL}/dab8ff70-eacd-42af-a730-01ebccc0ec24`,
      },
      b: {
        category: REGULAR,
        title:
          "トレードオフの中で体験を設計する、長期運用プロダクトのデザインエンジニアリング",
        speaker: "わっきー",
        speakerImage: `${AVATAR}/90e5b508-fa9a-4f28-a6a6-f26f92f39e60.jpg`,
        url: `${PROPOSAL}/301fba00-66ec-460c-b68f-780fe0bcd68c`,
      },
    },
  },
  {
    id: "break-2",
    kind: "break",
    startsAt: "13:50",
    endsAt: "14:00",
    label: "休憩・移動時間",
  },
  {
    id: "regular-4",
    kind: "sessions",
    startsAt: "14:00",
    endsAt: "14:30",
    sessions: {
      a: {
        category: REGULAR,
        title:
          "フロントエンドのモデルに境界を引く ── AIがコードを書く時代に、人間が決めること",
        speaker: "Hiroki.M",
        speakerImage: `${AVATAR}/b254d6ea-2f45-4298-a4c2-b1c53b3d4165.jpg`,
        url: `${PROPOSAL}/5cd13a7c-0f42-4ddd-af27-b5f76ba6efcf`,
      },
      b: {
        category: REGULAR,
        title:
          "AIで速く作れる時代に、整合性をどう保つか 〜動くものを作る前にチームで決めること〜",
        speaker: "小泉岳人",
        speakerImage: `${AVATAR}/ea813082-da3e-4e62-9d46-e8346cc6094c.jpg`,
        url: `${PROPOSAL}/7492b91a-5ea4-47bb-8f4f-3fdd0b009b3f`,
      },
    },
  },
  {
    id: "break-3",
    kind: "break",
    startsAt: "14:30",
    endsAt: "14:40",
    label: "休憩・移動時間",
  },
  {
    id: "regular-5",
    kind: "sessions",
    startsAt: "14:40",
    endsAt: "15:10",
    sessions: {
      a: {
        category: REGULAR,
        title:
          "複雑なUIコンポーネントとの長い付き合い方：波及するバグからテスト戦略を経て、安全な再設計へ",
        speaker: "あさマック",
        speakerImage: `${AVATAR}/fe29b719-8036-4cc6-bf8e-72c015447e8a.jpg`,
        url: `${PROPOSAL}/862d96b8-cc22-4bd2-8971-eb59dd66ec44`,
      },
      b: {
        category: REGULAR,
        title: "二歩目のフロントエンド・ウェブアクセシビリティ",
        speaker: "神原 拓海",
        speakerImage: `${AVATAR}/4177a74b-ac21-4427-a365-678f3388059e.png`,
        url: `${PROPOSAL}/c0bac7c9-8e03-43bc-afb8-cb607c5973ff`,
      },
    },
  },
  {
    id: "break-4",
    kind: "break",
    startsAt: "15:10",
    endsAt: "15:20",
    label: "休憩・移動時間",
  },
  {
    id: "regular-6",
    kind: "sessions",
    startsAt: "15:20",
    endsAt: "15:50",
    sessions: {
      a: {
        category: REGULAR,
        title: "宣言型部分更新は何を解決しどこへ向かうのか",
        speaker: "did0es",
        speakerImage: `${AVATAR}/57712193-3fc6-491c-b8e4-2a23e828f0e6.jpg`,
        url: `${PROPOSAL}/1a069943-7aa3-4e80-affc-ae2b55d78edd`,
      },
      b: {
        category: REGULAR,
        title:
          "V8のArray.prototype.flatを最大約5倍速くするまでと、巨大OSSへの大規模コミットの道のり",
        speaker: "西 悠太",
        speakerImage: `${AVATAR}/74590631-8f95-4739-81fc-7e011523b935.jpg`,
        url: `${PROPOSAL}/ca09b1d6-23b9-4e0e-886e-b0800f20fde5`,
      },
    },
  },
  {
    id: "break-5",
    kind: "break",
    startsAt: "15:50",
    endsAt: "16:00",
    label: "休憩・移動時間",
  },
  {
    id: "lt-1",
    kind: "sessions",
    startsAt: "16:00",
    endsAt: "16:05",
    sessions: {
      a: {
        category: LT,
        title: "気持ちぃ〜角丸 Squircles",
        speaker: "ryu",
        speakerImage: `${AVATAR}/7b425f8e-b295-4785-b326-4b637b17aacb.jpg`,
        url: `${PROPOSAL}/91219d93-833a-4a09-b5c4-34c5cb43a194`,
      },
      b: {
        category: LT,
        title: "速すぎるUIに、待ち時間を",
        speaker: "irie",
        speakerImage: `${AVATAR}/9875c20d-4467-48a7-8935-140cb67c927b.png`,
        url: `${PROPOSAL}/179358b1-58ac-4851-ac0a-ee27ed15471e`,
      },
    },
  },
  {
    id: "lt-2",
    kind: "sessions",
    startsAt: "16:05",
    endsAt: "16:10",
    sessions: {
      a: {
        category: LT,
        title: "パスキーの自動テストはどこまでいけるのか",
        speaker: "志田洋斗",
        speakerImage: `${AVATAR}/8db55559-8515-4e03-afaf-86365330c5dd.jpg`,
        url: `${PROPOSAL}/22dd467a-8f20-408e-8555-e1b8199d23bc`,
      },
      b: {
        category: LT,
        title:
          "AIに画面を壊してもらう：MCPで広げるフロントエンドの探索的モンキー試験",
        speaker: "Chen Xu",
        url: `${PROPOSAL}/a6202fc5-b6ab-43cc-bbcd-6a30541edfdc`,
      },
    },
  },
  {
    id: "lt-3",
    kind: "sessions",
    startsAt: "16:10",
    endsAt: "16:15",
    sessions: {
      a: {
        category: LT,
        title: "Webの常識が通じないHTMLメールのダークモード",
        speaker: "take",
        speakerImage: `${AVATAR}/a083e696-8487-4518-a776-eb7c247a6034.jpg`,
        url: `${PROPOSAL}/95a08a23-acb2-4fbc-90e4-a9b17f028794`,
      },
      b: {
        category: LT,
        title: "Webの限界を越える、Web NFCでタッチ",
        speaker: "Sei",
        speakerImage: `${AVATAR}/4c5026f1-d3e9-42e7-b4ff-5ad55790a637.jpg`,
        url: `${PROPOSAL}/4fe251fa-d297-4f59-b9ca-0ef0b9ece325`,
      },
    },
  },
  {
    id: "lt-4",
    kind: "sessions",
    startsAt: "16:15",
    endsAt: "16:20",
    sessions: {
      a: {
        category: LT,
        title: "AI時代に、みんなでフロントを作るためのNix",
        speaker: "ぶりお",
        speakerImage: `${AVATAR}/41de2468-604e-4376-8cc7-9668819dc863.jpg`,
        url: `${PROPOSAL}/03c1cdcf-5644-420d-bf67-5037bd6af6a5`,
      },
      b: {
        category: LT,
        title: "8年前のNode.jsを動かして分かった、npm install の裏側",
        speaker: "Keisuke Ikeda",
        speakerImage: `${AVATAR}/a6aa1e95-9116-4e26-9092-b36902866f3d.png`,
        url: `${PROPOSAL}/e0d7dab5-275c-440a-9faf-f028c9ed1840`,
      },
    },
  },
  {
    id: "lt-5",
    kind: "sessions",
    startsAt: "16:20",
    endsAt: "16:25",
    sessions: {
      a: {
        category: LT,
        title:
          "AIがユーザーになる時代のフロントエンドのシステム境界を考える ~ Generative UIに共通する設計思想 ~",
        speaker: "daitasu",
        speakerImage: `${AVATAR}/5c85440f-55e1-48f3-8405-f4812a8bec6b.jpg`,
        url: `${PROPOSAL}/c3a11073-a69b-421e-941a-76c7785a3387`,
      },
      b: {
        category: LT,
        title:
          "SharedWorkerを使ったキャッシュでネイティブアプリに負けないユーザー体験を目指す",
        speaker: "Nokogiri",
        speakerImage: `${AVATAR}/8e47c9a5-841b-415d-b43e-67a8aef400a0.jpg`,
        url: `${PROPOSAL}/6acb5002-c478-4d13-9d7a-a7d09018e984`,
      },
    },
  },
  {
    id: "closing",
    kind: "sessions",
    startsAt: "16:25",
    endsAt: "16:40",
    sessions: {
      a: {
        category: "主催者",
        title: "クロージング",
        speaker: "スピーカー名",
      },
      b: null,
    },
  },
  {
    id: "break-6",
    kind: "break",
    startsAt: "16:40",
    endsAt: "17:00",
    label: "休憩・移動時間",
  },
  {
    id: "social",
    kind: "shared",
    startsAt: "17:00",
    endsAt: "19:00",
    label: "懇親会",
    note: "※会場は【パークホール1・2】となります",
  },
];
