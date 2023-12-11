import "./styles.scss";

export default function Instructions() {
  return (
    <div className="gray">
      <div className="container">
        <div className="Instructions">
          <div className="Instructions__header">
            <p className="Title">Kako funkcioniše</p>
            <p className="Description">
              Obezbedite mesto izlaska u par prostih koraka
            </p>
          </div>
          <div className="steps__contnainer">
            <div className="steps__contnainer__steps">
              <div>
                <span>01</span>
                <p>Registrujte Se</p>
              </div>
              <p>
                Započnite svoje putovanje na Izadji.com brzom i jednostavnom
                registracijom! Unesite svoje osnovne informacije kako biste
                kreirali nalog. Ovo će vam omogućiti da personalizujete svoj
                profil dodavanjem omiljenih mesta i preferencija za izlaske. Sve
                to u samo nekoliko trenutaka!
              </p>
            </div>
            <div className="steps__contnainer__steps right">
              <div>
                <span>02</span>
                <p>Izaberite lokal</p>
              </div>
              <p>
                Sada kada ste deo Izadji.com zajednice, vreme je za biranje svog
                omiljenog mesta! Pregledajte raznovrsnu ponudu restorana,
                klubova i kafića u vašem okruženju. Odaberite željeni restoran
                za sledeći izlazak i pripremite se za nezaboravno iskustvo. Vaša
                sledeća rezervacija je samo nekoliko klikova dalje!
              </p>
            </div>
            <div className="steps__contnainer__steps">
              <div>
                <span>03</span>
                <p>Poručite</p>
              </div>
              <p>
                Iskusite jednostavno i brzo naručivanje pića i hrane putem
                Izadji.com! Odaberite željene stavke iz menija odabranog lokala,
                dodajte ih u korpu i izvršite sigurno plaćanje putem sajta.
                Nakon potvrde plaćanja, vaša narudžbina će biti prosleđena
                restoranu i vaša narudžbina će vas čekati u zakazano vreme. Bez
                stresa, bez čekanja u redu!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
