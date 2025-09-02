import spriteProblems from "../../assets/Images/sprite-problems.svg";
import Icon from "../Icon/Icon";
import style from "./WorkingWithProblems.module.css";

export default function WorkingWithProblems() {
  return (
    <div className={style.workingContainer}>
      <h3 className={style.workingTitle}>допоможемо вирішити такі проблеми:</h3>
      <ul className={style.workingList}>
        <li className={style.workingListItem}>
          <Icon
            sprite={spriteProblems}
            id="icon-eating-disorder"
            width="32px"
            height="32px"
            className={style.icon}
          />
          <p className={style.workingText}>Харчовий розлад</p>
        </li>
        <li className={style.workingListItem}>
          {" "}
          <Icon
            sprite={spriteProblems}
            id="icon-skin-infection"
            width="32px"
            height="32px"
            className={style.icon}
          />
          <p className={style.workingText}>Шкірні/вушні інфекції</p>
        </li>
        <li className={style.workingListItem}>
          {" "}
          <Icon
            sprite={spriteProblems}
            id="icon-eye-problems"
            width="32px"
            height="32px"
            className={style.icon}
          />
          <p className={style.workingText}>Проблеми з очима</p>
        </li>
        <li className={style.workingListItem}>
          {" "}
          <Icon
            sprite={spriteProblems}
            id="icon-insects"
            width="32px"
            height="32px"
            className={style.icon}
          />
          <p className={style.workingText}>Блохи та кліщі</p>
        </li>
        <li className={style.workingListItem}>
          {" "}
          <Icon
            sprite={spriteProblems}
            id="icon-bones"
            width="32px"
            height="32px"
            className={style.icon}
          />
          <p className={style.workingText}>Травмування частин тіла</p>
        </li>
        <li className={style.workingListItem}>
          {" "}
          <Icon
            sprite={spriteProblems}
            id="icon-care"
            width="32px"
            height="32px"
            className={style.icon}
          />
          <p className={style.workingText}>Догляд та утримання</p>
        </li>
        <li className={style.workingListItem}>
          {" "}
          <Icon
            sprite={spriteProblems}
            id="icon-allergy"
            width="32px"
            height="32px"
            className={style.icon}
          />
          <p className={style.workingText}>Алергічна реакція</p>
        </li>
        <li className={style.workingListItem}>
          {" "}
          <Icon
            sprite={spriteProblems}
            id="icon-digestive-problems"
            width="32px"
            height="32px"
            className={style.icon}
          />
          <p className={style.workingText}>Проблеми із травленням</p>
        </li>
      </ul>
    </div>
  );
}
