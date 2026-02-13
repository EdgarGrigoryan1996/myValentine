import React from "react";
import s from "../DaysWithMe.module.scss"
function Counter({ value, label }) {
    return (
        <div className={s.counterItems}>
            <span>{String(value).padStart(2, "0")}</span>
            <p>{label}</p>
        </div>
    );
}

export default Counter;
