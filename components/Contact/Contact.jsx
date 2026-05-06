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
    <div className="min-h-full flex flex-col mx-auto gap-11 bg-gray-200">
      <h1 className="text-center font-bold text-3xl p-11">Lets Chat!</h1>
      <div className="container block lg:flex flex-row justify-between gap-8 mx-auto text-center lg:text-left text-base sm:text-xl md:text-base xl:text-xl 2xl:text-2xl">
        <div id="left-half" className="flex flex-col gap-8 xl:gap-11 flex-1">
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
        <div id="right-half" className="flex flex-col flex-1 py-8 lg:py-0">
          <div className="flex flex-col w-5/6 rounded-xl bg-white mx-auto p-8 gap-8 drop-shadow-xl">
            <h2 className="font-bold text-center"> Send Me A Message 🚀 </h2>
            <form>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-4 xl:py-8 lg-height:py-8 md-height:py-5">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="w-full p-1 rounded-md bg-slate-200"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 xl:py-8 lg-height:py-8 md-height:py-5">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full p-1 rounded-md bg-slate-200"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 xl:py-8 lg-height:py-8 md-height:py-5">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Message"
                        className="resize-none w-full h-40 xl:h-60  md-height:h-40 lg-height:h-60 p-1 rounded-md bg-slate-200"
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        type="submit"
                        className="flex flex-row justify-center items-center w-full py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                      >
                        Send Message{" "}
                        <Icon className="pl-1" path={mdiSend} size={0.8} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex-1 ">
        <hr className="border-black pb-7" />
        <div className="flex flex-row justify-evenly items-center text-center p-5 text-xs sm:text-base">
          <a
            href="https://www.linkedin.com/in/breteo/"
            target="_blank"
            className="flex flex-col items-center"
          >
            <Icon path={mdiLinkedin} size={2} />
            <p>Linkedin</p>
          </a>
          <a
            href="https://github.com/breteo"
            target="_blank"
            className="flex flex-col items-center"
          >
            <Icon path={mdiGithub} size={2} />
            <p>Github</p>
          </a>
          <a
            href="mailto:bteosf@gmail.com"
            onClick={handleGmail}
            className="flex flex-col items-center"
          >
            <Icon path={mdiEmail} size={2} />
            <p>Email</p>
          </a>
          <a
            href="src\assets\Brendan_Teo (1).pdf"
            download="Brendan_Teo (1).pdf"
            className="flex flex-col items-center"
          >
            <Icon path={mdiFileAccount} size={2} />
            <p>Resume</p>
          </a>
        </div>
      </div>
    </div>
  );
}
