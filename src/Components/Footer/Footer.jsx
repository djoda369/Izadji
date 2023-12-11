import "./styles.scss";

export default function Footer() {
  return (
    <div className="white">
      <div className="container">
        <div className="footer">
          <div className="socials">
            <a
              href="https://www.facebook.com/djordje.stankovic.16100"
              target="blank"
            >
              <img src="../../public/Socials/face.png" alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/djordje.stankovic369/?next=%2Fdjordje.stankovic%2F"
              target="blank"
            >
              <img src="../../public/Socials/inst.png" alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/in/djordje369/" target="blank">
              <img src="../../public/Socials/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/djoda369" target="blank">
              <img src="../../public/Socials/git.png" alt="facebook" />
            </a>
          </div>
          <p>©2023 Đorđe Stanković</p>
        </div>
      </div>
    </div>
  );
}
