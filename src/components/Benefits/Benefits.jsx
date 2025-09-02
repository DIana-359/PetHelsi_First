import spriteSistem from "../../assets/Images/sprite-sistem.svg";
import Icon from "../Icon/Icon";
import style from "./Benefits.module.css";

export default function Benefits() {
  return (
    <div id="benefits" className={style.benefitsContainer}>
      <h3 className={style.benefitsTitle}>
        Вигоди<br className={style.transfer}></br> для ветеринарів:
      </h3>
      <ul className={style.benefitsList}>
        <li className={style.benefitsListItem}>
          <Icon
            sprite={spriteSistem}
            id={"icon-convenient-platform"}
            width="32px"
            height="32px"
            className={style.icon}
          />
          <p className={style.benefitsText}>Зручна платформа для роботи</p>
        </li>
        <li className={style.benefitsListItem}>
          <Icon
            sprite={spriteSistem}
            id={"icon-customer-base"}
            width="32px"
            height="32px"
            className={style.icon}
          />
          <p className={style.benefitsText}>Розширення клієнтської бази</p>
        </li>
        <li className={style.benefitsListItem}>
          <Icon
            sprite={spriteSistem}
            id={"icon-remote-work"}
            width="32px"
            height="32px"
            className={style.icon}
          />
          <p className={style.benefitsText}>Робота з будь-якої точки світу</p>
        </li>
        <li className={style.benefitsListItem}>
          <Icon
            sprite={spriteSistem}
            id={"icon-additional-income"}
            width="32px"
            height="32px"
            className={style.icon}
          />
          <p className={style.benefitsText}>Додатковий дохід</p>
        </li>
        <li className={style.benefitsListItem}>
          <Icon
            sprite={spriteSistem}
            id={"icon-advanced-training"}
            width="32px"
            height="32px"
            className={style.icon}
          />
          <p className={style.benefitsText}>Підвищення експертності</p>
        </li>
        <li className={style.benefitsListItem}>
          <Icon
            sprite={spriteSistem}
            id={"icon-new-experience"}
            width="32px"
            height="32px"
            className={style.icon}
          />
          <p className={style.benefitsText}>Здобуття нового досвіду</p>
        </li>
      </ul>
    </div>
  );
}
