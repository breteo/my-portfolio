"use client";

import type { FormEvent } from "react";

const email = "bteosf@gmail.com";

const fieldClass =
  "w-full rounded-[14px] bg-white px-[18px] text-[#0B1220] text-[15px] tracking-[-0.005em] outline-none transition-shadow placeholder:text-[#9AA0AA] [box-shadow:#0B122014_0px_0px_0px_1px_inset,#0B12200A_0px_1px_2px] focus:[box-shadow:#0B1220_0px_0px_0px_1.5px_inset,#0B12200A_0px_1px_2px]";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/breteo/",
    size: 18,
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
  {
    label: "GitHub",
    href: "https://github.com/breteo",
    size: 20,
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
];

// There's no mail backend yet, so sending hands the message to the
// visitor's mail app, pre-addressed and pre-filled.
function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("name"));
  const subject = `Portfolio message from ${name}`;
  const body = `${data.get("message")}\n\n— ${name} (${data.get("email")})`;
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  return (
    <section className="flex min-h-screen flex-col bg-[#F7F9FB] px-[24px] pt-[96px] pb-[64px] md:px-[96px] font-(family-name:--font-inter)">
      <div className="mx-auto flex w-full max-w-[1248px] grow flex-col">
        <h2 className="flex flex-col tracking-[-0.035em] text-[40px]/[44px] md:text-[56px]/[60px]">
          <span className="font-semibold text-[#0B1220]">Let’s make something</span>
          <span className="font-light text-[#6B7280]">worth shipping.</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[560px] flex-col gap-[12px] pt-[56px]"
        >
          <div className="grid gap-[12px] sm:grid-cols-2">
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Your name"
              aria-label="Your name"
              className={`h-[52px] ${fieldClass}`}
            />
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="Email address"
              aria-label="Email address"
              className={`h-[52px] ${fieldClass}`}
            />
          </div>
          <textarea
            name="message"
            required
            placeholder="What are you working on?"
            aria-label="What are you working on?"
            className={`h-[140px] resize-none py-[16px] leading-[22px] ${fieldClass}`}
          />
          <div className="pt-[12px]">
            <button
              type="submit"
              className="group flex h-[48px] items-center gap-[10px] rounded-full bg-[#0B1220] pr-[22px] pl-[24px] font-medium text-white text-[15px]/[20px] tracking-[-0.01em] transition-transform active:scale-[0.98] [box-shadow:#FFFFFF24_0px_1px_0px_inset,#0B122073_0px_10px_24px_-10px]"
            >
              Send message
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 transition-transform duration-200 group-hover:translate-x-[3px]"
                aria-hidden="true"
              >
                <path d="M3.5 8H12.5M8.5 4L12.5 8L8.5 12" />
              </svg>
            </button>
          </div>
        </form>

        <footer className="mt-auto flex flex-col gap-[28px] pt-[64px]">
          <ul className="flex items-center gap-[12px]">
            {socials.map(({ label, href, size, path }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-[48px] items-center justify-center rounded-full bg-[#FFFFFF99] transition-colors hover:bg-white [box-shadow:#FFFFFF_0px_0px_0px_1px_inset,#0B122012_0px_0px_0px_1px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill="#0B1220"
                    aria-hidden="true"
                  >
                    <path d={path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[#6B7280] text-[13px]/[18px]">© 2026 Brendan Teo</p>
        </footer>
      </div>
    </section>
  );
}
