/* eslint-disable no-unused-vars */
import React from 'react'
import {useDispatch} from "react-redux"
import {next,last} from "../Redux.js"
const QuizFoot = ({progress}) => {
    const dispatch=useDispatch()
    return (
        <div className="container bg-dark qf bounce-in-top">
           <div className="row">
               <div className="col-2">
               <button type="button" className="btn btn-outline-danger" onClick={()=>{dispatch(last())}}><i className="fas fa-arrow-circle-left"></i><span className="d-md-inline d-none"> Previous</span></button>
               </div>
               <div className="col-8 d-flex flex-column align-items-start justify-content-center">
               <div className="ts d-flex justify-content-end" style={{width:`${progress}%`}}>{progress}</div>
               <div className="ts" style={{width:`${progress}%`,backgroundColor:(progress>=70?"green":(progress>=30?"yellow":"red"))}}></div>
               </div>
               <div className="col-2 d-flex justify-content-end">
               <button type="button" className="btn btn-outline-success" onClick={()=>{dispatch(next())}}><span className="d-md-inline d-none">Next </span><i className={`fas ${progress===10?"fa-check-circle":"fa-arrow-circle-right"}`}></i></button>
               </div>
           </div>
        </div>
    )
}
export default QuizFoot