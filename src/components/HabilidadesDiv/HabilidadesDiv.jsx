import './HabilidadesDiv.css';
import LogoCursoCFB from "./cfblogo.jpg";
import LogoCursoCV from "./cursovideo.jpg";
import "https://kit.fontawesome.com/af90d27089.js";

function HabilidadesDiv() {
    return(
        <div id="skills">
        <div id="Imagem">

        </div>
        <div id="Texto">
            <h1>
                Habilidades
            </h1>
            <span id="MovementSkills">
                <span>
                    <i class="fa-brands fa-html5"></i>
                </span>
                <span>
                    <i class="fa-brands fa-css3-alt"></i>
                </span>
                <span>
                    <i class="fa-brands fa-js"></i>
                </span>
                <span>
                    <i class="fa-brands fa-python"></i>
                </span>
                <span>
                    <i class="fa-brands fa-react"></i>
                </span>
            </span>
            <h2>
                Cursos
            </h2>
            <span id="Courses">
                <div>
                    <img src= {LogoCursoCFB} alt="LogoCurso" />
                </div>
                <div>
                    <img src= {LogoCursoCV} alt="LogoCurso" />
                </div>
            </span>
        </div>
    </div>
    )
}
export default HabilidadesDiv