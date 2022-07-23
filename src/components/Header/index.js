import banner from '../images/respect.png'
import style from '../Header/style.css'

function Header () {
    return (
        <div className={style}>    
            <img src={banner} alt="opa"/>

        </div>
    )
}

export default Header