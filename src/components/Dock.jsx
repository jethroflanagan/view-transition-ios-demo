import dock from "../assets/dock.png";
import { useNavigate } from "react-router-dom";
export const Dock = () => {
  const navigate = useNavigate();
  const lockPhone = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    document.startViewTransition(() => navigate(href));
  };
  return (
    <div className='dock'>
      <a href="/lock" onClick={lockPhone}>
        <img src={dock} />
      </a>
    </div>
  );
};
