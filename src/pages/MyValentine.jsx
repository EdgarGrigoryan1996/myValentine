import {useEffect, useState} from 'react';
import s from "./Home.module.scss"
import giftClose from "../assets/images/1.png"
import giftOpen from "../assets/images/2.png"
import giftMusic from "../assets/music/myArmine.mp3"
import {FaArrowLeftLong} from "react-icons/fa6";
import {FaGift} from "react-icons/fa";

function MyValentine(props) {
    const animatedText = "A Small Gift For You ✌️"
    const [displayedText, setDisplayedText] = useState("")
    const [index, setIndex] = useState(0);
    const [giftIsShow, setGiftIsShow] = useState(false);
    const [giftImage, setGiftImage] = useState(giftClose);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStarted(true);
        },3000)
        return () => {
            clearTimeout(timer);
        }
    }, []);
    useEffect(() => {
            if(!started) return;
            if(index < animatedText.length){
                const timeout = setTimeout(() => {
                    setDisplayedText((prev) => prev + animatedText[index]);
                    setIndex(index + 1);
                },300)

                return () => {
                    clearTimeout(timeout);
                }
            } else {
                const timeout = setTimeout(() => {
                    setGiftIsShow(true);
                },2000)
                return () => {
                    clearTimeout(timeout);
                }
            }




    },[index,started]);

    return (

        <div className={s.valentine}>

            <div className="animate__animated animate__bounceInDown">
                <h1>&#128525;YAY &#128525;</h1>
            </div>

            <div className="animate__animated animate__bounceInLeft animate__delay-1s">
                <h2>Best decision ever ❤️</h2>
            </div>

            <div className="animate__animated animate__bounceInRight animate__delay-2s">
                <h3 className={s.valentineText}>I love you ❤️</h3>
            </div>

            <div className="animate__animated animate__bounceInUp">
                <h2>{displayedText}</h2>
            </div>


            {giftIsShow &&
                (
                    <div className="animate__animated animate__zoomInUp">
                        <div className={s.giftBlock}>
                            <img src={giftImage} alt="close" onClick={() => {
                                setGiftImage(giftOpen)
                                props.setMusic(giftMusic)
                                props.setOpened(true)
                            } } />
                            {
                                giftImage === giftClose && <span className={s.arrow}>
                    <FaArrowLeftLong /> Click
                </span>
                            }
                        </div>
                    </div>
                )
            }


        </div>
    );
}

export default MyValentine;