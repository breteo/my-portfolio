"use client";

import Icon from "@mdi/react";
import {
  mdiLinkedin,
  mdiGithub,
  mdiEmail,
  mdiFileAccount,
  mdiSend,
} from "@mdi/js";

const handleGmail = () => {
  window.location.href =
    "https://mail.google.com/mail/?view=cm&fs=1&to=bteosf@gmail.com";
};

export default function Contact() {
  return (
    <div className="min-h-full flex flex-col mx-auto gap-[20px] bg-gray-200 sm:gap-[44px]">
      <h1 className="text-center font-bold text-[30px]/[36px] p-[44px]">Lets Chat!</h1>
      <div className="container block lg:flex flex-row justify-between gap-[32px] mx-auto text-center lg:text-left text-[16px]/[24px] sm:text-[20px]/[28px] md:text-[16px]/[24px] xl:text-[20px]/[28px] 2xl:text-[24px]/[32px]">
        <div id="left-half" className="flex flex-col gap-[32px] xl:gap-[44px] flex-1">
          <h2 className=" font-bold">Connect with me</h2>
          <p>
            {`Whether you have a project in mind, want to discuss collaboration
          opportunities, or simply have a question about web development, I'm
          here to help.`}
          </p>
          <p>
            {`Feel free to reach out and let's
          start building something incredible together.`}
          </p>
          <p>
            I am open to connect and talk about any opportunities and ideas.
          </p>

          <p>Feedback and any comments is appreciated!</p>
          <p>
            Mail me at <span className="font-bold">bteosf@gmail.com</span>
          </p>
        </div>
        <div id="right-half" className="flex flex-col flex-1 py-[32px] lg:py-[0px]">
          <div className="flex flex-col w-5/6 rounded-[12px] bg-white mx-auto p-[32px] gap-[32px] drop-shadow-xl">
            <h2 className="font-bold text-center"> Send Me A Message 🚀 </h2>
            <form>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-[16px] xl:py-[32px] lg-height:py-[32px] md-height:py-[20px]">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="w-full p-[4px] rounded-[6px] bg-slate-200"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-[16px] xl:py-[32px] lg-height:py-[32px] md-height:py-[20px]">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full p-[4px] rounded-[6px] bg-slate-200"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-[16px] xl:py-[32px] lg-height:py-[32px] md-height:py-[20px]">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        className="resize-none w-full h-40 xl:h-60  md-height:h-40 lg-height:h-60 p-[4px] rounded-[6px] bg-slate-200"
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        type="submit"
                        className="flex flex-row justify-center items-center w-full py-[8px] px-[16px] rounded-[6px] bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                      >
                        Send Message{" "}
                        <Icon className="pl-[4px]" path={mdiSend} size={0.8} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex-1 px-[20px] sm:px-0">
        <hr className="border-black/20" />
        <div className="grid grid-cols-4 items-start gap-[8px] py-[24px] text-center text-[11px]/[16px] sm:flex sm:flex-row sm:justify-evenly sm:py-[28px] sm:text-[16px]/[24px]">
          <a
            href="https://www.linkedin.com/in/breteo/"
            target="_blank"
            className="flex flex-col items-center gap-[6px] rounded-[10px] py-[8px] transition-colors hover:bg-black/5"
          >
            <Icon path={mdiLinkedin} size={1.35} />
            <p>Linkedin</p>
          </a>
          <a
            href="https://github.com/breteo"
            target="_blank"
            className="flex flex-col items-center gap-[6px] rounded-[10px] py-[8px] transition-colors hover:bg-black/5"
          >
            <Icon path={mdiGithub} size={1.35} />
            <p>Github</p>
          </a>
          <a
            href="mailto:bteosf@gmail.com"
            onClick={handleGmail}
            className="flex flex-col items-center gap-[6px] rounded-[10px] py-[8px] transition-colors hover:bg-black/5"
          >
            <Icon path={mdiEmail} size={1.35} />
            <p>Email</p>
          </a>
          <a
            href="/Brendan_Teo.pdf"
            download="Brendan_Teo.pdf"
            className="flex flex-col items-center gap-[6px] rounded-[10px] py-[8px] transition-colors hover:bg-black/5"
          >
            <Icon path={mdiFileAccount} size={1.35} />
            <p>Resume</p>
          </a>
        </div>
      </div>
    </div>
  );
}
