import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-svh bg-fk-yellow-soft font-sans flex flex-col items-center justify-center gap-6 px-4">
      <p className="text-fk-yellow font-montserrat font-bold text-[64px] leading-none">
        404
      </p>
      <h1 className="m-0 text-fk-text-main text-2xl font-bold">
        ページが見つかりませんでした
      </h1>
      <Link
        href="/"
        className="text-fk-green font-bold underline underline-offset-4 hover:opacity-70 transition-opacity"
      >
        トップへ戻る
      </Link>
    </main>
  );
}
