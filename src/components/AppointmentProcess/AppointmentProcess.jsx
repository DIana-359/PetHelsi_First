import consultationImg1x from "../../assets/Images/online-consultation@1x.png";
import consultationImg2x from "../../assets/Images/online-consultation@2x.png";
import vector from "../../assets/Images/vector.png";
import cat from "../../assets/Images/cat.gif";
import style from "./AppointmentProcess.module.css";

export default function AppointmentProcess({ isDesktop }) {
  return (
    <div id="appointment" className={style.appointmentContainer}>
      <div className={style.appointmentPicture}>
        <picture className={style.appointmentPicture}>
          <source
            media="(min-width: 1440px)"
            srcSet={`${consultationImg1x} 1x, ${consultationImg2x} 2x`}
          />
          <img
            src="../../assets/Images//online-consultation@1x.png"
            alt="Appointment"
            className={style.appointmentImg}
          />
        </picture>
      </div>

      <div className={style.appointmentListWrapper}>
        <h2 className={style.appointmentTitle}>
          Як проходитиме онлайн-консультація
        </h2>
        <ul className={style.appointmentList}>
          <li className={style.appointmentListItem}>
            <p className={style.number}>1</p>
            <div>
              <h3 className={style.title}>Заповнення форми</h3>
              <p className={`${style.text} ${style.widthText1}`}>
                {isDesktop
                  ? "Після того, як ви внесете дані про тварину та оберете дату та час прийому, система автоматично підбере доступних ветеринарів"
                  : "Оберіть: вид тварини, що її турбує та зручну дату прийому. Система автоматично підбере доступних ветеринарів"}
              </p>
            </div>
          </li>
          <li className={style.appointmentListItem}>
            <p className={style.number}>2</p>
            <div>
              <h3 className={style.title}>Оберіть ветеринара</h3>
              <p className={`${style.text} ${style.widthText2}`}>
                {isDesktop ? (
                  <>
                    Серед запропонованих системою ветеринарів, ви
                    <br />
                    зможете обрати того, який найбільше відповідає вашим вимогам
                  </>
                ) : (
                  "Визначте ветеринара, який ідеально вам підходить серед запропонованих системою"
                )}
              </p>
            </div>
          </li>
          <li className={style.appointmentListItem}>
            <p className={style.number}>3</p>
            <div>
              <h3 className={style.title}>Сплатіть консультацію</h3>
              <p className={style.textLast}>
                Наша платформа підтримує різні платіжні системи. Здійсніть
                оплату <br className={style.break} /> та проконсультуйтеся
                <br className={style.break} /> з ветеринаром
              </p>
            </div>
          </li>
        </ul>
        <img src={cat} alt="Cat GIF" className={style.appointmentCat} />
        <img
          src={vector}
          alt=""
          style={{ width: "236px", height: "144" }}
          className={style.appointmentVector}
        />
      </div>
    </div>
  );
}
