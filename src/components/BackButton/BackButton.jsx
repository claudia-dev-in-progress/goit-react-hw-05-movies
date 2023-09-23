import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return <button onClick={handleGoBack}>Go back</button>;
};
