import React, {useEffect, useRef, useState} from 'react';
import s from "./Home.module.scss"
import {Link} from "react-router-dom";

function Home() {
    const writingTextAnimated = "Will you be my Valentine?❤️️"
    const [displayedText, setDisplayedText] = useState("")
    const btnRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [buttonsIsShow, setButtonsIsShow] = useState(false);

    const move = () => {
        const btn = btnRef.current;
        const offsetX = (Math.random() ) * 400;
        const offsetY = (Math.random() ) * 400;
        btn.style.position = "absolute";
        btn.style.left = `${offsetX}px`;
        btn.style.top = `${offsetY}px`;
    };

    useEffect(() => {
        if(index < writingTextAnimated.length){
            const timeOut = setTimeout(() => {
                setDisplayedText((prev) => prev + writingTextAnimated[index]);
                setIndex(index +1)
            },200);

            return () => {
                clearTimeout(timeOut);
            }
        } else {
            const timeOut = setTimeout(() => {
                setButtonsIsShow(true);
            },1000)

            return () => {
                clearTimeout(timeOut);
            }

        }
    },[index]);

    return (

        <div className={s.willBeBlock}>
            <div className="animate__animated animate__lightSpeedInLeft">
                <h1>Armushiks,</h1>
            </div>

            <div>
                <h2 className>{displayedText}</h2>
            </div>
            {buttonsIsShow &&
                (
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
                )
            }


        </div>
    );
}

export default Home;