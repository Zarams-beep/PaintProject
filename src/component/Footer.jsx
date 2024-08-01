import rollerBrush from '../icons/roller-brush-svgrepo-com.svg';
const Footer=()=>{

    return(
        <>
            <footer>
                <div className="painterContainer">
                    <div className="iconsLogo">
                        <img className="rollerBrush" src={rollerBrush} alt="rollerBrush" />
                        <p>Tropical Paints</p>
                    </div>
                </div>

                <div className="recentPost">

                </div>

                <div className="instagramPost">

                </div>

                <div className="contactInfo">

                </div>
            </footer>
        </>
    )
}
export default Footer