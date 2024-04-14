import { useLanguage } from "../context/languageContext";
import Header from "../assets/header.png";
function Hero() {
  const { getTexts } = useLanguage();
  const texts = getTexts();
  return (
    <section className="heroSection">
      <div className="heroNameContainer">
        <p className="heroName"></p>
        <span>Burak Şenel</span>
      </div>
      <div className="heroContainer">
        <div className="heroTexts">
          <h3>{texts.hero1}</h3>
          <p className=" text-[#6B7280] font-light">{texts.hero2}</p>
          <div className="heroButtons">
            <button className=" font-light  text-white bg-[#3730A3] rounded-md px-6 py-2.5 mr-3">
              {texts.hireMe}
            </button>
            <button className=" text-[#3730A3] border-[#3730A3] border rounded-md px-5 py-2 mr-3">
              <i className="fa fa-github"></i> Github
            </button>
            <button className="text-[#3730A3] border-[#3730A3] border rounded-md px-4 py-2 mr-3">
              <i className="fa fa-linkedin"></i> Linkedin
            </button>
          </div>
        </div>
        <img className="heroImg" src={Header}></img>
      </div>
    </section>
  );
}

export default Hero;
