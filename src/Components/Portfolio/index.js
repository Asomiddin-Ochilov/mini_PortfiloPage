import React from 'react'

const Portfolio = () => {
     return (
          <div id='port' className='portfolio'>
               <div className="font_bold">
                    Portfolio
               </div>
               <div className="item">
                    <img src="/images/img.png" alt="" />
                    <a href="#" target={'_blank'}> Online fashion store - Homepage </a>
               </div>
               <div className="item">
                    <img src="/images/img2.png" alt="" />
                    <a href="#" target={'_blank'}> Online fashion store - Homepage </a>
               </div>
               <div className="item">
                    <img src="/images/img3.png" alt="" />
                    <a href="#" target={'_blank'}> Online fashion store - Homepage </a>
               </div>
          </div>
     )
}

export default Portfolio