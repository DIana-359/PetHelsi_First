import fish from "../../assets/Images/fish.gif";
import decor from "../../assets/Images/Decoration.png";
import spriteSistem from "../../assets/Images/sprite-sistem.svg";
import Icon from "../Icon/Icon";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footerWrapper}>
      <div className={style.footerContainer}>
        <div className={style.footerLogo}>
          <Icon
            sprite={spriteSistem}
            id="icon-logo2"
            width="148px"
            height="25px"
            className={style.icon}
          />
          <p className={style.textForLogo}>З турботою про ваших улюбленців</p>
        </div>

        <ul className={style.footerNavList}>
          <li>
            <a href="#aboutUs" className={style.footerNavListLink}>
              Про нас
            </a>
          </li>
          <li>
            <a href="#features" className={style.footerNavListLink}>
              Власникам тварин
            </a>
          </li>
          <li>
            <a href="#benefits" className={style.footerNavListLink}>
              Ветеринарам
            </a>
          </li>
        </ul>

        <div className={style.footerImgWrapper}>
          <img src={fish} alt="Fish GIF" className={style.imgFish} />
          <img src={decor} alt="decor" className={style.footerDecor} />
        </div>
      </div>
      <div className={style.footerCopyright}>
        © PetHelsi. <br className={style.footerTextBreak} />
        Всі права захищені. 2025
      </div>
    </footer>
  );
}
