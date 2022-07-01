import React from 'react'

const About = () => {
     return (
          <div id='about' className='about'>
               <div className="user_name">
                    <div className="left font_bold">
                         LastName
                         <br />
                         FirstName
                    </div>
                    <div className="status font_medium">
                         <div> Frontend Developer </div>
                         <div> 0 years , Uzbekistan </div>
                    </div>
                    <div className="right">
                         <div className="language"> Ru </div>
                         <span></span>
                         <div className="language"> Eng </div>
                    </div>
               </div>
               <div className='center'>
                    <img src="/images/BSPP2266.png" alt="" />
               </div>
               <div className="description">
                    <div className='font_bold'>
                         About me
                    </div>

                    <div className="text">
                         Hello, I am LastName - Frontend Developer from Uzbekistan.
                         I am interested in web programming and everything related to it.
                    </div>
                    <div className="text">
                         I studied at the  IT Academy in the Frontend Programmer course.
                    </div>
                    <div className="text">
                    Ready to do great projects with great people.
                    </div>

                         
               </div>
          </div>
     )
}

export default About