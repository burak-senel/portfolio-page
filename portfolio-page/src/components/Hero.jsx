import { useLanguage } from "../context/languageContext";
import Header from "../assets/header.png";
function Hero() {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <section className="heroSection dark:bg-[#262229]">
      <div className="heroNameContainer">
        <p className="heroName dark:border-[#B7AAFF]"></p>
        <span className="dark:text-[#B7AAFF]">Burak Şenel</span>
      </div>
      <div className="lg:flex lg:flex-row sm:flex-col">
        <div className="heroTexts ">
          <h1 className="dark:text-[#AEBCCF]">{texts.hero1}</h1>
          <p className=" text-[#6B7280] font-light dark:text-white">
            {texts.hero2}
          </p>
          <div className="heroButtons">
            <a href="mailto:buurak.senel@gmail.com">
              <button className=" font-light  text-white bg-[#3730A3] dark:bg-[#E1E1FF] dark:text-black rounded-md px-6 py-2 mr-3 transition duration-300 ease-in-out hover:bg-white  hover:text-[#3730A3] dark:hover:bg-white">
                {texts.hireMe}
              </button>
            </a>
            <a href="https://github.com/burak-senel" target="_blank">
              <button className="dark:text-[#E1E1FF] dark:bg-[#383838] dark:border-[#E1E1FF] text-[#3730A3] border-[#3730A3] border rounded-md px-5 py-2 mr-3	transition duration-300 ease-in-out hover:bg-[#3730A3] hover:text-white dark:hover:bg-white dark:hover:text-[#3730A3]">
                <i className="fa fa-github"></i> Github
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/burak-%C5%9Fenel/"
              target="_blank"
            >
              <button className="dark:text-[#E1E1FF] dark:bg-[#383838] dark:border-[#E1E1FF] text-[#3730A3] border-[#3730A3] border rounded-md px-4 py-2 mr-3 transition duration-300 ease-in-out hover:bg-[#3730A3] hover:text-white dark:hover:bg-white dark:hover:text-[#3730A3]">
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
