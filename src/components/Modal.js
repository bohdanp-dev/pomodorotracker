import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import ModalCSS from './Modal.module.css';
import classNames from "classnames";
import {Icon} from "@iconify/react";

const Modal = ({pomodoroTime, breakTime, setBreakTime, setPomodoroTime,onClose}) =>{
    const [newPomodoroTime, setNewPomodoroTime] = useState(Number(pomodoroTime));
    const [newBreakTime, setNewBreakTime] = useState(Number(breakTime));

    useEffect(()=>{
        document.body.classList.add(ModalCSS.overflowHidden);
        if (pomodoroTime === '') {
            setPomodoroTime(0);
        }
        if (breakTime === '') {
            setBreakTime(0);
        }
        return()=>{
            document.body.classList.remove(ModalCSS.overflowHidden);
        }
    }, [])

    const handleInputChange = (value, setter) =>{
        setter(value === '' ? '' : Number(value));
    }
    const handleAcceptChanges = () =>{
        if(newBreakTime !== breakTime){
            setBreakTime(newBreakTime);
        }
        if(newPomodoroTime !== pomodoroTime){
            setPomodoroTime(newPomodoroTime);
        }


        onClose();
    }

    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className={ModalCSS.overlay}></div>
            <div className={ModalCSS.modalContainer}>
                <div className={classNames(ModalCSS.horizontalFlexContainer)}>
                    <label className={ModalCSS.modalContainerItem}>Settings</label>
                    <Icon className={classNames(ModalCSS.closeSettingsIcon)} onClick={onClose} icon={"material-symbols:close"}/>
                </div>
                <hr className={classNames(ModalCSS.fullWidthLine)}/>
                <label className={ModalCSS.modalContainerItem}>Pomodoro timer: </label>
                <input className={classNames(ModalCSS.modalContainerItem, ModalCSS.modalInput)} aria-label="pomodoro time value (in minutes)" type="number" value={newPomodoroTime} onChange={(e)=>handleInputChange(e.target.value, setNewPomodoroTime)}/>
                <label className={ModalCSS.modalContainerItem}>Break timer: </label>
                <input className={classNames(ModalCSS.modalContainerItem, ModalCSS.modalInput)} aria-label="break time value (in minutes)" type="number" value={newBreakTime} onChange={(e)=>handleInputChange(e.target.value, setNewBreakTime)}/>
                <button onClick={handleAcceptChanges} className={classNames(ModalCSS.acceptButton, ModalCSS.modalContainerItem, "button-primary", "text-color-secondary", )}>Accept changes</button>
            </div>
        </div>,

        document.querySelector('.modal-container')
    )
}

export default Modal;