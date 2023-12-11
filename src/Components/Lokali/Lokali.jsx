import "./styles.scss";

export default function Lokali() {
  return (
    <div className="black">
      <div className="container">
        <div className="lokali">
          <div className="lokali__header">
            <span className="Title">Lokali</span>
            <p>Izbor od preko 100 kafana, kafića i klubova</p>
          </div>
          <div className="lokali__grid">
            <img src="../../Lokali/Bravado.jpg" />
            <img src="../../Lokali/lagano.jpg" />
            <img src="../../Lokali/plesure.jpg" />
            <img src="../../Lokali/Proces.png" />
            <img src="../../Lokali/Retro.jpg" />
            <img src="../../Lokali/squere.jpg" />
            <img src="../../Lokali/stambolijski.jpg" />
            <img src="../../Lokali/Troy.jpg" />
            <img src="../../Lokali/Vidin.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
