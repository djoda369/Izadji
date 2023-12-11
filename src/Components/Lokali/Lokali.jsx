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
            <img src="../../public/Lokali/Bravado.jpg" />
            <img src="../../public/Lokali/lagano.jpg" />
            <img src="../../public/Lokali/plesure.jpg" />
            <img src="../../public/Lokali/Proces.png" />
            <img src="../../public/Lokali/Retro.jpg" />
            <img src="../../public/Lokali/squere.jpg" />
            <img src="../../public/Lokali/stambolijski.jpg" />
            <img src="../../public/Lokali/Troy.jpg" />
            <img src="../../public/Lokali/Vidin.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
