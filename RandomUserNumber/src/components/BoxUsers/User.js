import { useState } from 'react'
import { Icon } from './Icon'
import style from './User.module.css'


export const User=(props)=>{
    const[Content,setContent]=useState(props.userInfo.name.first)
    const onSetContent=(Newcontent)=>{
             setContent(Newcontent)
    }

    return(
        <div className={` col-xs-12 col-sm-12 col-md-10 col-lg-8 ${style.ContainerUser} mx-auto p-2 mt-2`}>
                       <div className={`p-1 ${style.BoxImage}`}>
                                     <div>
                                        <img className='shadow' src={props.userInfo.picture.large}></img>
                                     </div>
                                     
                       </div>
                      
                       <h4 className='w-100 p-3 mt-1 text-center'>
                        {Content}
                       </h4>
                      
                      

                       <div className={`${style.BoxInfo}`}>
                          <Icon classes='fas fa-address-book' func={onSetContent}  content={props.userInfo.name.first}></Icon>
                          <Icon classes='fas fa-phone-volume' func={onSetContent} content={props.userInfo.phone}></Icon>
                          <Icon classes='fas fa-lock' func={onSetContent} content={props.userInfo.login.password}></Icon>
                          <Icon classes='fas fa-comment-alt' func={onSetContent} content={props.userInfo.email}></Icon>
                       </div>
        </div>
    )
}