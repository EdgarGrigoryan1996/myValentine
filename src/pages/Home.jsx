import React, {useRef} from 'react';
import s from "./Home.module.scss"
import {Link} from "react-router-dom";
function Home() {

    const btnRef = useRef(null);
    const move = () => {
        const btn = btnRef.current;
        const offsetX = (Math.random() ) * 400;
        const offsetY = (Math.random() ) * 400;
        btn.style.position = "absolute";
        btn.style.left = `${offsetX}px`;
        btn.style.top = `${offsetY}px`;
    };

    return (

        <div>
            <h1>Armushiks,</h1>
            <h2 className>Will you be my Valentine?❤️</h2>
            <div className={s.buttonsBlock}>
               <Link to="/valentine">
                   <button className={s.yes}>YES</button>
               </Link>
                <button
                    className={s.no}
                    ref={btnRef}
                    onMouseEnter={move}   // desktop
                    onTouchStart={move}
                    onClick={move}// mobile
                    style={{
                        padding: "12px 24px",
                        transition:"0.1s"
                    }}
                >
                    NO
                </button>
            </div>
        </div>
    );
}

export default Home;