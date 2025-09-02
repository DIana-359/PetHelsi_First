import Form from "../Form/Form";
import Icon from "../Icon/Icon";
import spriteSistem from "../../assets/Images/sprite-sistem.svg";
import style from "./FormLanding.module.css";

export default function FormLanding({ values, setValues, errors, setErrors }) {
  return (
    <div className={style.formLandingContainer}>
      <h2 className={style.formLandingTitle}>
        Залиште свій <span className={style.formLandingTitleEmail}>E-mail</span>
        <br className={style.transfer}></br> і ми повідомимо вас про запуск{" "}
      </h2>
      <Form
        values={values}
        setValues={setValues}
        errors={errors}
        setErrors={setErrors}
      />
      <Icon
        sprite={spriteSistem}
        id={"icon-Arrow"}
        width="36px"
        height="65px"
        className={style.iconArrow}
      />
    </div>
  );
}
