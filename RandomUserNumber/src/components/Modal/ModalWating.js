import style from './ModalWating.module.css'
import  ReactDOM  from 'react-dom'
import Loader from './Spinner-5.gif'


export const ModalWating=()=>{
    return ReactDOM.createPortal(
        <div className={`${style.BoxModal}`}>
            <img src={Loader}></img>
           
        </div>
    ,document.getElementById('ModalWaiting'))
}