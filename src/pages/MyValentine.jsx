import {useState} from 'react';
import s from "./Home.module.scss"
import giftClose from "../assets/images/1.png"
import giftOpen from "../assets/images/2.png"
import giftMusic from "../assets/music/myArmine.mp3"
import {FaArrowLeftLong} from "react-icons/fa6";

function MyValentine(props) {

    const [giftImage, setGiftImage] = useState(giftClose);

    return (

        <div className={s.valentine}>
            <h1>&#128525;YAY &#128525;</h1>
            <h2>Best decision ever ❤️</h2>
            <h3 className={s.valentineText}>I love you ❤️</h3>
            <h2>A Small Gift For You ❤️</h2>
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
    );
}

export default MyValentine;