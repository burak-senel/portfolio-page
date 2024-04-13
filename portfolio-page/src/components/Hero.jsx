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
          <p>{texts.hero2}</p>
          <button className="heroHireMe">{texts.hireMe}</button>
          <button className="heroGitHub">
            <i className="fa fa-github"></i>Github
          </button>
          <button className="heroLinkedIn">
            <i className="fa fa-linkedin"></i>Linkedin
          </button>
        </div>
        <img className="heroImg" src={Header}></img>
      </div>
    </section>
  );
}

export default Hero;
