import style from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div id="aboutUs">
      <div className={style.aboutUsContainer}>
        <h3 className={style.aboutUsTitle}>Про нас</h3>
        <div className={style.aboutText}>
          <p className={style.aboutUsPet}>
            Pet Helsi — це перший в Україні ветеринарний онлайн сервіс, який
            створений з метою забезпечення зручної платформи для надання
            ветеринарних послуг та забезпечення доступу до якісної ветеринарної
            допомоги для всіх власників домашніх тварин.{" "}
          </p>
          <p className={style.aboutUsDesire}>
            Ми прагнемо зробити процес отримання ветеринарної допомоги
            максимально простим та ефективним для кожного власника тварини, щоб
            ваші домашні улюбленці завжди були здоровими та щасливими.
          </p>
        </div>
      </div>
    </div>
  );
}
