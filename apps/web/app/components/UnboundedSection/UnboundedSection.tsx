export function UnboundedSection() {
  return (
    <div>
      <div
        id="message"
        className="grid grid-cols-1 gap-5 items-center font-sans min-[900px]:grid-cols-[1fr_auto_1fr] min-[900px]:gap-[26px]"
        data-unbounded
      >
        <div className="grid gap-3">
          <h2 className="m-0 text-fk-text-olive text-[clamp(48px,7.2vw,58px)] leading-[0.95] font-extrabold tracking-[-0.02em] font-montserrat">
            <span className="font-montserrat">Frontend, Unbounded.</span>
          </h2>
          <p className="m-0 text-fk-text-main text-[22px] leading-[1.4] ">
            フロントエンドは、みんなの話やで。
          </p>
        </div>

        <div
          className="w-2 h-20 mx-auto bg-fk-yellow rounded-full rotate-[42deg] min-[900px]:mx-0"
          aria-hidden="true"
        />

        <div className="h-full grid gap-auto justify-end">
          <p className="m-0 text-fk-text-dark text-lg leading-[1.45] font-bold">
            UIを描く人。体験を設計する人。
          </p>
          <p className="m-0 text-fk-text-dark text-lg leading-[1.45] font-bold">
            コードを書く人。プロダクトを問う人。
          </p>
          <p className="m-0 text-fk-text-dark text-lg leading-[1.45] font-bold">
            画面の向こうに立つすべての人へ、関西から。
          </p>
        </div>
      </div>
      <div className="flex w-full flex-row items-end justify-end">
        <p className="mt-2 mb-0 text-fk-text-light text-xs leading-[1.5] text-right">
          フロントエンドカンファレンス関西2026
          <br />
          実行委員長 いずりょー
        </p>
      </div>
    </div>
  );
}
