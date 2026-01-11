import spriteProblems from "../../assets/Images/sprite-problems.svg";
import Icon from "../Icon/Icon";
import style from "./WorkingWithProblems.module.css";

export default function WorkingWithProblems() {
  const problems = [
    { id: "icon-eating-disorder", text: "Проблеми з травленням" },
    { id: "icon-skin-infection", text: "Шкірні/вушні інфекції" },
    { id: "icon-eye-problems", text: "Проблеми з очима" },
    { id: "icon-insects", text: "Блохи та кліщі" },
    { id: "icon-bones", text: "Травмування частин тіла" },
    { id: "icon-care", text: "Догляд та утримання" },
    { id: "icon-allergy", text: "Алергічна реакція" },
  ];

  return (
    <div className={style.workingContainer}>
      <h3 className={style.workingTitle}>допоможемо вирішити такі проблеми:</h3>
      <ul className={style.workingList}>
        {problems.map(({ id, text }) => (
          <li className={style.workingListItem} key={id}>
            <Icon
              sprite={spriteProblems}
              id={id}
              width="32px"
              height="32px"
              className={style.icon}
            />
            <p className={style.workingText}>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
