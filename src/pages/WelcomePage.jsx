import s from "./Home.module.scss"
import {Link} from "react-router-dom";
import 'animate.css';
function WelcomePage() {
    return (

        <div className={s.welcomeWrapper}>

            <div className={s.text}>
                <h1 className="animate__animated animate__bounceInLeft">Hello </h1>
                <h1 className="animate__animated animate__bounceInUp"> My </h1>
                <h1 className="animate__animated animate__bounceInDown"> Dear</h1>
                <h1 className="animate__animated animate__bounceInRight"> Armine</h1>
            </div>

            <div className="animate__animated animate__bounceInUp animate__delay-1s">
                <Link to={"/home"}>Next</Link>
            </div>

        </div>
    );
}

export default WelcomePage;

