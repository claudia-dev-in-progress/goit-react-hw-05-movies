import { useNavigate } from "react-router-dom";
import style from "./BackButton.module.css";

export const BackButton = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <button className={style.backbutton} onClick={handleGoBack}>
      Go back
    </button>
  );
};
