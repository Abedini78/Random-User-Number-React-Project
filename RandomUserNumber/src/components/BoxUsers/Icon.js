import style from './Icon.module.css'



export const Icon=(props)=>{
    const GetContent=()=>{
        props.func(props.content)
    }
    return(
        <div className={`p-2 ${style.BoxIcon}`} onMouseMove={GetContent}>
             <i className={props.classes} ></i>
        </div>
    )
}