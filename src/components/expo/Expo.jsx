import React ,{useState , useEffect} from 'react'
import './Expo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Expo() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [min , setMin] = useState(0)
  const [max , setMax] = useState(screenWidth > 800 ? 4 : screenWidth > 600 ? 2 : 1)
  const products = [{
    id : 1,
    img: "./assets/guitar.png",
    price: "100.00DT",
    description: "Guitare électrique Fender Stratocaster"
  },
  {
    id : 2,
    img: "./assets/guitar2.png",
    price: "120.00DT",
    description: "Guitare électrique Fender Stratocaster"
  },
  {
    id : 3,
    img: "./assets/guitar.png",
    price: "140.00DT",
    description: "Guitare électrique Fender Stratocaster"
  },
  {
    id : 4,
    img: "./assets/guitar2.png",
    price: "160.00DT",
    description: "Guitare électrique Fender Stratocaster"
  },
  {
    id : 5,
    img: "./assets/guitar.png",
    price: "180.00DT",
    description: "Guitare électrique Fender Stratocaster"
  },
  {
    id : 6,
    img: "./assets/guitar2.png",
    price: "200.00DT",
    description: "Guitare électrique Fender Stratocaster"
  }
  ]

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
console.log(screenWidth)
    window.innerWidth >= 800 && max-min === 2 ? setMax(max+2) : window.innerWidth >= 800 && max-min === 1 ? setMax(max+3) : window.innerWidth >= 600 && window.innerWidth < 800 && max-min === 4 ? setMax(max-2) : window.innerWidth >= 600 && max-min === 1 ? setMax(max+1) : window.innerWidth < 600 && max - min === 2 ? setMax(max-1) : window.innerWidth < 600 && max - min === 4 && setMax(max-3)
    // Attach the handleResize function to the 'resize' event
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);

  const passNext = () => {
    if(max < products.length){
      setMin(min+1)
      setMax(max+1)
    }
  }

  const passPrev = () => {
    if(min > 0){
      setMin(min-1)
      setMax(max-1)
    }
  }

  return (
    <div className="expo">
        <div className="navExpo">
          <a className='toutClicked'>TOUT</a>
          <a>GUITARS</a>
          <a>PERCUSSIONS</a>
          <a>CLAVIERS</a>
          <a>SONO PRO</a>
          <a>ACCESSOIRES</a>
        </div>
        <div className="expoBody">
          <FontAwesomeIcon icon={faChevronLeft} onClick={passPrev} style={{color: min === 0 && '#d2d6d7', cursor : min > 0 && 'pointer'}}/>
          <div className="productBox">
            {
              products.slice(min, max).map((product)=>(
                <div className="product" style={{backgroundImage: `url(${product.img})`}}>
                  <div className="productDescription">
                    <div className="productDescriptionText">{product.description}</div>
                    <div className="productPrice">{product.price}</div>
                  </div>
                </div>
              ))
            }
          </div>
          <FontAwesomeIcon icon={faChevronRight} onClick={passNext} style={{color: max === products.length  && '#d2d6d7', cursor : max < products.length  && 'pointer'}}/>
        </div>
        <div className="quote">
          Step into a world where the strings resonate with passion, where the perfect rhythm flows, and where the stage is set for your musical aspirations. Explore a diverse universe of guitars, pro audio equipment, and accessories that will elevate your performance. Unleash your creative symphony and craft unforgettable melodies with the finest gear at your fingertips.
        </div>
    </div>
  )
}

export default Expo