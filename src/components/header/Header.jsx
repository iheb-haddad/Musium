import React , {useState} from 'react'
import "./Header.css"
import {Home} from '../index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faX } from '@fortawesome/free-solid-svg-icons'
function Header(props) {
  const [navClicked , setNavClicked ] = useState("home")
  const [showNav , setShowNav] = useState(false)
  const handleClickHome = () => {
    props.setComponentCharged(<Home/>)
    setNavClicked('home')
  };
  const handleClickProduct = () => {
    setNavClicked('produits')
  };
  const handleClickAboutUs = () => {
    setNavClicked('apropos')
  };
  const handleClickGUITARS = () => {
    setNavClicked('guitars')
  };
  const handleDisplayNav = () => {
    setShowNav(!showNav)
  }

  return (
    <div className='header'>
      <nav>
        <img onClick={ handleClickHome} src="./assets/musiumlogo.png" alt="LOGO" />
              <ul style={{display : showNav && 'flex'}}>
                  <a className={navClicked === 'home' ? 'clicked' : ''} onClick={ handleClickHome}>ACCEUIL</a>
                  <a className={navClicked === 'produits' ? 'clicked' : ''} onClick={handleClickProduct}>PRODUITS</a>
                  <a className={navClicked === 'apropos' ? 'clicked' : ''} onClick={handleClickAboutUs}>A PROPOS</a>
                  <a className={navClicked === 'guitars' ? 'clicked' : ''} onClick={handleClickGUITARS}>GUITARS</a>
                  {/* <a className={navClicked === 'guitars' ? 'clicked' : ''} onClick={handleClickGUITARS}>GUITARS</a>
                  <a className={navClicked === 'guitars' ? 'clicked' : ''} onClick={handleClickGUITARS}>GUITARS</a>
                  <a className={navClicked === 'guitars' ? 'clicked' : ''} onClick={handleClickGUITARS}>GUITARS</a> */}
              </ul>
              {showNav ? <FontAwesomeIcon icon={faX} className = 'barIcon' onClick={handleDisplayNav}/> : <FontAwesomeIcon icon={faBars} className = 'barIcon' onClick={handleDisplayNav}/>}
      </nav>
    
    </div>
  )
}

export default Header