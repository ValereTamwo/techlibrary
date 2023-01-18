import React from 'react'
import '../index.css'
import tech from '../assets/tech.jpg'
import { IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Logo from '../assets/index.jpeg'

function Header() {

  const video = [
    {
      id: 'wfXeaIWXpK0',
      name: 'supervised classification'
    },
    {
      id: '3H0QWXhgkOU',
      name: 'power Bi'
    },
    {
      id: 'NW9QkzGQWxo',
      name: 'Angular'
    }
  ];
  return (
    <header className='w-full h-[10vh] bg-white shadow-[#f7f6f6] font-[azonix] shadow-md p-[20px]'>
      <div className='flex justify-between'>
        <span>
          <span>
            <img className='h-[60px] w-[60px] object-cover relative bottom-[7px]' alt='logo' src={tech} />
            <span className='azonix font-[azonix] relative bottom-[7vh] left-[3vw]  text-[20px]'>Tech LIBRARY</span>
          </span>
        </span>
        <span>
           <span>  
          <input type='search' placeholder='Search a profil' className='w-[500px] h-[40px] relative  shadow-inner   shadow-[#f7f6f6] bg-[white] rounded-[10px] p-[20px] ' />
               <IconButton className='relative right-[3vw]' colorScheme='blue' aria-label='Search database' icon={<SearchIcon />} />
          </span>
        </span>
       
        <span>
          <span className='w-[100%] h-[100%] '>
            {/* <Avatar name='Valere Tamwo' className='w-[40px] h-[40px] object-cover' src={Logo} /> */}
                <button className=' h-[50%]  w-[26vh] rounded-[10px]  text-[#6f00ff] border-[1px] text-[14px] p-[5px] pt-[6%]'><center className='flex justify-center items-center text-center'>Add profile</center> </button>
          </span>
      </span>
      </div>
      {/* <div className='flex gap-[20px]'>
        {
          video.map((vid) => {
            return (
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${vid.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  

            )
          })
        }
      </div> */}
    </header> 
  )
}

export default Header