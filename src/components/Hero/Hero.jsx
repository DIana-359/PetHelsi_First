import decor from "../../assets/Images/vector.png";
import Form from "../../components/Form/Form";
import Icon from "../Icon/Icon";
import spriteSistem from "../../assets/Images/sprite-sistem.svg";
import dog from "../../assets/Images/dog.gif"
import style from "./Hero.module.css";

export default function Hero({
  isDesktop,
  values,
  setValues,
  errors,
  setErrors,
}) {
  return (
    <div className={style.heroWrapper}>
      <p className={style.notification}>Сервіс ще у розробці</p>
      <div className={style.heroContainer}>
        <div>
          <div className={style.heroBox}>
            <h1 className={style.heroTitle}>
              ВЕТЕРИНАРНА <span className={style.time}>24/7</span> ОНЛАЙН
              КОНСУЛЬТАЦІЯ
            </h1>
            <p className={style.heroText}>
              {isDesktop
                ? "Приєднуйтесь до команди ветеринарів або станьте одним із перших клієнтів нашого сервісу, заповнивши форму нижче"
                : "Новий рівень турботи про здоров'я вашого улюбленця. Де б ви не були, ми завжди поруч!"}
            </p>
          </div>

          <div className={style.heroForm}>
            <Form
              customClassSelect="wideFieldsSelect"
              customClassInput="wideFieldsInput"
              customClassButton="wideFieldsButton"
              values={values}
              setValues={setValues}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <div className={style.imageContainer}>
          <img
            src={dog}
            alt="Logo"
            className={style.heroDog}
          />
          <img src={decor} alt="" className={style.heroDecor} />
          <p className={style.heroDesktopNotification}>Сервіс ще у розробці</p>
          <Icon
            sprite={spriteSistem}
            id={"icon-Thoughtsx"}
            width="20px"
            height="32px"
            className={style.iconHeroDesktopNotification}
          />
        </div>
      </div>
    </div>
  );
}
