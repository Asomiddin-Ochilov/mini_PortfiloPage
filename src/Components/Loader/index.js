import React, { useState } from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";
const Loader = ({loading}) => {

    
     let [color, setColor] = useState("#0e0e1b");
     return (
          <div className='loader_page'>
           <ScaleLoader color={color} size={100} loading={loading} />
          </div>
     )
}

export default Loader