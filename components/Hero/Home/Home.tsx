export default function Home() {
  return (
    <section className="flex min-h-screen items-center bg-[#FAFAFA] px-[24px] md:px-[96px] font-(family-name:--font-inter)">
      <div className="mx-auto flex w-full max-w-[1248px] flex-col items-start gap-[28px]">
        <h1 className="flex flex-col tracking-[-0.035em] text-[44px]/[48px] md:text-[64px]/[68px] lg:text-[84px]/[88px]">
          <span className="font-semibold text-[#0B1220]">Hi, I’m Brendan.</span>
          <span className="font-light text-[#6B7280]">Frontend engineer.</span>
        </h1>
        <p className="max-w-[520px] tracking-[-0.01em] text-[#3F4652] text-[18px]/[28px] md:text-[22px]/[32px]">
          Come get to know me and check out my work below. Product, interfaces,
          and the code that ships them.
        </p>
      </div>
    </section>
  );
}
