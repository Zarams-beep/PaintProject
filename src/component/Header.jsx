import rollerBrush from '../icons/roller-brush-svgrepo-com.svg';
import phone from '../icons/hand-holding-a-mobile-phone-svgrepo-com.svg';
import { BsEnvelopeAt } from "react-icons/bs";
import {FaMapMarkerAlt, FaFacebookF, FaTwitter, FaWhatsapp,FaRegCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
const Header=()=>{
    const [isSticky,setSticky] = useState(1)

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const maxScroll = 100;
          const newSticky = Math.max(1 - scrollTop / maxScroll, 0.6);
          setSticky(newSticky);
          console.log(scrollTop);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      const is992 = useMediaQuery({query:'(max-width:992px)'})
      const [isOpen,setIsopen] = useState(false)

      const isToggle=()=>{
        setIsopen(prev=>!prev)
      }

      const is580 = useMediaQuery({query:'(max-width:580px)'})
     
    return(
        <>
            <header className="mainHeader">
                <section className="sectionHeader">
                <div className="iconsLogo">
                    <img className="rollerBrush" src={rollerBrush} alt="rollerBrush" />
                    <p>Tropical Paints</p>
                </div>

                <div className={`allContacts ${is580? 'contactInvisile':''}`}>
                <div className="phoneNumber">
                    <img className='PhoneHeld' src={phone} alt="Phone in Hand" />
                    <div className="divNumbers">
                    <p><a href="tel:+1234567890">+1 (234) 567 890</a></p>
                    <p><a href="tel:+1234567890">+1 (234) 567 890</a></p>
                    
                    </div>
                </div>

                <div className="mail">
                    <BsEnvelopeAt style={{fontSize:'1.5rem', borderRight:'1px solid white', paddingRight: '8px'}}/>
                    <div className="mailList">
                        <p><a href="mailto:youremail@example.com">youremail@example.com</a></p>
                        <p><a href="mailto:youremail@example.com">youremail@example.com</a></p>
                        </div>
                </div>

                <div className="location">
                    <FaMapMarkerAlt style={{fontSize:'1.5rem', borderRight:'1px solid white', paddingRight: '8px'}}/>
                    <p className='address'>3742 Graystone Lakes, <br/>Macon GA Georgia,GA 307</p>
                </div>

                <div className={`socials ${is992?'invisibleSocials':''}`}>
                    <button className="facebook">
                        <a href="/facebook">
                        <FaFacebookF/></a>
                    </button>
                    <button className="whatsapp">
                        <a href="/w">
                        <FaWhatsapp/></a>
                    </button>
                    <button className="twitter">
                        <a href="/x">
                        <FaTwitter/></a>
                    </button>
                </div></div>
                
                </section>
            </header>

            <header className={`secondHeader ${isSticky<=0.6?'sticky':''}`} >
                <section className="secondSection">
                    {is992?<div className="socials">
                    <button className="facebook">
                        <a href="/facebook">
                        <FaFacebookF/></a>
                    </button>
                    <button className="whatsapp">
                        <a href="/w">
                        <FaWhatsapp/></a>
                    </button>
                    <button className="twitter">
                        <a href="/x">
                        <FaTwitter/></a>
                    </button>
                </div>:''}
                    <div className={`navigatePages ${is992?'invisibleNavigate':''}`}>
                    <Link to="/" className='linkHome'>
                        Home
                    </Link>
                    <Link to="/" className='linkAbout'>
                        About Us
                    </Link>
                    <Link to="/" className='linkPages'>
                        Pages
                    </Link>
                    <Link to="/" className='linkService'>
                        Services
                    </Link>
                    <Link to="/" className='linkProject'>
                       Projects
                    </Link>
                    <Link to="/" className='linkContact'>
                        Contact
                    </Link>
                    </div>

                    <div className={`appointContainer ${is992?'invisibleAppoint':''}`}>
                        
                        <button>
                        <FaRegCalendarAlt/>
                        <span>Make An Appointment</span>
                        </button>
                    </div>

                    {is992?<div className='flexAppoint'>
                        <p><FaRegCalendarAlt/></p>
                        <p className='flexLeft' onClick={isToggle}>{isOpen?<RxCross2/>:<IoMdMenu/>}</p>
                    </div>:''}
                </section>
            </header>
        </>
    )
}
export default Header