import React, {useEffect, useState} from 'react';

function TypeWriter({tag = "div", text ,duration,ready,sendRes}) {
    const Tag = tag;
    const [displayedText, setDisplayedText] = useState("")
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if(!ready) return;
        if(index < text.length){
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex(index + 1);
            },duration)

            return () => {
                clearTimeout(timeout);
            }
        }
        else {
            const timeout = setTimeout(() => {
                if(!sendRes) return
                sendRes(true);
            },2000)
            return () => {
                clearTimeout(timeout);
            }
        }
    },[index,ready])



    return (

            <Tag>{displayedText}</Tag>

    );
}

export default TypeWriter;