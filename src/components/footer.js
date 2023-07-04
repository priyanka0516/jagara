import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Link } from 'react-router-dom';
 
const Footer =()=>
{
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
<>
<div className='footer'>
  <div className='container'>
    <div className='row'>
      <div className='col-sm-4 col-xs-12 p-0'>
        <div className='footer-item address'>
          <ul>
            <li>
              <h6 className='footer-title'>Corporate Office</h6>
              <div className="des">
                <ul>
                  <li className='flex'><span></span>dfty</li>
                  <li className='flex'><span></span><Link to="mailto:info@.co.in">abc@.com</Link></li>
                  <li className='flex'><span></span><Link to="tel: +91 6371499414">+91 56576876</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='col-sm-4 col-xs-12'>
        <div className='footer-item'>
          <div className="footer-title">Our Services</div>
            <ul>
              <li className="animate"><Link to="/" onClick={scrollToTop} >Home</Link></li>
              <li className="animate"><Link to="/blockchain" onClick={scrollToTop} >About</Link></li>
            </ul>
        </div>
      </div>
      <div className='col-sm-4 col-xs-12'>
        <div className='footer-item'>
          <div className="footer-title">Social media</div>
           
          </div>
        </div>
      </div>
    </div>

</div>
      <div className="copyright">
            <p>Copyright © 2023 <a href="https://quotus.co.in">Quotus Software solutions Pvt. Ltd.</a></p>
        </div>
 <Button id="top-bottom"onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}}>
     <FaArrowCircleUp  />
    </Button>
</> 
)
}
export default Footer;