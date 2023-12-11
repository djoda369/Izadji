import "./styles.scss";
export default function NavBar({
  instructionScroll,
  lokaliScroll,
  formScroll,
}) {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="black">
      <div className="container">
        <div className="Navbar">
          <div className="Navbar__logo">
            <img src="../../Logo/izadji.png" alt="Logo" onClick={refreshPage} />
          </div>
          <div className="Navbar__links">
            <p onClick={instructionScroll}>Kako funkcioniše</p>
            <p onClick={lokaliScroll}>Lokali</p>
            <p onClick={formScroll}>Registracija</p>
          </div>
        </div>
      </div>
    </div>
  );
}
