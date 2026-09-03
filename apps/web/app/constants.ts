import type {
  IndividualSponsor,
  JobBoardEntry,
  OptionSponsorCategory,
  SponsorTier,
} from "./components/SponsorsSection/types";

export type NavLink = {
  name: string;
  url: string;
};

export const navItems: NavLink[] = [
  // Anchor entries are absolute (/#…) so the menu also works from other routes
  // (/side-events, /timetable), where these sections don't exist — clicking
  // jumps back to the section on the LP. Page entries are plain routes.
  { name: "開催日・アクセス", url: "/#access" },
  { name: "スポンサー募集", url: "/#sponsor" },
  { name: "チケット情報", url: "/#ticket" },
  { name: "タイムテーブル", url: "/timetable" },
  { name: "公式キャラクター", url: "/#character" },
  { name: "サイドイベント", url: "/side-events" },
  { name: "スポンサー", url: "/sponsors" },
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

// スポンサー実データ。ティア／オプションの枠（見出し）は固定で、`sponsors` を
// 埋めていくと表示に反映される。実データが決まるまで sponsors は空。
export const sponsorTiers: SponsorTier[] = [
  {
    id: "gold",
    heading: "Gold Sponsors",
    badgeLabel: "Gold Sponsor",
    sponsors: [
      // ロゴ利用ガイドライン: https://www.coderabbit.ai/ja/brand
      // オプションはブース出展のみ（サイト表記不要）。
      {
        id: "coderabbit",
        name: "CodeRabbit",
        logo: "/coderabbit.svg",
        websiteUrl: "https://coderabbit.link/atsushija",
        description: [
          "CodeRabbitは、AIによるコード生成が急増する開発環境において、ソフトウェア変更を安全かつ効率的に管理する「Agentic Change Management」を提供する開発プラットフォームです。PRごとのAIコードレビューを中心に、コードベースや変更履歴、ドキュメントなど多様なコンテキストを活用し、潜在的な問題の検出から修正提案までを自動化します。",
          "さらに、PRの価値・リスクを評価して優先順位やレビュアーを振り分けるCodeRabbit Triage、巨大な差分の意図や影響範囲を理解しやすくするChange Stack、コードベースを継続的に監視して脆弱性を発見・検証・修復するCodeRabbit Securityを提供。AIコーディングエージェントとも連携してレビューやPRの理解負荷解消、優先順位付け、そしてセキュリティまでソフトウェア変更のライフサイクル全体を支援します。",
        ],
        recruitUrl: "https://www.coderabbit.ai/ja/careers",
        sns: [{ platform: "x", url: "https://x.com/coderabbitaija" }],
      },
      // ブランドガイドライン: 標準（2行）ロゴのカラー版。カラーロゴは白／黒背景
      // のみ可 — カードもロゴ枠も白背景なのでそのまま使用できる。
      {
        id: "sakura-internet",
        name: "さくらインターネット株式会社",
        logo: "/sakurainternet.png",
        websiteUrl: "https://www.sakura.ad.jp/",
        description: [
          "さくらインターネットは、1996年創業のデジタルインフラ企業です。信頼性の高いクラウドおよび計算基盤を国内の自社データセンターから提供しています。「『やりたいこと』を『できる』に変える」を企業理念に掲げ、安心して利用できるデジタルインフラの提供を通じ、多様な取り組みを支援しています。「さくらのクラウド」や「さくらのAI Engine」など、開発を支援するサービスも多数提供しています。",
        ],
        sns: [{ platform: "x", url: "https://x.com/sakura_users" }],
      },
      {
        id: "chot-inc",
        name: "ちょっと株式会社",
        logo: "/chot-inc.png",
        websiteUrl: "https://chot-inc.com/",
        description: [
          "ちょっと株式会社は、Next.jsやTypeScriptを中心としたモダン技術を活用し、スピーディかつ高品質なWebサイト・サービスの開発支援を行うフロントエンド特化の技術者集団です。大規模サイトのリニューアルやサーバーレスを活用したWebアプリ・モバイルアプリ開発まで幅広く対応し、技術選定からデザイン、運用保守まで一気通貫で支援します。",
          "UXに優れた「魅力的品質」を追求し、アクセシビリティやパフォーマンスの最適化にも注力することで、あらゆるデバイスで最高のユーザー体験を提供します。さらに独自開発のCMSプラットフォーム「Orizm」により、従来のCMSでは難しかったフルカスタマイズをスピーディかつ低コストに実現。業界特化のCMS開発や運用改善など、幅広いユースケースに対応可能です。お客様に寄り添い、技術的なパートナーとして課題解決とビジネス成長に貢献します。",
        ],
        techBlogUrl: "https://zenn.dev/p/chot",
        recruitUrl: "https://recruit.chot-inc.com/",
        sns: [{ platform: "x", url: "https://x.com/chot_inc" }],
      },
      // ロゴガイドライン: ロゴマークは無く、ロゴタイプのみ。白背景ではブランド
      // カラー版をそのまま使用（オンスクリーン最小サイズ 60px）。
      {
        id: "miidas",
        name: "ミイダス株式会社",
        logo: "/miidas.png",
        websiteUrl: "https://miidas.co.jp/",
        description: [
          "ミイダスは、世界初※1の採用・転職におけるミスマッチを減らしながら、入社後の活躍までを支援する採用・転職サービスです。人口減少による人材不足が深刻化する中、主に中小企業を対象に「採用力」の向上を支援。AIや独自のビッグデータを活用し、採用課題の可視化から応募獲得、定着・活躍支援までを一気通貫で提供し、企業価値向上に貢献しています。",
          "※「バイアス診断ゲーム」（認知バイアスを測定するテスト）と「ミイダス コンピテンシー診断(特性診断)」を使って人材の採用と配置・育成を可能にする無料のスマホアプリ診断サービスとして（2023年5月 未来トレンド研究機構）",
        ],
        techBlogUrl: "https://note.com/miidas_tech",
        recruitUrl: "https://careers.miidas.co.jp/tech/",
        sns: [{ platform: "x", url: "https://x.com/miidas_tech" }],
      },
    ],
  },
  {
    id: "silver",
    heading: "Silver Sponsors",
    badgeLabel: "Silver Sponsor",
    sponsors: [
      // ブランドガイドライン: ブラックのワードマーク（白背景での優先カラー）。
      // 社名表記は「LINEヤフー株式会社」固定 — 表記ゆれ・改行は禁止。
      {
        id: "line-yahoo",
        name: "LINEヤフー株式会社",
        logo: "/line-yahoo.png",
        websiteUrl: "https://www.lycorp.co.jp/ja/technology-design/",
        description: [
          "LINEヤフー株式会社は、2023年10月に、LINE株式会社やヤフー株式会社などのグループ会社による再編を経て誕生した日本最大級のテックカンパニーです。",
          "「WOW Our Users!」をミッションに掲げ、検索・ポータル、eコマース、メッセンジャー、広告など、多様な領域において事業を展開しています。",
          "多くの国と地域から集まった1万人以上の従業員が働くLINEヤフーは、ユーザーに感動を与えるサービスを提供し続けるとともに、インターネットの力を通じてより豊かで便利な暮らしの実現に貢献していきます。",
        ],
        techBlogUrl: "https://techblog.lycorp.co.jp/ja/tag/Frontend",
        sns: [{ platform: "x", url: "https://x.com/lycorptech_jp" }],
      },
      // ロゴ使用の注意: 白黒印刷以外はカラーロゴを使用。ロゴ背景の「光彩」は
      // ノイズではなく、白背景では表示されない — カードもロゴ枠も白なので問題なし。
      {
        id: "teamlab",
        name: "チームラボ",
        logo: "/teamlab.png",
        websiteUrl: "https://www.team-lab.com/",
        description: [
          "最新のテクノロジーを活用したソリューション、大規模システム、都市計画やICT空間設計を行う。エンジニア、デザイナー、カタリスト等各分野のスペシャリストが共創。設計から実装まで一貫して追求し、前例のない価値を共に生み出す。",
        ],
        techBlogUrl: "https://zenn.dev/p/team_lab",
        recruitUrl: "https://www.team-lab.com/recruit/",
        sns: [{ platform: "x", url: "https://x.com/teamlab_recruit" }],
      },
    ],
  },
  {
    id: "bronze",
    heading: "Bronze Sponsors",
    badgeLabel: "Bronze Sponsor",
    sponsors: [
      // ガイドラインなし。オプションプランもなし。
      {
        id: "joint-crew",
        name: "株式会社JOINT CREW",
        logo: "/joint-crew.png",
        // 提出は http だが https でも同じサイトが開くため https を使用。
        websiteUrl: "https://www.jointcrew.co.jp/",
        description: [
          "私たちのビジョンは、日本の子供たちを笑顔にすることです。",
          "この目標に向け、顧客の課題解決を支援するシステム開発事業と、病児保育支援サービス『くれいしゅ』をはじめとしたBabyTech事業を展開しています。会社として社会課題に挑む一方で、従業員に対しては、市場価値の向上を支援し、長く働ける環境づくりに取り組んでいます。新しい技術を積極的に採用してスキルアップを支援し、ライフステージの変化にも対応できる制度や福利厚生を整えることで、「安心して一生働き続けられる場所」の実現を目指しています。",
        ],
        recruitUrl: "https://www.wantedly.com/companies/jointcrew",
        sns: [{ platform: "x", url: "https://x.com/JOINTCREW_inc" }],
      },
    ],
  },
  { id: "student", heading: "学生支援", badgeLabel: "学生支援", sponsors: [] },
];

export const optionSponsorCategories: OptionSponsorCategory[] = [
  { id: "makuai-cm", heading: "幕間CM", sponsors: [] },
  { id: "back-panel", heading: "バックパネル", sponsors: [] },
  { id: "name-card", heading: "ネームカード", sponsors: [] },
  {
    id: "session-room-naming",
    heading: "セッションルームネーミングライツ",
    sponsors: [],
  },
  // ブース出展はサイト表記不要のため、ここには載せない。
  { id: "sponsor-booth", heading: "スポンサーブース", sponsors: [] },
  {
    id: "sponsor-session",
    heading: "スポンサーセッション",
    sponsors: [
      {
        id: "sponsor-session-coderabbit",
        name: "CodeRabbit",
        logo: "/coderabbit.svg",
        websiteUrl: "https://coderabbit.link/atsushija",
        description: [],
      },
    ],
  },
  { id: "lunch", heading: "ランチ", sponsors: [] },
  { id: "party", heading: "懇親会", sponsors: [] },
  { id: "coffee", heading: "コーヒー", sponsors: [] },
];

export const individualSponsors: IndividualSponsor[] = [];

// ジョブボード。ジョブボードのオプションを取ったスポンサーのみを載せる。
export const jobBoardEntries: JobBoardEntry[] = [
  {
    id: "chot-inc",
    name: "ちょっと株式会社",
    image: "/chot-inc-job-board.png",
    url: "https://recruit.chot-inc.com/",
  },
  {
    id: "teamlab",
    name: "チームラボ",
    image: "/teamlab-job-board.png",
    // 2:1 のバナーなので左右が少し切れる。ロゴが右端（幅の約95%）にあるため、
    // 切り取り位置を右に寄せてロゴが欠けないようにする。
    imagePosition: "65% center",
    url: "https://www.team-lab.com/engineering/",
  },
];
