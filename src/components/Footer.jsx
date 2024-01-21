import React from 'react'
import './footer.css'
const Footer=()=>{
const date=new Date().getFullYear()

    return (
<>
    <div className='footer'>
    <h4>Designed and Developed by Dhiraj Shah</h4>
    <h2>dhiru.co <span>  © {date}</span></h2>
    <h4>Copyright © dhiru</h4>

    </div>
</>
    )
}
export default Footer;