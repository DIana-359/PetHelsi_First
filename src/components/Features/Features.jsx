import Icon from "../Icon/Icon";
import spriteSistem from "../../assets/Images/sprite-sistem.svg";
import style from "./Features.module.css";

export default function Features({ isDesktop }) {
  return (
    <ul id="features" className={style.featuresContainer}>
      <li className={style.featuresListItem}>
        <Icon
          sprite={spriteSistem}
          id="icon-Landings-illustrations"
          width="22px"
          height="22px"
          className={style.icon}
        />
        <h3 className={style.featuresListItemTitle}>завжди поруч</h3>
        <p className={style.featuresText}>
          Ветеринари PetHelsi на звʼязку 24/7. Отримайте кваліфіковану
          консультацію в будь-якому місці у будь-який час
        </p>
      </li>
      <li className={style.featuresListItem}>
        <Icon
          sprite={spriteSistem}
          id="icon-Landings-illustrations2"
          width="22px"
          height="22px"
          className={style.icon}
        />
        <h3 className={style.featuresListItemTitle}>швидкий запис</h3>
        <p className={style.featuresText}>
          {isDesktop
            ? "Запишіться до обраного ветеринара швидко та легко всього за кілька кліків, без жодних черг і зайвих очікувань."
            : "Лише декілька кліків, і ви записані на прийом до обраного ветеринара, без зайвих очікувань."}
        </p>
      </li>
      <li className={style.featuresListItem}>
        <Icon
          sprite={spriteSistem}
          id="icon-Landings-illustrations3"
          width="64px"
          height="52px"
          className={style.icon}
        />
        <h3 className={style.featuresListItemTitle}>Досвідчені ветеринари</h3>
        <p className={style.featuresText}>
          Наша база складається із кваліфікованих ветеринарів. Оберіть того, хто
          найбільше відповідає вашим вимогам!
        </p>
      </li>
    </ul>
  );
}
