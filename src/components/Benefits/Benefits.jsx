import spriteSistem from "../../assets/Images/sprite-sistem.svg";
import Icon from "../Icon/Icon";
import style from "./Benefits.module.css";

const benefitsData = [
  { id: "icon-convenient-platform", text: "Зручна платформа для роботи" },
  { id: "icon-customer-base", text: "Розширення клієнтської бази" },
  { id: "icon-remote-work", text: "Робота з будь-якої точки світу" },
  { id: "icon-additional-income", text: "Додатковий дохід" },
  { id: "icon-advanced-training", text: "Підвищення експертності" },
  { id: "icon-new-experience", text: "Здобуття нового досвіду" },
];

export default function Benefits() {
  return (
    <div id="benefits" className={style.benefitsContainer}>
      <h3 className={style.benefitsTitle}>
        Вигоди
        <br className={style.transfer} /> для ветеринарів:
      </h3>

      <ul className={style.benefitsList}>
        {benefitsData.map(({ id, text }) => (
          <li key={id} className={style.benefitsListItem}>
            <Icon
              sprite={spriteSistem}
              id={id}
              width="32px"
              height="32px"
              className={style.icon}
            />
            <p className={style.benefitsText}>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
