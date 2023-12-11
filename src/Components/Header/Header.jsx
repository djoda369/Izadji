import "./styles.scss";

export default function Header() {
  return (
    <div className="black">
      <div className="container">
        <div className="Header">
          <div className="Header__Text">
            <img src="../../Logo/izadji.png" />
            <p>
              Vaša digitalna destinacija za brzu i jednostavnu rezervaciju mesta
              u omiljenim restoranima, kafićima i klubovima!
            </p>
          </div>{" "}
          <div className="Header__image">
            <img
              src="../../Header/Restoran.jpg"
              alt="Logo"
              className="kafana"
            />
            <img src="../../Header/klub.jpeg" alt="Logo" className="klub" />
            <img src="../../Header/kafic.jpeg" alt="Logo" className="kafic" />
          </div>
        </div>
      </div>
    </div>
  );
}
