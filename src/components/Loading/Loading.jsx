import "../Loading/Loading.css";
import image from "../../assets/icons/load.gif";

const Loading = () => {
  return (
    <div className="Loading">
      <img src={image} alt="" />
    </div>
  );
};

export default Loading;
