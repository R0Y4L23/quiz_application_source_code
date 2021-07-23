/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react'
import logo from "../images/quiz_logo.jpg"
import CountDownTimer from './CountDownTimer'
import {useSelector} from "react-redux"
const QuizNav = ({num}) => {
    const tis=useSelector(state=>state.changeTime)
    const hoursMinSecs = {hours:0, minutes: Math.trunc(tis/60), seconds: (tis%60)}
    return (
        <div className="container pt-2">
            <div className="row text-center text-dark" style={{fontFamily:"cursive"}}>
                <div className="col-md-4 mb-3">
                    <img src={logo} alt="" height="60px" width="100px"/>
                </div>
                <div className="col-md-4 qnt bounce-in-bck">
                   <CountDownTimer hoursMinSecs={hoursMinSecs}/>
                </div>
                <div className="col-md-4 qnt mb-3">
                   <h4 className="bg-dark text-light">Question Number : {num}</h4>
                </div>
                <div className="ts" style={{width:`${((tis/120)*100)}%`,backgroundColor:(((tis/120)*100)>=67?"green":(((tis/120)*100)>=33?"orange":"red"))}}></div>
            </div> 
        </div>
    )
}
export default QuizNav