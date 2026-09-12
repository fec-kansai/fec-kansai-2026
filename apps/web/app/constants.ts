import type {
  IndividualSponsor,
  JobBoardEntry,
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
  // 「スポンサー募集」は募集終了に伴いメニューから削除（セクション自体は残る）。
  { name: "開催日・アクセス", url: "/#access" },
  { name: "チケット情報", url: "/#ticket" },
  { name: "タイムテーブル", url: "/timetable" },
  { name: "スポンサー", url: "/sponsors" },
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

// スポンサー実データ。ティアの枠（見出し）は固定で、`sponsors` を埋めていくと
// 表示に反映される。オプションプランはセクションではなく、カードのバッジ
// （Sponsor.badges）で表す。
export const sponsorTiers: SponsorTier[] = [
  {
    id: "gold",
    heading: "Gold Sponsors",
    badgeLabel: "Gold Sponsor",
    sponsors: [
      // ロゴガイドライン: ロゴマークは無く、ロゴタイプのみ。白背景ではブランド
      // カラー版をそのまま使用（オンスクリーン最小サイズ 60px）。
      {
        id: "miidas",
        name: "ミイダス株式会社",
        logo: "/miidas.png",
        // ロゴ周囲に余白がある分、他社と同じ見た目の大きさになるよう拡大。
        logoScale: 1.08,
        websiteUrl: "https://miidas.co.jp/",
        description: [
          "ミイダスは、世界初※1の採用・転職におけるミスマッチを減らしながら、入社後の活躍までを支援する採用・転職サービスです。人口減少による人材不足が深刻化する中、主に中小企業を対象に「採用力」の向上を支援。AIや独自のビッグデータを活用し、採用課題の可視化から応募獲得、定着・活躍支援までを一気通貫で提供し、企業価値向上に貢献しています。",
          "※「バイアス診断ゲーム」（認知バイアスを測定するテスト）と「ミイダス コンピテンシー診断(特性診断)」を使って人材の採用と配置・育成を可能にする無料のスマホアプリ診断サービスとして（2023年5月 未来トレンド研究機構）",
        ],
        techBlogUrl: "https://note.com/miidas_tech",
        recruitUrl: "https://careers.miidas.co.jp/tech/",
        sns: [{ platform: "x", url: "https://x.com/miidas_tech" }],
      },
      // ロゴ利用ガイドライン: https://www.coderabbit.ai/ja/brand
      // オプションはブース出展とスポンサーセッション。ブース出展はサイト表記不要
      // のため、カードのバッジにはスポンサーセッションのみ表示する。
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
        badges: [
          {
            label: "スポンサーセッション",
            variant: "option",
          },
        ],
      },
      // ロゴは .ai（Illustrator）でしか提供がないため、先方の許可を得たうえで
      // 横組みの .ai をベクターから 1600px の PNG に書き出したもの。
      // オプションはブース出展のみ（サイト表記不要）。
      {
        id: "kakehashi",
        name: "株式会社カケハシ",
        logo: "/kakehashi.png",
        websiteUrl: "https://recruit.kakehashi.life/",
        description: [
          "株式会社カケハシは日本の医療システムの再構築を目指すヘルステックスタートアップ企業です。テクノロジーを駆使し、患者さんにとってより良い医療を医療現場にとって持続可能な形で実現します。",
          "薬局体験アシスタント「Musubi」のほか、複数プロダクトを開発・提供し、国内の薬局の1万店舗超をカバー。服薬期間中の患者フォローによる治療効果最大化や医薬品の市中在庫可視化・安定供給などをサポートします。薬局や医療機関をはじめとしたステークホルダーとともに、より良い医療を実現するプラットフォームを構築していきます。",
        ],
        techBlogUrl: "https://kakehashi-dev.hatenablog.com/",
        sns: [{ platform: "x", url: "https://x.com/kakehashi_dev" }],
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
      // ブランドガイドライン: 標準（2行）ロゴのカラー版。カラーロゴは白／黒背景
      // のみ可 — カードもロゴ枠も白背景なのでそのまま使用できる。
      {
        id: "sakura-internet",
        name: "さくらインターネット株式会社",
        logo: "/sakurainternet.png",
        // 他社より大きく見えるため微調整。
        logoScale: 0.95,
        websiteUrl: "https://www.sakura.ad.jp/",
        description: [
          "さくらインターネットは、1996年創業のデジタルインフラ企業です。信頼性の高いクラウドおよび計算基盤を国内の自社データセンターから提供しています。「『やりたいこと』を『できる』に変える」を企業理念に掲げ、安心して利用できるデジタルインフラの提供を通じ、多様な取り組みを支援しています。「さくらのクラウド」や「さくらのAI Engine」など、開発を支援するサービスも多数提供しています。",
        ],
        sns: [{ platform: "x", url: "https://x.com/sakura_users" }],
      },
    ],
  },
  {
    id: "silver",
    heading: "Silver Sponsors",
    badgeLabel: "Silver Sponsor",
    sponsors: [
      // ロゴ使用申請: https://corp.kaonavi.jp/logoapply/
      // 社内のクオリティチェックは不要だが、Slack で共有されたブランドデッキに
      // 沿っているか要確認。オプションはブース出展のみ（サイト表記不要）。
      {
        id: "kaonavi",
        name: "株式会社カオナビ",
        logo: "/kaonavi.png",
        websiteUrl: "https://corp.kaonavi.jp/",
        description: [
          '私たちカオナビは「"はたらく"にテクノロジーを実装し、個の力から社会の仕様を変える」をPurposeに掲げ、タレントマネジメント市場No.1（導入社数4,500社超(2025/9月時点)）の『カオナビ』を開発・提供しています。',
          "性別、学歴、肩書きといったラベルにとらわれず、「個」の力が開かれる社会の実現を目指し、人材データベースを核とした人事DXからタレントマネジメントまで幅広いソリューションを展開。企業の人事業務を革新するタレントマネジメントシステムとして、多くの企業様にご活用いただいています。",
          "フロントエンド開発ではReact・TypeScriptを採用し、ユーザビリティを重視したUI/UX設計により、様々な利用者が直感的に操作できるシステムを追求。テクノロジーの力で働く人すべてが自分らしく活躍できる未来を創造します。",
          "Face you, Face next. 向き合おう、すべての人が先へ進めるように。",
        ],
        techBlogUrl: "https://note.com/kaonavi",
        recruitUrl: "https://recruit.kaonavi.jp/engineer",
        // 技術広報アカウント（@kaonavi_devs）もあるが、公式アカウントのみ掲載。
        sns: [{ platform: "x", url: "https://x.com/kaonavi_jp" }],
      },
      // ロゴ使用の注意: 白黒印刷以外はカラーロゴを使用。ロゴ背景の「光彩」は
      // ノイズではなく、白背景では表示されない — カードもロゴ枠も白なので問題なし。
      {
        id: "teamlab",
        name: "チームラボ",
        logo: "/teamlab.png",
        // 正方形に近く大きく見えるため、同グレード内で揃うよう縮小。
        logoScale: 0.81,
        websiteUrl: "https://www.team-lab.com/",
        description: [
          "最新のテクノロジーを活用したソリューション、大規模システム、都市計画やICT空間設計を行う。エンジニア、デザイナー、カタリスト等各分野のスペシャリストが共創。設計から実装まで一貫して追求し、前例のない価値を共に生み出す。",
        ],
        techBlogUrl: "https://zenn.dev/p/team_lab",
        recruitUrl: "https://www.team-lab.com/recruit/",
        sns: [{ platform: "x", url: "https://x.com/teamlab_recruit" }],
      },
      // ブランドガイドライン: ブラックのワードマーク（白背景での優先カラー）。
      // 社名表記は「LINEヤフー株式会社」固定 — 表記ゆれ・改行は禁止。
      {
        id: "line-yahoo",
        name: "LINEヤフー株式会社",
        logo: "/line-yahoo.png",
        // ファイル内の余白が大きく小さく見えるため拡大。
        logoScale: 1.25,
        websiteUrl: "https://www.lycorp.co.jp/ja/technology-design/",
        description: [
          "LINEヤフー株式会社は、2023年10月に、LINE株式会社やヤフー株式会社などのグループ会社による再編を経て誕生した日本最大級のテックカンパニーです。",
          "「WOW Our Users!」をミッションに掲げ、検索・ポータル、eコマース、メッセンジャー、広告など、多様な領域において事業を展開しています。",
          "多くの国と地域から集まった1万人以上の従業員が働くLINEヤフーは、ユーザーに感動を与えるサービスを提供し続けるとともに、インターネットの力を通じてより豊かで便利な暮らしの実現に貢献していきます。",
        ],
        techBlogUrl: "https://techblog.lycorp.co.jp/ja/tag/Frontend",
        sns: [{ platform: "x", url: "https://x.com/lycorptech_jp" }],
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
        id: "novelty",
        name: "株式会社ノベルティ",
        logo: "/novelty.png",
        // 同上。
        logoScale: 1.16,
        websiteUrl: "https://noveltyinc.jp/",
        description: [
          "株式会社ノベルティは、ウェブサイトの制作・開発にとどまらず、集客・ブランディング・運用改善まで、事業成果に直結するウェブプロモーションを総合的に支援する会社です。",
          "私たちは単に「つくること」をゴールとせず、リリース後もデータに基づいたサイト改善や運用支援を継続し、お客様の事業成長に寄り添い続けます。その中で特に注力しているのは「ウェブアクセシビリティ向上支援」です。障害の有無や利用環境に関わらず「誰もが快適にアクセスし、目的を達成できる」ウェブ品質を目指し、設計・実装段階からUI/UXのアクセシビリティ向上に取り組んでいます。",
          "フロントエンドカンファレンス関西2026への協賛を通じて、技術者コミュニティの発展を応援するとともに、アクセシブルで高品質なウェブ体験が当たり前になる未来を皆様と共に創っていきたいと考えています。ウェブ制作やアクセシビリティに関する課題、制作・運用のパートナーシップについてもお気軽にご相談ください！",
        ],
        recruitUrl: "https://recruit.noveltyinc.co.jp/",
        sns: [{ platform: "x", url: "https://x.com/Noveltyinc_" }],
      },
      // ガイドラインなし。オプションプランもなし。
      {
        id: "joint-crew",
        name: "株式会社JOINT CREW",
        logo: "/joint-crew.png",
        // 他社より大きく見えるため微調整。
        logoScale: 0.88,
        // 提出は http だが https でも同じサイトが開くため https を使用。
        websiteUrl: "https://www.jointcrew.co.jp/",
        description: [
          "私たちのビジョンは、日本の子供たちを笑顔にすることです。",
          "この目標に向け、顧客の課題解決を支援するシステム開発事業と、病児保育支援サービス『くれいしゅ』をはじめとしたBabyTech事業を展開しています。会社として社会課題に挑む一方で、従業員に対しては、市場価値の向上を支援し、長く働ける環境づくりに取り組んでいます。新しい技術を積極的に採用してスキルアップを支援し、ライフステージの変化にも対応できる制度や福利厚生を整えることで、「安心して一生働き続けられる場所」の実現を目指しています。",
        ],
        recruitUrl: "https://www.wantedly.com/companies/jointcrew",
        sns: [{ platform: "x", url: "https://x.com/JOINTCREW_inc" }],
      },
      // TAMくんキャラクター利用ガイドライン2026: 顔・表情・帽子・手足を改変しない、
      // 頭や顔に他の画像を重ねない、同じ画像内に複数登場させない、原作者が作成した
      // 9種類のバリエーションから使う、AIで改変しない。提供データをそのまま1つだけ
      // 表示しているため、いずれも満たしている。
      // オプションはブース出展のみ（サイト表記不要）。
      {
        id: "tam",
        name: "株式会社TAM",
        logo: "/tam.png",
        websiteUrl: "https://www.tam-tam.co.jp/",
        description: [
          "TAMはお客さまと共に新しい価値を創る、クリエイティブな開発パートナーです。コンサルティングから、制作・開発、マーケティング、現場運用まで伴走し、DX（デジタルトランスフォーメーション）を共創します。フロントエンド領域でも、Next.jsやAstroなどのモダン技術から、長年培ってきたレガシー技術まで、幅広く手がけています。",
          "ベテランも学生も、エンジニアもデザイナーも、フロントエンドに関わる誰もが居場所になる場所をつくる。関西から発信する文化を、もっと大きく育てたい。そんな「関西も負けてへんで」という気概に、同じ関西発の会社として強く背中を押されました。",
          "AIが当たり前になった今だからこそ、フロントエンドはますます多様な人が交わる場所になっていく。そのつながりを作る一員になれたら嬉しいです。",
          "当日はTAMのエンジニアが登壇し、CEDEC2026でも発表した、ブラウザで遊べる謎解きアドベンチャーゲーム「カミとミコ」についてお話しします。ブースも出展し、ノベルティもご用意しております。皆さまにお会いできることを楽しみにしております。",
        ],
        techBlogUrl: "https://note.tam-tam.co.jp/",
        recruitUrl: "https://www.wantedly.com/companies/tam",
        sns: [{ platform: "x", url: "https://x.com/tam_koho" }],
      },
    ],
  },
  { id: "student", heading: "学生支援", badgeLabel: "学生支援", sponsors: [] },
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
