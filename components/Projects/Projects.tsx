import type { ReactNode } from "react";

const cardShadow = "[box-shadow:#0B12200F_0px_0px_0px_1px_inset,#0B122059_0px_30px_60px_-24px]";
const controlShadow = "[box-shadow:#0B12200F_0px_0px_0px_1px_inset,#0B12204D_0px_20px_40px_-20px]";

function BrowserArt() {
  return (
    <div className={`absolute top-[70px] right-[-23px] left-[40px] flex h-[320px] flex-col overflow-clip rounded-tl-[16px] bg-white ${cardShadow}`}>
      <div className="flex h-[32px] shrink-0 items-center gap-[6px] bg-[#F7F9FB] px-[14px] [box-shadow:#0B12200F_0px_-1px_0px_inset]">
        <div className="size-[8px] rounded-full bg-[#D9DEE5]" />
        <div className="size-[8px] rounded-full bg-[#D9DEE5]" />
        <div className="size-[8px] rounded-full bg-[#D9DEE5]" />
      </div>
      <div className="flex grow gap-[12px] p-[16px]">
        <div className="w-[72px] shrink-0 rounded-[10px] bg-[#F1F4F7]" />
        <div className="flex grow flex-col gap-[10px]">
          <div className="h-[70px] shrink-0 rounded-[10px] bg-[#EEF1F5]" />
          <div className="grow rounded-[10px] bg-[#F1F4F7]" />
        </div>
      </div>
    </div>
  );
}

function PhoneArt() {
  return (
    <div className={`absolute top-[76px] left-1/2 flex h-[320px] w-[220px] -translate-x-1/2 flex-col gap-[10px] rounded-t-[34px] bg-white px-[14px] py-[18px] ${cardShadow}`}>
      <div className="h-[28px] w-[96px] rounded-[14px] rounded-bl-[4px] bg-[#EEF1F5]" />
      <div className="h-[44px] w-[150px] self-end rounded-[14px] rounded-br-[4px] bg-[#0B1220]" />
      <div className="h-[28px] w-[120px] rounded-[14px] rounded-bl-[4px] bg-[#EEF1F5]" />
      <div className="h-[60px] w-[160px] self-end rounded-[14px] rounded-br-[4px] bg-[#0B1220]" />
    </div>
  );
}

function ControlsArt() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-[18px]">
      <div className="flex h-[44px] w-[84px] items-center justify-end rounded-full bg-[#0B1220] p-[4px] [box-shadow:#0B122066_0px_20px_40px_-20px]">
        <div className="size-[36px] rounded-full bg-white [box-shadow:#0B122040_0px_2px_6px]" />
      </div>
      <div className={`relative flex h-[44px] w-[200px] items-center rounded-full bg-white px-[14px] ${controlShadow}`}>
        <div className="h-[4px] w-[172px] rounded-full bg-[#EEF1F5]" />
        <div className="absolute top-[20px] left-[14px] h-[4px] w-[104px] rounded-full bg-[#0B1220]" />
        <div className="absolute top-[12px] left-[108px] size-[20px] rounded-full bg-[#0B1220] [box-shadow:#FFFFFF_0px_0px_0px_4px]" />
      </div>
      <div className={`flex items-center gap-[4px] rounded-full bg-white p-[4px] ${controlShadow}`}>
        <div className="h-[32px] w-[52px] rounded-full bg-[#EEF1F5]" />
        <div className="h-[32px] w-[52px] rounded-full bg-[#0B1220]" />
        <div className="h-[32px] w-[52px] rounded-full bg-[#EEF1F5]" />
      </div>
    </div>
  );
}

const projects: {
  title: string;
  description: string;
  meta: string;
  background: string;
  art: ReactNode;
}[] = [
  {
    title: "Anything",
    description:
      "An app builder for people who don’t code. Editor redesign and a first-app onboarding.",
    meta: "Product design · 2025—26",
    background:
      "bg-[linear-gradient(180deg,oklab(94.4%_-0.002_-0.008)_0%,oklab(91.7%_-0.003_-0.011)_100%)]",
    art: <BrowserArt />,
  },
  {
    title: "Skydive",
    description:
      "Agents that live in your inbox and text you back. Onboarding and messaging surfaces.",
    meta: "Design eng · 2026",
    background:
      "bg-[linear-gradient(180deg,oklab(93.6%_-0.002_-0.009)_0%,oklab(91.1%_-0.003_-0.012)_100%)]",
    art: <PhoneArt />,
  },
  {
    title: "Craft",
    description:
      "A shelf of small interaction experiments. Toggles, sliders, and transitions that feel right.",
    meta: "Experiments · Ongoing",
    background:
      "bg-[linear-gradient(180deg,oklab(94.4%_-0.002_-0.008)_0%,oklab(91.7%_-0.003_-0.011)_100%)]",
    art: <ControlsArt />,
  },
];

export default function Projects() {
  return (
    <section className="flex min-h-screen flex-col justify-center bg-[#F7F9FB] px-[24px] py-[88px] md:px-[96px] font-(family-name:--font-inter)">
      {/* Same column as the hero; the right padding keeps the grid clear of the fixed pill nav. */}
      <div className="mx-auto flex w-full max-w-[1248px] flex-col gap-[40px] lg:pr-[220px]">
        <h2 className="font-semibold text-[#0B1220] text-[40px]/[44px] tracking-[-0.035em] md:text-[56px]/[60px]">
          Projects
        </h2>

        <ul className="grid w-full max-w-[1000px] gap-x-[24px] gap-y-[40px] md:grid-cols-2 xl:grid-cols-3">
          {projects.map(({ title, description, meta, background, art }) => (
            <li key={title} className="flex flex-col gap-[18px]">
              <div
                aria-hidden="true"
                className={`relative h-[380px] overflow-clip rounded-[24px] [box-shadow:#0B12200D_0px_0px_0px_1px_inset] ${background}`}
              >
                {art}
              </div>
              <div className="flex flex-col gap-[6px]">
                <h3 className="font-semibold text-[#0B1220] text-[20px]/[26px] tracking-[-0.02em]">
                  {title}
                </h3>
                <p className="text-[#6B7280] text-[15px]/[22px] tracking-[-0.005em]">
                  {description}
                </p>
                <p className="pt-[6px] font-semibold text-[#6B7280] text-[12px]/[16px] tracking-[0.1em] uppercase">
                  {meta}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/breteo"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-fit items-center gap-[10px] font-medium text-[#0B1220] text-[16px]/[22px] tracking-[-0.01em]"
        >
          All projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 transition-transform duration-200 group-hover:translate-x-[3px]"
            aria-hidden="true"
          >
            <path d="M3.5 9H14.5M10 4.5L14.5 9L10 13.5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
