import React from 'react'
import {Etape} from "../index"
import './Tuto.css'
const etapes =[
    {
        image:'./assets/etape1.png',
        title: "APPORTER",
        description: "Apportez-nous vos instruments de musique et accessoires connexes. Nous achetons tous les jours !"
    },
    {
        image:'./assets/etape2.png',
        title: "EXAMINER",
        description: "Nous évaluerons vos articles pour en déterminer une valeur équitable. Pendant ce temps, découvrez nos articles d'occasion intéressants en magasin."
    },
    {
        image:'./assets/etape3.png',
        title: "ACCORDER",
        description: "Si l'offre vous convient, nous vous paierons sur place ou vous pourrez l'échanger contre des équipements d'occasion dans nos magasins."
    }
]
function Tuto() {
  return (
    <div className='tuto'>
        <div className="title">COMMENT VENDRE VOS MATRIAUX </div>
        <div className="box">
            {etapes.map((etape)=> (
                <Etape image={etape.image} title={etape.title} description={etape.description}  />
            ))}
        </div>
    </div>
  )
}

export default Tuto