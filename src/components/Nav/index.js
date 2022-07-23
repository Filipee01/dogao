import style from './style.css' 
import img1 from '../images/logo.png'

function Nav () {
    return(
        <div className='content'>
            <div className={style}>
            <img src={img1} alt="opa"/>
            </div>
        <ul>
            <a href="#"><li>Início</li></a>
            <a href="#"><li>Cardápio</li></a>
            <a href="#"><li>Contatos</li></a>
        </ul>
        </div>
    )
}

export default Nav