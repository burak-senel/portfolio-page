import React from "react";
import { useLanguage } from "../context/languageContext";

function Footer() {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <section
      id="footer"
      className="flex flex-col bg-[#F9F9F9] p-[15vh] dark:bg-[#151515]"
    >
      <h4 className="font-medium text-4xl leading-tight mb-12 w-8/12 dark:text-[#AEBCCF] ">
        {texts.footer}
      </h4>
      <div className="flex justify-between lg:flex-row sm:flex-col sm:gap-8">
        <div className="flex">
          <span>👉</span>{" "}
          <a
            className="text-[#AF0C48] underline dark:text-[#BAB2E7]"
            href="mailto:buurak.senel@gmail.com"
          >
            buurak.senel@gmail.com
          </a>
        </div>

        <div className="flex gap-4">
          <a
            className="text-[#00AB6B] dark:text-[#17D18B]"
            href="https://github.com/burak-senel"
            target="_blank"
          >
            Github
          </a>
          <a
            className="text-[#0077B5] dark:text-[#0BA6F6]"
            href="https://www.linkedin.com/in/burak-%C5%9Fenel/"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
