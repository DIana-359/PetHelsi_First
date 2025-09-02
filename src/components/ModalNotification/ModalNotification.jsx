import { useEffect, useState } from "react";
import Modal from "react-modal";
import Icon from "../Icon/Icon";
import spriteSistem from "../../assets/Images/sprite-sistem.svg";
import style from "./ModalNotification.module.css";

Modal.setAppElement("#root");

export default function ModalNotification({
  notificationIsOpen,
  closeModalNotification,
  email,
}) {
  const [isEmail, setIsEmail] = useState(null);

  useEffect(() => {
    if (email) {
      setIsEmail(email);
    }
  }, [email]);

  return (
    <Modal
      isOpen={notificationIsOpen}
      onRequestClose={closeModalNotification}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          zIndex: 10000,
        },
      }}
      className={style.modalNotification}>
      <button
        type="button"
        onClick={closeModalNotification}
        className={style.buttonClose}>
        <Icon
          sprite={spriteSistem}
          id={"icon-close"}
          width="24px"
          height="24px"
          className={style.iconClose}
        />
      </button>
      <p className={style.modalNotificationTitle}>Тепер ви з нами!</p>
      <p className={style.modalNotificationText}>
        Ваш E-mail {isEmail} додано до списку очікування. Ми повідомимо вас,
        коли сервіс стане доступним.
      </p>

      <button
        type="button"
        onClick={closeModalNotification}
        className={style.modalClose}>
        Ок
      </button>
    </Modal>
  );
}
