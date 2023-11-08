import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer" style={{backgroundImage: "url(./assets/footerBg.jpg)"}}>
      <div className="blur"></div>
      <div className="linksBox">
        <div className="footerBox">
          <h3>Shop Gear</h3>
          <a>Categories</a>
          <a>Brands</a>
          <a>Deals and Steals</a>
          <a>Price Drops</a>
          <a>New and Popular</a>
          <a>Handipicked Collections</a>
        </div>
        <div className="footerBox">
          <h3>Seller Hub</h3>
          <a>Seller Hub</a>
          <a>Reverb Payments</a>
          <a>Resources</a>
          <a>Reverb News</a>
          <a>Price Guide</a>
          <a>Buying Guides</a>
        </div>
        <div className="footerBox">
          <h3>Help & Tools</h3>
          <a>Help Center</a>
          <a>Contact Support</a>
          <a>Reverb Protection</a>
          <a>Mobile Apps</a>
          <a>Integrations & API</a>
          <a>Affiliate Program</a>
          <a>Reverb App Store</a>
          <a>Privacy Settings</a>
        </div>
        <div className="footerBox">
          <h3>Company</h3>
          <a>Careers</a>
          <a>Press</a>
          <a>Reverb Gives</a>
        </div>
      </div>
      <div className="emailBox">
        <h3>Recevez le meilleur de <span className='logo'>MUSIUM</span><span className='dot'>.</span> directement dans votre boîte</h3>
        <div className="inputBox">
          <input type="text" placeholder="Votre E-mail"/>
          <button>S'abonner</button>
        </div>
        <p>En cliquant sur S'abonner, j'accepte de recevoir des offres exclusives,
           des promotions, des nouveautés et des critiques, ainsi que des conseils personnalisés pour l'achat et la vente sur Reverb.</p>
      </div>
    </div>
  )
}

export default Footer