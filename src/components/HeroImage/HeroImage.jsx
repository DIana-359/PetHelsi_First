import girlDogImageMob from "../../assets/Images/girl-dog-mob.jpg";
import girlDogImageDesktop from "../../assets/Images/girl-dog-desktop.jpg";
import girlDogImageTablet2x from "../../assets/Images/girlDogImageTablet@2x.jpg";
import style from "./HeroImage.module.css";

export default function HeroImage() {
  return (
    <div className={style.heroImageContainer}>
      <picture>
        <source media="(min-width: 1440px)" srcSet={girlDogImageDesktop} />
        <source
          media="(min-width: 640px) and (max-width: 1439px)"
          srcSet={girlDogImageTablet2x}
        />

        <source
          media="(min-width: 640px) and (max-width: 1439px)"
          srcSet={girlDogImageTablet2x}
        />

        <source
          media="(min-width: 375px) and (max-width: 639px)"
          srcSet={`${girlDogImageMob} 1x, ${girlDogImageTablet2x} 2x`}
        />

        <img
          src={girlDogImageMob}
          alt="girl with dog"
          className={style.image}
        />
      </picture>
    </div>
  );
}
