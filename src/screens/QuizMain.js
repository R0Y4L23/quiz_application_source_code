/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import QuizNav from '../components/QuizNav'
import QuizBody from '../components/QuizBody'
import QuizFoot from '../components/QuizFoot'
import QuizEnd from '../components/QuizEnd'
import { useSelector} from "react-redux";

const QuizMain = () => {
  const index=useSelector(state=>state.changeQuestion)
  const time=useSelector(state=>state.changeTime)
    const qjson=
        [
          {
            "Q":"Who was the first President of India?",
            "O":["other option1","Rajendra Prasad","other option2","other option3"],
          },
          {
            "Q":"On which date did India become Independent?",
            "O":["other option1","15th August , 1947","other option2","other option3"],
          },
          {
            "Q":"Where is Taj Mahal Situated?",
            "O":["other option1","other option2","Agra","other option3"],
          },
          {
            "Q":"On which date Republic Day is celebrated?",
            "O":["26th Jan","other option1","other option2","other option3"],
          },
          {
            "Q":"Who was the first P.M. of India?",
            "O":["other option1","other option2","Nehru","other option3"],
          },
          {
            "Q":"Where is India Gate Situated?",
            "O":["other option1","other option2","other option3","Delhi"],
          },
          {
            "Q":"Where is Victoria Memorial Situated?",
            "O":["West Bengal","other option1","other option2","other option3"],
          },
          {
            "Q":"Who was the first Viceroy of India?",
            "O":["other option1","other option2","Mountbatten","other option3"],
          },
          {
            "Q":"Who is known as 'The Father of the Nation' ?",
            "O":["other option1","Gandhi","other option2","other option3"],
          },
          {
            "Q":"On which date Gandhi Jayanti is celebrated?",
            "O":["2nd , October","other option1","other option2","other option3"],
          },
        ]
    return (
        <div className="quiz text-light">
            {(time>0&&index<11)&&<QuizNav num={index}/>}
            {(time>0&&index<11)&&<QuizBody num={index} body={qjson[index-1]}/>}
            {(time<=0||index>10)&&<QuizEnd/>}
            {(time>0&&index<11)&&<QuizFoot progress={index*10}/>}
        </div>
    )
}
export default QuizMain