import { useLanguage } from "../context/languageContext";
import Header from "../assets/header.png";
function Hero() {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <section className="heroSection dark:bg-[#262229]">
      <div className="heroNameContainer">
        <p className="heroName"></p>
        <span>Burak Şenel</span>
      </div>
      <div className="heroContainer">
        <div className="heroTexts">
          <h1>{texts.hero1}</h1>
          <p className=" text-[#6B7280] font-light">{texts.hero2}</p>
          <div className="heroButtons">
            <a href="mailto:buurak.senel@gmail.com">
              <button className=" font-light  text-white bg-[#3730A3] dark:bg-[#E1E1FF] dark:text-black rounded-md px-6 py-2 mr-3 transition duration-300 ease-in-out hover:bg-white  hover:text-[#3730A3]">
                {texts.hireMe}
              </button>
            </a>
            <a href="https://github.com/burak-senel" target="_blank">
              <button className="dark:text-[#E1E1FF] dark:bg-[#383838] dark:border-[#E1E1FF] text-[#3730A3] border-[#3730A3] border rounded-md px-5 py-2 mr-3	transition duration-300 ease-in-out hover:bg-[#3730A3] hover:text-white">
                <i className="fa fa-github"></i> Github
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/burak-%C5%9Fenel/"
              target="_blank"
            >
              <button className="dark:text-[#E1E1FF] dark:bg-[#383838] dark:border-[#E1E1FF] text-[#3730A3] border-[#3730A3] border rounded-md px-4 py-2 mr-3 transition duration-300 ease-in-out hover:bg-[#3730A3] hover:text-white">
                <i className="fa fa-linkedin"></i> Linkedin
              </button>
            </a>
          </div>
        </div>
        <img className="heroImg" src={Header}></img>
      </div>
    </section>
  );
}

export default Hero;
