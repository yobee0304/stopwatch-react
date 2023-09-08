import React, { useState } from "react";

function BtnReset({onClick}){
    return <button
    onClick={onClick}>
        RESET
    </button>
}

function BtnStartStop({text, onClick}){
    return <button
    onClick={onClick}>
        {text}
    </button>
}

function StopWatch(){
    const [curTime, setCurTime] = useState(0);
    const [intervalId, setIntervalId] = useState(0);
    const [value, setValue] = useState("START");
    const [Toggle, setToggle] = useState(false);

    const changeBtn = () => {
        if (Toggle){
            if(intervalId){
                clearInterval(intervalId);
                setIntervalId(0);
            }

            setValue("START");
        } else {
            const newIntervalId = setInterval(() => {
                setCurTime(curTime => curTime + 10);
            }, 10);
            setIntervalId(newIntervalId);

            setValue("STOP");
        }

        setToggle(!Toggle);
    }

    const resetBtn = () => {
        setCurTime(0);
    }

    return (
        <div>
            <div>{new Date(curTime).toISOString().substring(14, 22)}</div>
            <BtnReset onClick={resetBtn}/>
            <BtnStartStop text={value} onClick={changeBtn}/>
        </div>
    );
}

export default StopWatch;