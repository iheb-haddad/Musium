import React from 'react'
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Tuto , Expo , Footer } from "../index"
import "./Home.css"
function Home() {
  return (
    <>
      <div className='container' style={{backgroundImage: "url(./assets/musiumbg.png)"}}>
          <div className="homeBox">
              <h1>CHAQUE PIÉCE A UNE HISTOIRE</h1>
              <div className="search-box">
                  <input
                    type='text'
                    placeholder="Rechercher des instruments neufs et occasions"
                    onChange=''
                  />
                  <button>
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    Rechercher
                  </button>
              </div>
              <h2>Bienvenue chez <span>MUSIUM.</span></h2>
              <h3>DÉCOUVREZ ICI LES MEUILLEURS VENTES PAR UNIVERS</h3>
              <div className="button-group">
                <button className="Acheter">Acheter</button>
                <button className="Vendre">Vendre</button>
              </div>
          </div>
          <div >
            <img className='plateau'src="./assets/plateau.png"/>
          </div>
        </div>
      <Tuto />
      <Expo />
      <Footer />
    </>

  )
}

export default Home
