import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HeroImage from "../../components/HeroImage/HeroImage";
import AboutUs from "../../components/AboutUs/AboutUs";
import Features from "../../components/Features/Features";
import WorkingWithProblems from "../../components/WorkingWithProblems/WorkingWithProblems";
import AppointmentProcess from "../../components/AppointmentProcess/AppointmentProcess";
import FormLanding from "../../components/FormLanding/FormLanding";
import Footer from "../../components/Footer/Footer";
import Benefits from "../../components/Benefits/Benefits";
import ModalMenu from "../../components/ModalMenu/ModalMenu";
import style from "./HomePage.module.css";

export default function HomePage() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 375);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState({
    role: "owner",
    email: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 376);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {modalIsOpen && <ModalMenu setIsOpen={setIsOpen} />}
      <Header modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <div className={style.homePageContainer}>
        <Hero
          isDesktop={isDesktop}
          values={values}
          setValues={setValues}
          errors={errors}
          setErrors={setErrors}
        />
        <HeroImage />
        <AboutUs />
        <Features isDesktop={isDesktop} />
        <WorkingWithProblems />
        <FormLanding
          values={values}
          setValues={setValues}
          errors={errors}
          setErrors={setErrors}
        />
        <AppointmentProcess isDesktop={isDesktop} />
        <Benefits />
        <FormLanding
          values={values}
          setValues={setValues}
          errors={errors}
          setErrors={setErrors}
        />
        <Footer />
      </div>
    </>
  );
}
