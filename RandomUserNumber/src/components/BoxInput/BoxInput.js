import { useContext, useEffect, useState } from 'react'
import style from './BoxInput.module.css'
import { UserContext } from '../../store/UserContext'



export const BoxInput=()=>{
   const[FlageAnimation,setFlageAnimation]=useState(false)
   const CtxUser=useContext(UserContext)

   useEffect(()=>{
    setTimeout(() => {
        setFlageAnimation(per=>{return !per})
       
    }, 1000);
   },[FlageAnimation])

    return(
        <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 mx-auto mt-2">
                             <div className={`rounded  p-2 ${style.BoxInput}`}>
                                        <button onClick={CtxUser.AddItem} className={`p-2 rounded  ${FlageAnimation?style.acc:style.inacc}`}>ADD NEW USER</button>
                             </div>
                </div>
        </div>
    )
}