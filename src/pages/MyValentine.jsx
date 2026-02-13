import {useEffect, useState} from 'react';
import s from "./Home.module.scss"
import giftClose from "../assets/images/1.png"
import giftOpen from "../assets/images/2.png"
import giftMusic from "../assets/music/myArmine.mp3"
import {FaArrowLeftLong} from "react-icons/fa6";
import TypeWriter from "../components/TypeWriter/TypeWriter.jsx";
import DaysWithMe from "../components/DaysWithMe/DaysWithMe.jsx";

function MyValentine(props) {
    const animatedText1 = "Գիտե՞ս, երբ տերը իմացավ, որ պետք է ծնվեմ ես,\n" +
        "ինքը այս աշխարհ ուղարկեց ՝ ՔԵԶ:\n" +
        "Ինքը տեսավ իմ կյանքի ամբողջ ճանապարհը։\n" +
        "Տեսավ թե ինչ դժվարությունների միջով պետք է անցնեմ,\n" +
        "Տեսավ իմ բոլոր դժվար տարիները՝\n" +
        "Խաբեություն, նախանձ, դավաճանություն, հարազատի կորուստ։\n" +
        "ՈՒ էտ պահին ինքը հասկացավ որ նա չունի այդքան պահապան հրեշտակ ՝\n" +
        "Ովքեր կկարողանան փրկել ինձ։\n" +
        "Ու ինքը որոշեց ինձ ուղարկել ընդհամենը մի հրեշտակի՝ ամբողջ կյանքի համար՝\n" +
        "ՔԵԶ...\n" +
        "Իմ պահապան հրեշտակ❤️\n️"

    const animatedText2 = "A small gift for you ✌️"

    const [giftIsShow, setGiftIsShow] = useState(false);
    const [giftImage, setGiftImage] = useState(giftClose);
    const [readyForSecondAnimate,setReadyForSecondAnimate] = useState(false);
    const [started, setStarted] = useState(false);


    useEffect(() => {
        const img1 = new Image();
        img1.src = giftClose;

        const img2 = new Image();
        img2.src = giftOpen;
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStarted(true);
        },3000)
        return () => {
            clearTimeout(timer);
        }
    }, []);

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

            <div style={{padding:"0 25px"}} className="animate__animated animate__bounceInUp">
                     <TypeWriter text={animatedText1} tag={"h5"} duration={150} ready={started} sendRes={setReadyForSecondAnimate}/>
            </div>
            <div style={{padding:"0 25px"}} className="animate__animated animate__bounceInUp">
                <TypeWriter text={animatedText2} tag={"h3"} duration={200} ready={readyForSecondAnimate} sendRes={setGiftIsShow}/>
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