"use client"
import s from "./Plyonka.module.scss"
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";
import img7 from "../../assets/images/7.jpg";
import img8 from "../../assets/images/8.jpg";
import img9 from "../../assets/images/9.jpg";
import img10 from "../../assets/images/10.jpg";
import imgA1 from "../../assets/images/a1.jpg";
import imgA2 from "../../assets/images/a2.jpg";
import imgA3 from "../../assets/images/a3.jpg";
import imgA4 from "../../assets/images/a4.jpg";
import imgA5 from "../../assets/images/a5.jpg";
import imgE1 from "../../assets/images/e1.jpg";
import imgE2 from "../../assets/images/e2.jpg";
import imgE3 from "../../assets/images/e3.jpg";
import imgE4 from "../../assets/images/e4.jpg";
import imgE5 from "../../assets/images/e5.jpg";
import {useEffect, useRef} from "react";
import {useLocation} from "react-router-dom";


function Plyonka() {
    const location = useLocation().pathname;
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;

        const onMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * -20;

            track.style.transform = `
        translateX(-25%)
        rotateX(${y}deg)
        rotateY(${x}deg)
      `;
        };

        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);


    return (
        <div className={s.filmBg}>

                {location !== "/valentine" ?  (
                    <div className={s.filmTrack} ref={trackRef}>
                        <img src={imgA1} alt="Image"/>
                        <img src={imgE1} alt="Image"/>
                        <img src={imgA2} alt="Image"/>
                        <img src={imgE2} alt="Image"/>
                        <img src={imgA3} alt="Image"/>
                        <img src={imgE3} alt="Image"/>
                        <img src={imgA4} alt="Image"/>
                        <img src={imgE4} alt="Image"/>
                        <img src={imgA5} alt="Image"/>
                        <img src={imgE5} alt="Image"/>
                    </div>
                    )
                    :
                    (
                        <div className={s.filmTrack} ref={trackRef}>
                            <img src={img1} alt="Image"/>
                            <img src={img3} alt="Image"/>
                            <img src={img10} alt="Image"/>
                            <img src={img9} alt="Image"/>
                            <img src={img4} alt="Image"/>
                            <img src={img5} alt="Image"/>
                            <img src={img2} alt="Image"/>
                            <img src={img6} alt="Image"/>
                            <img src={img7} alt="Image"/>
                            <img src={img8} alt="Image"/>
                        </div>
                    )
                }
        </div>
    );
}

export default Plyonka;