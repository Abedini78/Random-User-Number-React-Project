import { useContext } from 'react'
import style from './BoxUsers.module.css'
import { UserContext } from '../../store/UserContext'
import { User } from './User'



export const BoxUsers=()=>{
    const CtxUser=useContext(UserContext)
    return(
        <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 mx-auto mt-2">
                     <div className={`rounded  p-2 ${style.BoxUser}`}>
                                {CtxUser.ListOfUsers.length===0&&<h3 className='text-white'>Empty List ...</h3>} 
                                {CtxUser.ListOfUsers.map((userInfo,index)=>{
                                    return <User key={index} userInfo={userInfo}></User>
                                })}
                                
                     </div>
        </div>
        </div>
    )
}