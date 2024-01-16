import {useContext, useEffect, useRef, useState} from "react";
import {DEFAULT_BREAK_TIME, DEFAULT_POMODORO_TIME} from "../utils/constants";
import classNames from "classnames";
import StopwatchCSS from './Stopwatch.module.css';
import {Icon} from "@iconify/react";
import Modal from "./Modal";
import sound from "../assets/ClockAlarm.mp3"
import ThemeContext from "../context/ThemeContext";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import SettingsIcon from "./SettingsIcon";
import PhaseDisplay from "./PhaseDisplay";

const POMODORO_TIMER_TYPE = 'pomodoro';
const BREAK_TIMER_TYPE = 'break';
function Stopwatch() {
    const [showModal, setShowModal] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [timerType, setTimerType] = useState(POMODORO_TIMER_TYPE);
    const [pomodoroTime, setPomodoroTime] = useState(DEFAULT_POMODORO_TIME);
    const [breakTime, setBreakTime] = useState(DEFAULT_BREAK_TIME);
    const [isTicking, setIsTicking] = useState(false);
    const intervalRef = useRef(0);
    const audioRef = useRef(null);

    const { theme, setTheme } = useContext(ThemeContext);
    const themeClass = theme === 'primary' ? 'secondary-color' : 'secondary-color-alt';

    useEffect(()=>{
        audioRef.current = new Audio(sound);
    }, [])

    useEffect(()=>{
        if(timerType === POMODORO_TIMER_TYPE && isTicking === false){
            setTimeLeft(pomodoroTime * 60 * 1000)
        }
    }, [timerType, pomodoroTime])

    useEffect(()=>{
        if(timerType === BREAK_TIMER_TYPE && isTicking === false) {
            setTimeLeft(breakTime * 60 * 1000);
        }
    }, [timerType, breakTime])

    useEffect(()=>{
        if(timerType === POMODORO_TIMER_TYPE){
            setTheme('primary')
        }else{
            setTheme('secondary');
        }
    }, [timerType])

    useEffect(()=>{
        return()=> {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    useEffect(() => {
        if (timeLeft < 1000 && isTicking) {
            // Play the audio effect when timeLeft is less than 200ms
            audioRef.current.play().catch(error => {
                console.error("Playback failed:", error);
            });
        }
    }, [timeLeft, isTicking]);

    const updateInterval = (futureTime) =>{
        intervalRef.current = setInterval(() => {
            const currentTime = new Date().getTime();
            const remainingTime = futureTime - currentTime;

            if (remainingTime < 200) {
                setTimeLeft(0);
                switchTimerType();
                stopTimer();
                setIsTicking(false);
            } else {
                setTimeLeft(remainingTime);
            }
        }, 200);
    }
    const switchTimerType = ()=>{
        if(timerType === POMODORO_TIMER_TYPE){
            setTimerType(BREAK_TIMER_TYPE);
        }else{
            setTimerType(POMODORO_TIMER_TYPE);
        }
    }
    const startTimer = ()=>{
        let futureTime = new Date().getTime() + timeLeft;

        if (timeLeft === 0) {
            const additionalTime = (timerType === POMODORO_TIMER_TYPE ? pomodoroTime : breakTime) * 60 * 1000;
            futureTime += additionalTime;
        }

        updateInterval(futureTime);
    }
    const stopTimer = () =>{
        clearInterval(intervalRef.current);
    }

    const handleStart=(event)=>{
        event.preventDefault();
        if(isTicking === false){
            setIsTicking(true);
            startTimer();
        } else{
            setIsTicking(false);
            stopTimer();
        }
    }

    const handleSkipPhase = () => {
        setIsTicking(false);
        stopTimer();
        setTimeLeft(0);
        switchTimerType();
    }

    const handleOpenModal = () => {
        if(isTicking){
            setIsTicking(false);
            stopTimer();
        }
        setShowModal(true)
    }

    return (
        <div className={classNames(StopwatchCSS.containerStopwatch, StopwatchCSS.borderOval, "container", themeClass)}>
            <div className={classNames(StopwatchCSS.phaseGrid)}>
                <SettingsIcon handleOpenModal={handleOpenModal}/>
                <PhaseDisplay timerType={timerType} POMODORO_TIMER_TYPE={POMODORO_TIMER_TYPE} BREAK_TIMER_TYPE={BREAK_TIMER_TYPE}/>
            </div>
            {showModal ? <Modal pomodoroTime={pomodoroTime} isTicking={isTicking} breakTime={breakTime} setPomodoroTime={setPomodoroTime} setBreakTime={setBreakTime} open={showModal} onClose={()=>setShowModal(false)}/> : null}
            <TimerDisplay timeLeft={timeLeft}/>
            <TimerControls handleSkipPhase={handleSkipPhase} handleStart={handleStart} isTicking={isTicking} />
        </div>
    );
}

export default Stopwatch;