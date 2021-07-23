/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import { useEffect, useState } from "react"
const QuizEnd = () => {
    const answers=["Rajendra Prasad","15th August , 1947","Agra","26th Jan","Nehru","Delhi","West Bengal","Mountbatten","Gandhi","2nd , October"]
    const ans=useSelector(state=>state.changeAnswer)
    const [score,setScore]=useState(0)
    useEffect(()=>{
        var s=0;
        for(let i=0;i<10;i++)
        {
            if(ans[i]===answers[i])
            {
                s++;
            }
        }
        setScore(s)
    },[])
    return (
        <div className="text-center text-dark bounce-in-bck" style={{height:"100vh",paddingTop:'20vh'}}>
            <h1>The Quiz has Ended</h1>
            <h2 className="p-3">Thank You for participating</h2>
            <h3 className="p-3">Your Score is : {score}</h3>
            <Link to="/" className="p-3">Go Back to Home Page</Link>
            <p className="p-3">NOTE : If you want to give the quiz again clear browser cookies since it uses those to preserve the time and progress</p>
        </div>
    )
}
export default QuizEnd