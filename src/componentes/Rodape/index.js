import "./Rodape.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Rodape = () => {
  return (
    <footer className="rodape">
      <section>
        <ul className="logos">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="icon"/>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faXTwitter} className="icon"/>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="icon"/>
            </a>
          </li>
        </ul>
      </section>
      <section className="logo">
        <img src="/images/logo.png" alt="Logo Organo" />
      </section>
      <p>Desenvolvido por Alura.</p>
    </footer>
  );
};

export default Rodape;
