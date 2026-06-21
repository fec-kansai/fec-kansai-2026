import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

const ExternalLinkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M17.4937 0L11.7562 0.00597656C11.622 0.00597656 11.4932 0.0593135 11.3983 0.154254C11.3033 0.249194 11.25 0.377961 11.25 0.512227V1.68328C11.25 1.75063 11.2634 1.8173 11.2895 1.8794C11.3156 1.94149 11.3538 1.99776 11.4019 2.04491C11.45 2.09205 11.507 2.12913 11.5696 2.15396C11.6322 2.17879 11.6991 2.19089 11.7664 2.18953L14.355 2.09391L14.4274 2.16633L4.62375 11.9704C4.58442 12.0095 4.55321 12.0561 4.53192 12.1074C4.51063 12.1587 4.49967 12.2137 4.49967 12.2692C4.49967 12.3247 4.51063 12.3797 4.53192 12.431C4.55321 12.4822 4.58442 12.5288 4.62375 12.568L5.43234 13.3766C5.47154 13.4159 5.51811 13.4471 5.56939 13.4684C5.62067 13.4897 5.67565 13.5007 5.73117 13.5007C5.7867 13.5007 5.84168 13.4897 5.89295 13.4684C5.94423 13.4471 5.99081 13.4159 6.03 13.3766L15.8337 3.57258L15.9061 3.645L15.8105 6.23355C15.8091 6.30089 15.8212 6.36782 15.846 6.43042C15.8709 6.49302 15.9079 6.55004 15.9551 6.59814C16.0022 6.64623 16.0585 6.68444 16.1206 6.71051C16.1827 6.73659 16.2494 6.75001 16.3167 6.75H17.4878C17.622 6.75 17.7508 6.69666 17.8457 6.60172C17.9407 6.50678 17.994 6.37802 17.994 6.24375L18 0.50625C18 0.371984 17.9467 0.243217 17.8517 0.148277C17.7568 0.0533369 17.628 0 17.4937 0ZM15.1875 10.125H14.625C14.4758 10.125 14.3327 10.1843 14.2273 10.2898C14.1218 10.3952 14.0625 10.5383 14.0625 10.6875V16.1016C14.0625 16.1575 14.0403 16.2112 14.0007 16.2507C13.9612 16.2903 13.9075 16.3125 13.8516 16.3125H1.89844C1.84249 16.3125 1.78884 16.2903 1.74928 16.2507C1.70972 16.2112 1.6875 16.1575 1.6875 16.1016V4.14844C1.6875 4.09249 1.70972 4.03884 1.74928 3.99928C1.78884 3.95972 1.84249 3.9375 1.89844 3.9375H7.3125C7.46168 3.9375 7.60476 3.87824 7.71025 3.77275C7.81574 3.66726 7.875 3.52418 7.875 3.375V2.8125C7.875 2.66332 7.81574 2.52024 7.71025 2.41475C7.60476 2.30926 7.46168 2.25 7.3125 2.25H1.6875C1.23995 2.25 0.810725 2.42779 0.494257 2.74426C0.17779 3.06072 0 3.48995 0 3.9375L0 16.3125C0 16.7601 0.17779 17.1893 0.494257 17.5057C0.810725 17.8222 1.23995 18 1.6875 18H14.0625C14.5101 18 14.9393 17.8222 15.2557 17.5057C15.5722 17.1893 15.75 16.7601 15.75 16.3125V10.6875C15.75 10.5383 15.6907 10.3952 15.5852 10.2898C15.4798 10.1843 15.3367 10.125 15.1875 10.125Z"
      fill="currentColor"
    />
  </svg>
);

const sponsorDocumentLink =
  "https://docs.google.com/document/d/1TwPVy5jlPmXEJyXU1zpz7HiA5dg26OnDSHHCo9Cikbk/edit?usp=sharing";
const sponsorApplicationFormLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSfDzw2ReylE3al4IAL7D_XjozZx8Cl8CEnR5Pgm4KRkatc6Zw/viewform?usp=header";

export function SponsorSection() {
  return (
    <div id="sponsor" className="relative font-sans">
      <header className="text-center">
        <h2 className="m-0 text-[24px] sm:text-[28px] leading-[1.1] text-fk-text-main font-extrabold">
          スポンサー募集
        </h2>
        <p className="mt-[6px] mb-0 text-fk-yellow text-[18px] font-bold tracking-[0.03em] font-montserrat max-[900px]:text-[15px]">
          sponsor
        </p>
      </header>

      <div className="mt-[38px]">
        <p className="m-0 text-fk-text-main text-[14px] sm:text-base leading-[1.65] sm:leading-[1.9] font-bold">
          フロントエンドカンファレンス関西では、共にイベントを盛り上げてくださるスポンサー企業様を募集しております。
        </p>
        <p className="m-0 text-fk-text-main text-[14px] sm:text-base leading-[1.65] sm:leading-[1.9] font-bold">
          協賛をご検討いただける皆さま向けに、イベントの概要やスポンサー特典、協賛プランなどをまとめた
          「スポンサー協賛資料」を公開しております。
        </p>
        <p className="mt-[26px] m-0 text-fk-text-main text-[14px] sm:text-base leading-[1.65] sm:leading-[1.9] font-bold">
          ぜひご一読の上、ご検討いただけますと幸いです。
        </p>
        <p className="m-0 text-fk-text-main text-[14px] sm:text-base leading-[1.65] sm:leading-[1.9] font-bold">
          皆さまと共に、関西のフロントエンドコミュニティをさらに活性化できることを楽しみにしております。
        </p>
      </div>

      <div className="mt-[44px] flex place-items-center justify-center flex-row gap-6 max-[900px]:flex-col">
        <Button asChild variant="fkOutline" size="fkPill">
          <Link
            href={sponsorDocumentLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="スポンサー協賛資料を開く"
          >
            スポンサー協賛資料をみる
            <ExternalLinkIcon />
          </Link>
        </Button>

        <Button asChild variant="fkSolid" size="fkPill">
          <Link
            href={sponsorApplicationFormLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="スポンサー協賛申し込みフォームを開く"
          >
            スポンサー協賛申し込みはこちら
            <ExternalLinkIcon />
          </Link>
        </Button>
      </div>

      {/* js.svg 装飾 */}
      <span
        className="before:content-[''] before:absolute before:bg-[url('/js.svg')] before:bg-contain before:bg-no-repeat before:right-[-110px] before:top-1/2 before:h-[108px] before:w-[110px] before:translate-x-[105px] before:-translate-y-1/2"
        aria-hidden="true"
      />
    </div>
  );
}
