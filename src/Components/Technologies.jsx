import React, { useContext } from 'react'
import Navbar from './Navbar'
import "./techno.css"
import {Link,Outlet} from 'react-router-dom'
import { globaldata, localdata } from '../App'

const Technologies = () => {
  const check = useContext(globaldata)
  console.log(check);
  const check2 = useContext(localdata)
  console.log(check2);
  return (
    <>

        <Navbar/>
        <div className='maintechbox'>
            <div className='leftpanel'>
             <Link to='html'><div>HTML</div></Link>
             <Link to='css'><div>CSS</div></Link>
             <Link to='js'><div>Javascript</div></Link>
             <Link to='react'><div>React</div></Link>
            </div>
            <div className='rightpanel'>
             <Outlet/>
            </div>
        </div>
    </>
  )
}

export default Technologies