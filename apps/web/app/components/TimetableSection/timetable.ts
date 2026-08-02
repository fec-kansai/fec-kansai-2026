import type { Session, TimetableSlot, Track, TrackId } from "./types";

/**
 * TODO: placeholder schedule. Times follow the planning spreadsheet, but every
 * session (title / speaker) is dummy content and every `url` / `surveyUrl`
 * points at the fortee timetable — swap the whole of `timetableSlots` for the
 * real programme once it is fixed. The markup is driven entirely by this file,
 * so nothing in the components needs to change.
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

/** Dummy talk shown in every session cell until the real programme lands. */
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
    sessions: dummySessions("レギュラートーク"),
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
    sessions: dummySessions("レギュラートーク"),
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
    sessions: dummySessions("レギュラートーク"),
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
    sessions: dummySessions("レギュラートーク"),
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
    sessions: dummySessions("レギュラートーク"),
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
    sessions: dummySessions("レギュラートーク"),
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
    sessions: dummySessions("LT"),
  },
  {
    id: "lt-2",
    kind: "sessions",
    startsAt: "16:05",
    endsAt: "16:10",
    sessions: dummySessions("LT"),
  },
  {
    id: "lt-3",
    kind: "sessions",
    startsAt: "16:10",
    endsAt: "16:15",
    sessions: dummySessions("LT"),
  },
  {
    id: "lt-4",
    kind: "sessions",
    startsAt: "16:15",
    endsAt: "16:20",
    sessions: dummySessions("LT"),
  },
  {
    id: "lt-5",
    kind: "sessions",
    startsAt: "16:20",
    endsAt: "16:25",
    sessions: dummySessions("LT"),
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
