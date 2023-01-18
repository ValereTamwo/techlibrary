import React from 'react'
import Logo from '../assets/data2.png'
import Dot from '../assets/dot.png'
import Heart from '../assets/heart.webp'
import profil from '../assets/test3.jpeg'
import data from '../assets/data.jpg'
import '../styles.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimesRectangle } from '@fortawesome/free-regular-svg-icons'

import Twitter from '../assets/icoonMedia/twitter.svg'
import facebook from '../assets/icoonMedia/facebook-f.svg'
import Whatsapp from '../assets/icoonMedia/github.svg'
import GitHub from '../assets/icoonMedia/github.svg'


const media = [
  {
    name: facebook
  },
  {
     name: Whatsapp,
  },
  {
    name:Twitter,
    
  },
  {
    name: GitHub,
  }
]   


export function Media({media}) {
  return (

    <>
      <div className='flex flex-row gap-[20px] relative bottom-[30px] justify-center' >
        {
          media.map((me) => {
            return (
            <img src={me.name} alt ='media' className='h-[30px] w-[30px] cursor-pointer hover:tranform hover:scale-[0.5] transition-all ease-out duration-[0.5s]'/>
          )
        })
        }
      </div>
    </>
  )
}

function CardItem(props) {
  return (
    <div className=' card  w-[17vw] h-[60vh] shadow-inner rounded-[20px]   border-[0.5px] hover:scale-[1.1] transition-all ease duration-[0.5s] hover:transform '> 
          <div className='w-full h-[70%] rounded-y-[20px] rounded-t-[20px]' >
              <img src={profil} alt='back' className='swipe object-cover h-[100%] w-[100%] rounded-t-[20px] hover:scale-[0.5] transition-all ease duration-[0.5s] hover:transform ' /> 
              {/* <img src={Dot} className='icone w-[20px] position relative bottom-[93%] left-[90%] cursor-pointer  z-[1] h-[20px]' role='button' alt='dot' /> */}
              <img src={Heart} className='icone w-[50px] position relative bottom-[104%]  cursor-pointer  z-[1] h-[50px]' role='button' alt='heartIcon' />
              {/* <div className='h-[100px] w-[100px] rounded-[50%] bg-[white] border-[1px] justify-center  items-center flex relative left-[30%] bottom-[70%]'   >
                  <div  className='h-[95px] w-[95px] rounded-[50%] '>
                   <a href={profil}> <img alt='profil' src={Logo} className='h-[100%] w-[100%] object-cover rounded-[50%]'/></a>
                  </div>
              </div> */}
      </div>
      <div className='W-full h-[40%] rounded-b-[20px] p-[10px]'>
        <span className='font-[azonix] flex justify-center relative top-[30%] text-[19px]'>Fv dev.</span>
        <span className='font-[azonix] flex justify-center relative top-[30%] text-[14px] text-[gray] z-[1]'>Web Integrator</span>
        <Media media={media} />
        {/* <FontAwesomeIcon icon={faTimesRectangle} /> */}
      </div>
    </div>
  )
}

export default CardItem