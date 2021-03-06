import React from 'react'

const Skill = () => {
     return (
          <div id='skill' className='skill'>
               <div className="font_bold">
                    Skills
               </div>
               <div className="font_medium">
                    The technology I know
               </div>
               <div className="icon_group">
                    <div className="item">
                         <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53199999999998"><path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26" /><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a" /><path d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z" fill="#fff" /></svg>
                         <div className="text">
                              Html5
                         </div>
                    </div>
                    <div className="item">
                         <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53"><path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba" /><path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7" /><path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff" /></svg>
                         <div className="text">
                              css and css frameworks
                         </div>
                    </div>
                    <div className="item">
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53199999999998"><path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e9ca32"/><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ffde25"/><g fill="#fff"><path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z"/></g></svg>
                         <div className="text">
                              javascript (es6+)
                         </div>
                    </div>
                    <div className="item">
                         <img src="/images/React-icon.svg.png" alt="" />
                         <div className="text">
                              react and redux
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Skill