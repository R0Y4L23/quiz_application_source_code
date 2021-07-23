import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useDispatch,useSelector} from "react-redux"
import { addAns } from '../Redux';
const QuizBody = ({num,body}) => {
    const answers=useSelector(state=>state.changeAnswer)
    const [value, setValue] = React.useState(answers[num-1]);
    const dispatch=useDispatch()
    const handleChange = (event) => {
      setValue(event.target.value);
      dispatch(addAns(event.target.value,num-1))
    };
    return (
        <div className="container my-5 qb text-dark bounce-in-bck">
            <div className="row text-center" style={{fontFamily:"Audiowide"}}>
                <div className="col-3 fs-4 mt-2">Q {num}: </div>
                <div className="col-9 fs-2"> {body.Q}</div>
            </div>
            <RadioGroup value={value} onChange={handleChange} style={{marginTop:"8vh"}}> 
                <FormControlLabel value={body.O[0]} control={<Radio/>} label={<h3 className="opt p-2" style={{backgroundColor:answers[num-1]===body.O[0]?"grey":""}}>{body.O[0]}</h3>} className="options"/>
                <FormControlLabel value={body.O[1]} control={<Radio/>} label={<h3 className="opt p-2" style={{backgroundColor:answers[num-1]===body.O[1]?"grey":""}}>{body.O[1]}</h3>} className="options"/>
                <FormControlLabel value={body.O[2]} control={<Radio/>} label={<h3 className="opt p-2" style={{backgroundColor:answers[num-1]===body.O[2]?"grey":""}}>{body.O[2]}</h3>} className="options"/>
                <FormControlLabel value={body.O[3]} control={<Radio/>} label={<h3 className="opt p-2" style={{backgroundColor:answers[num-1]===body.O[3]?"grey":""}}>{body.O[3]}</h3>} className="options"/>
            </RadioGroup>
        </div>
    )
}
export default QuizBody