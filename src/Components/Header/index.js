import React from 'react'

const Header = () => {

     window.addEventListener('scroll', () => {
          const s = parseInt(window.pageYOffset)
          var offsetHeight = document.querySelector('.portfolio').offsetHeight;
          console.log('offsetHeight', offsetHeight);
          console.log('page', s);
          if (s < 87) {
               document.querySelector('.root_link').classList.add('active_link')
               document.querySelector('.about_link').classList.remove('active_link')
               document.querySelector('.skill_link').classList.remove('active_link')
               document.querySelector('.portfolio_link').classList.remove('active_link')
               document.querySelector('.contact_link').classList.remove('active_link')

          } else if (s < 1100) {
               document.querySelector('.about_link').classList.add('active_link')
               document.querySelector('.root_link').classList.remove('active_link')
               document.querySelector('.skill_link').classList.remove('active_link')
               document.querySelector('.portfolio_link').classList.remove('active_link')
               document.querySelector('.contact_link').classList.remove('active_link')

          } else if (s < 1517) {
               document.querySelector('.skill_link').classList.add('active_link')
               document.querySelector('.root_link').classList.remove('active_link')
               document.querySelector('.about_link').classList.remove('active_link')
               document.querySelector('.portfolio_link').classList.remove('active_link')
               document.querySelector('.contact_link').classList.remove('active_link')

          } else if (s < (offsetHeight + 1350)) {
               document.querySelector('.portfolio_link').classList.add('active_link')
               document.querySelector('.root_link').classList.remove('active_link')
               document.querySelector('.about_link').classList.remove('active_link')
               document.querySelector('.skill_link').classList.remove('active_link')
               document.querySelector('.contact_link').classList.remove('active_link')

          } else if (s > (offsetHeight + 1350)) {
               document.querySelector('.contact_link').classList.add('active_link')
               document.querySelector('.root_link').classList.remove('active_link')
               document.querySelector('.about_link').classList.remove('active_link')
               document.querySelector('.skill_link').classList.remove('active_link')
               document.querySelector('.portfolio_link').classList.remove('active_link')

          }


     })


     const change = () => {
          window.pageYOffset(0)
     }

     return (
          <div className='header'>
               <div className="navbar">
                    <a href="#" onClick={change} className='root_link active_link'> <div> Home </div>   <i class="bi bi-house-door"></i>  </a>
                    <a href="#about" className='about_link'>   <div> About me </div>    <i class="bi bi-person"> </i>  </a>
                    <a href="#skill" className='skill_link'>   <div> Skills </div>    <i class="bi bi-stack-overflow"> </i> </a>
                    <a href="#port" className='portfolio_link'>  <div> Portfolio </div>    <i class="bi bi-stack"> </i> </a>
                    <a href="#contact" className='contact_link'>  <div> Contacts </div>   <i class="bi bi-send"> </i>   </a>
               </div>
          </div>
     )
}

export default Header