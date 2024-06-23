import './Header.css';
import LogoImg from "./logo.png";
function Header() {
    return(
        <div id="Header">
            <strong>
                Gustavo Augusto
            </strong>
            <nav>
                <a href="">
                    Sobre mim
                </a>
                <a href="">
                    Habilidades
                </a>
                <a href="">
                    Projetos
                </a>
            </nav>
            <img src={LogoImg} alt="Logo" />
        </div>
    )
}
export default Header