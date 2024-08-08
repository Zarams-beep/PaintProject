import rollerBrush from '../icons/roller-brush-svgrepo-com.svg';
import { FaRegMap } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
const Footer=()=>{

    return(
        <>
            <footer>
                <div className="painterContainer">
                    <div className="iconsLogo1">
                        <img className="rollerBrush" src={rollerBrush} alt="rollerBrush" />
                        <p>Tropical Paints</p>
                    </div>
                    <div className="notes">
                        <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p>
                    </div>
                </div>

                <div className="recentPost">
                    <h2>Recent Post</h2>
                    <div className="mainrecentPost">
                        <div className="smallGirdPost1">
                            <p className='img-p'><img src="/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="Placeholder"/></p>
                            <div className="girdNotes">
                            <h3>Omnicos directe</h3>
                            <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar.</p></div>
                        </div>
                        <div className="smallGirdPost2">
                            <p className='img-p'><img src="/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="Placeholder"/></p>
                            <div className="girdNotes">
                            <h3>Omnicos directe</h3>
                            <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar.</p></div>
                        </div></div>
                </div>

                <div className="instagramPost">
                    <h2>Instagram Post</h2>
                    <div className="instagram-gird">
                    <img src="/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="Placeholder"/>
                    <img src="/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="Placeholder"/>
                    <img src="/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="Placeholder"/>
                    <img src="/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="Placeholder"/>
                    <img src="/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="Placeholder"/>
                    <img src="/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="Placeholder"/></div>
                </div>

                <div className="contactInfo">
                    <h2>Contact Info</h2>
                    <p><FaRegMap className='cp'/> M1304 Minna, Niger State.</p>
                    <p><MdOutlineEmail className='cp'/> placeholder@check.com</p>
                    <p><FaSquarePhone className='cp'/> 12004569999</p>
                </div>
            </footer>
        </>
    )
}
export default Footer