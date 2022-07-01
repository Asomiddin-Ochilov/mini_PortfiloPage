import React, { useState, useEffect } from 'react'

const DarkMode = () => {

     const [theme, setTheme] = useState(localStorage.getItem('mode'))
     const [bgwhite, setBgWhite] = useState('')
     const [bgdark, setBgDark] = useState('')


     useEffect(() => {

          if (theme === '') {
               setBgWhite('active_white')
               setBgDark('')
               document.body.classList.remove('dark')
          } else if (theme === 'white') {
               setBgWhite('active_white')
               setBgDark('')
               document.body.classList.remove('dark')
          }
          else if (theme === 'dark') {
               setBgDark('active_white')
               setBgWhite('')
               document.body.classList.add('dark')
          } else {
               setBgWhite('active_white')
               setBgDark('')
               document.body.classList.remove('dark')
          }

     })

     const darkMode = (color) => {
  
          if (color === 'white') {
               setBgWhite('active_white')
               localStorage.setItem('mode','white')
               setBgDark('')
               setTheme('white')
               document.body.classList.remove('dark')
          } else if (color === 'dark') {
               setBgDark('active_white')
               document.body.classList.add('dark')
               setTheme('dark')
               localStorage.setItem('mode','dark')
               setBgWhite('')
          }
     }

     return (
          <div className='dark_mode'>
               <div onClick={() => darkMode('white')} className={`item ${bgwhite}`}>
                    <i class="bi bi-brightness-high-fill"></i>
               </div>
               <div onClick={() => darkMode('dark')} className={`item ${bgdark}`}>
                    <i class="bi bi-moon-fill"></i>
               </div>
          </div>
     )
}

export default DarkMode