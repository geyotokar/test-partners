import React from 'react'
import './Partners.css'
import logo0 from '../assets/images/logo0.svg'
import logo1 from '../assets/images/logo1.svg'
import logo2 from '../assets/images/logo2.svg'
import logo3 from '../assets/images/logo3.svg'
import logo4 from '../assets/images/logo4.svg'
import logo5 from '../assets/images/logo5.svg'
import logo6 from '../assets/images/logo6.svg'
import checkImg from '../assets/images/checkImg.jpeg'

const partnersLogos = [
    {id:0, img: logo0},
    {id:1, img: logo1},
    {id:2, img: logo2},
    {id:3, img: logo3},
    {id:4, img: logo4},
    {id:5, img: logo5},
    {id:6, img: logo6},
//    {id:7, img: checkImg} // uncomment to check for unequal sides
]

const Partners: React.FC = () => {
    return <main className='partners'>
        <h1 className='h'>НАШИ ПАРТНЕРЫ</h1>
        <div className='partnersItems__container'>
            {partnersLogos.map(p => <PartnersItem img={p.img} key={p.id}/>)}
        </div>
    </main>
}

const PartnersItem: React.FC<PropsType> = (props) => {
    return <div className='partnersItem partners__partnersItem'>
        <div className='partners__logoContainer'>
            <img className='partners__logo' src={props.img} alt=''/>
        </div>
    </div>
}

type PropsType = {
    img: string
}

export default Partners