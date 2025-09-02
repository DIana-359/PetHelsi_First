import { useEffect } from "react";
import Modal from "react-modal";
import style from "./ModalMenu.module.css";

Modal.setAppElement("#root");

export default function ModalMenu({ setIsOpen }) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1439) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsOpen]);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={style.modalMenuContainer}>
      <nav>
        <ul className={style.navigationList}>
          <li onClick={closeModal}>
            <a href="#aboutUs" className={style.navListItem}>
              Про нас
            </a>
          </li>
          <li onClick={closeModal}>
            <a href="#features" className={style.navListItem}>
              Власникам тварин
            </a>
          </li>
          <li onClick={closeModal}>
            <a href="#benefits" className={style.navListItem}>
              Ветеринарам
            </a>
          </li>
          <li onClick={closeModal}>
            <a href="#appointment" className={style.navListItem}>
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
