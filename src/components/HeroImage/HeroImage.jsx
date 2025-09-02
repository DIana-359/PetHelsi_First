import girlDogImageMob from "../../assets/Images/girl-dog-mob.jpg";
import girlDogImageDesktop from "../../assets/Images/girl-dog-desktop.jpg";
import style from "./HeroImage.module.css";

export default function HeroImage() {
  return (
    <div className={style.heroImageContainer}>
      {" "}
      <picture>
        <source media="(min-width: 1440px)" srcSet={girlDogImageDesktop} />
        <source media="(min-width: 320px)" srcSet={girlDogImageMob} />

        <img
          src={girlDogImageMob}
          alt="girl with dog"
          className={style.image}
        />
      </picture>
    </div>
  );
}
