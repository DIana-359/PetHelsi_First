import style from "./Header.module.css";
import Icon from "../Icon/Icon";
import sprateSistem from "../../assets/Images/sprite-sistem.svg";

export default function Header({ modalIsOpen, setIsOpen }) {
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={style.headerContainer}>
      <Icon
        sprite={sprateSistem}
        id={"icon-logo2"}
        width="112px"
        height="32px"
        className={style.icon}
      />
      <div>
        <nav>
          <ul className={style.navigationList}>
            <li>
              <a href="#aboutUs" className={style.navListItem}>
                Про нас
              </a>
            </li>
            <li>
              <a href="#features" className={style.navListItem}>
                Власникам тварин
              </a>
            </li>
            <li>
              <a href="#benefits" className={style.navListItem}>
                Ветеринарам
              </a>
            </li>
            <li>
              <a href="#appointment" className={style.navListItem}>
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {modalIsOpen ? (
          <button
            type="button"
            onClick={closeModal}
            className={style.buttonClose}>
            <Icon
              sprite={sprateSistem}
              id={"icon-close"}
              width="32px"
              height="32px"
              className={style.iconClose}
            />
          </button>
        ) : (
          <button
            type="button"
            onClick={openModal}
            className={style.buttonMenu}>
            <Icon
              sprite={sprateSistem}
              id={"icon-burger-for-header-mobile"}
              width="32px"
              height="32px"
              className={style.iconBurger}
            />
          </button>
        )}
      </div>
    </div>
  );
}
