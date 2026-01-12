import { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import spriteSistem from "../../assets/Images/sprite-sistem.svg";
import clsx from "clsx";
import ModalNotification from "../ModalNotification/ModalNotification";
import style from "./Form.module.css";

const audienceId = import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID;
const server = import.meta.env.VITE_MAILCHIMP_SERVER;
export default function Form({
  customClassSelect,
  customClassInput,
  customClassButton,
  values,
  setValues,
  errors,
  setErrors,
}) {
  const [notificationIsOpen, setNotificationIsOpen] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [modalEmail, setModalEmail] = useState("");
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const validateEmail = email => {
    if (!email) return "Email обовʼязковий";

    if (!emailRegex.test(email)) {
      return "Некоректний email";
    }

    return "";
  };

  const getData = async event => {
    event.preventDefault();

    const emailError = validateEmail(values.email);
    if (emailError) {
      setErrors({ email: emailError });
      return;
    }

    setErrors({});

    const formData = new FormData();
    formData.append("EMAIL", values.email);
    formData.append("ROLE", values.role);

    setModalEmail(values.email);
    try {
      await fetch(
        `https://pethelsi.${server}.list-manage.com/subscribe/post?u=86017a9d314f1ebc8482afde3&id=${audienceId}`,
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      setNotificationIsOpen(true);
    } catch (error) {
      console.error(error);
    }

    setValues({ role: "owner", email: "" });
    setErrors({});
  };

  function closeModalNotification() {
    setNotificationIsOpen(false);
  }

  const toggleOptions = () => setOpenOptions(prev => !prev);

  return (
    <>
      <form onSubmit={getData} className={clsx(style.formLandingForm)}>
        <div className={style.selectContainer} onClick={toggleOptions}>
          <div
            name="ROLE"
            id="mce-ROLE"
            className={clsx(
              style.formLandingSelect,
              style[customClassSelect],
              openOptions && style.focused
            )}>
            Я - {values.role === "owner" ? "власник тварини" : "ветеринар"}
          </div>
          {openOptions && (
            <ul className={style.optionValues}>
              <li
                value="owner"
                onClick={e => {
                  e.stopPropagation();
                  setValues({ ...values, role: "owner" });
                  setOpenOptions(false);
                }}
                className={style.option}>
                Я - власник тварини
              </li>
              <li
                value="doctor"
                onClick={e => {
                  e.stopPropagation();
                  setValues({ ...values, role: "doctor" });
                  setOpenOptions(false);
                }}
                className={style.option}>
                Я - ветеринар
              </li>
            </ul>
          )}
          <Icon
            sprite={spriteSistem}
            id="icon-user"
            width="24px"
            height="24px"
            className={style.icon}
          />
          {openOptions ? (
            <Icon
              sprite={spriteSistem}
              id="icon-arrow_down"
              width="24px"
              height="24px"
              className={style.iconArrow}
            />
          ) : (
            <Icon
              sprite={spriteSistem}
              id="icon-arrow_up"
              width="24px"
              height="24px"
              className={style.iconArrow}
            />
          )}
        </div>

        <div className={style.inputContainer}>
          <input
            type="text"
            inputMode="email"
            autoComplete="email"
            name="EMAIL"
            id="mce-EMAIL"
            className={clsx(style.formLandingInput, style[customClassInput])}
            placeholder="Ваш E-mail"
            value={values.email}
            onChange={ev => {
              const value = ev.target.value;

              if (/[^\p{ASCII}]/u.test(value)) {
                return;
              }
              setValues({ ...values, email: value });

              if (errors.email) {
                setErrors({ ...errors, email: "" });
              }
            }}
            required
          />
          <Icon
            sprite={spriteSistem}
            id="icon-message"
            width="24px"
            height="24px"
            className={style.icon}
          />
          {errors.email && (
            <p className={style.error}>Введіть коректний email</p>
          )}
        </div>

        <button
          type="submit"
          name="subscribe"
          id="mc-embedded-subscribe"
          className={clsx(style.button, style[customClassButton])}>
          Повідомити про запуск
        </button>
      </form>

      <ModalNotification
        notificationIsOpen={notificationIsOpen}
        closeModalNotification={closeModalNotification}
        email={modalEmail}
      />
    </>
  );
}

Form.propTypes = {
  values: PropTypes.shape({
    role: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setValues: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  setErrors: PropTypes.func.isRequired,
};
