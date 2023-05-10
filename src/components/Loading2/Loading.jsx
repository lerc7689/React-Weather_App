import "../Loading2/Loading.css";

const Loading = () => {
  return (
    <>
      <div className="fullContainer">
        <div className="boxcontainer">
          <div className="weatherBox">
            <img src="/src/assets/icons/load.gif" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
