import "./Box.css";

const MovieBox = function ({ children }) {
  return (
    <div className="box">
      <button className="collapse-btn">+</button>
      {children}
    </div>
  );
};

export default MovieBox;
