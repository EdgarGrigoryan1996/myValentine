import s from "./DaysWithMe.module.scss"
import Counter from "./Counter/Counter.jsx";
import {useCountdown} from "../../hooks/useCountdown.jsx";
import {Link} from "react-router-dom";

function DaysWithMe() {

    const startDate = new Date("2024-08-03T00:00:00.000Z")

    const { days, hours, minutes, seconds } = useCountdown(startDate);
    const check = days === 0 && hours === 0 && minutes === 0 && seconds === 0;
    return (
        <div className={s.daysWithMeBlock}>

            <div >
                {check ? (
                    <div>
                        <div>
                            <h2>Loading ...</h2>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="animate__animated animate__bounceInDown">
                            <h2>We are together 🤍</h2>
                        </div>

                            <div className={s.counterBlock}>
                                <div className="animate__animated animate__bounceInLeft animate__delay-1s" >
                                    <Counter value={days} label={"Days"} />
                                </div>

                                <div className={s.dots}>:</div>
                                <div className="animate__animated animate__bounceInUp animate__delay-1s" >
                                    <Counter value={hours} label={"Hrs"} />
                                </div>


                                <div className={s.dots}>:</div>
                                <div className="animate__animated animate__bounceInDown animate__delay-1s" >
                                    <Counter value={minutes} label={"Min"} />
                                </div>


                                <div className={s.dots}>:</div>
                                <div className="animate__animated animate__bounceInRight animate__delay-1s" >
                                    <Counter value={seconds} label={"Sec"} />
                                </div>

                            </div>



                    </div>

                )}
            </div>
            <div className="animate__animated animate__bounceInUp animate__delay-4s">
                <Link to={"/valentine"}>Oooo Next 😊</Link>
            </div>
        </div>
    );
}

export default DaysWithMe;