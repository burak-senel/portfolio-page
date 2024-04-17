import React from "react";
import { useLanguage } from "../context/languageContext";

function Footer() {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <section className="flex flex-col footerSection">
      <h4 className="font-medium text-4xl leading-tight mb-12 w-6/12">
        {texts.footer}
      </h4>
      <div className="flex justify-between">
        <div className="flex">
          <span>👉</span>{" "}
          <a
            className="text-[#AF0C48] underline"
            href="mailto:buurak.senel@gmail.com"
          >
            buurak.senel@gmail.com
          </a>
        </div>

        <div className="flex gap-4">
          <a>{texts.personalblog}</a>
          <a
            className="text-[#00AB6B]"
            href="https://github.com/burak-senel"
            target="_blank"
          >
            Github
          </a>
          <a
            className="text-[#0077B5]"
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
