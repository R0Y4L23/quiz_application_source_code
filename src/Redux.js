/* eslint-disable no-unused-vars */
import {combineReducers} from "redux"
import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//actions
export const next=()=>{
    return {
        type:"nextQuestion"
    }
}
export const last=()=>{
    return {
        type:"lastQuestion"
    }
}

export const addAns=(ans,index)=>{
    return{
        type:"ansAdded",
        payload:{
            ans,index
        }
    }
}

export const addTime=()=>{
    return {
        type:"timeAdded"
    }
}
//actions

//value
const question=1;
const answers=["test","test","test","test","test","test","test","test","test","test"];
const time=120;
//value

//reducers
const changeQuestion=(state=question,action)=>{
    switch (action.type)
    {
        case "nextQuestion": return state+1
        case "lastQuestion":
            if(state===1)
                return state
            else
                return state-1
        default: return state
    }
}

const changeAnswer=(state=answers,action)=>{
    switch(action.type)
    {
        case "ansAdded":
            let a=state
            if(a[action.payload.index])
            {
                a[action.payload.index]=action.payload.ans

            }
            else{
                a.push(action.payload.ans)
            }
            state=a
            return state
        default: return state
    }
}
const changeTime=(state=time,action)=>{
    switch(action.type)
    {
        case "timeAdded":
            if(state<=0)
               return state
            else
               return state-1
        default: return state
    }
}
//reducers

//store
 const reducers=combineReducers({
     changeQuestion,changeAnswer,changeTime
 })
// export const store=createStore(reducers)

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, reducers)
  export const store = createStore(persistedReducer)
  export const persistor = persistStore(store)
//store


