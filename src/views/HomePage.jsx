import { LiaBrushSolid } from "react-icons/lia";
import { LuPaintbrush, LuPaintbrush2 } from "react-icons/lu";
import { RiPaintBrushFill } from "react-icons/ri";
import { GiSpray,GiDrippingKnife, GiPaintBucket, GiPencilBrush, GiTheaterCurtains } from "react-icons/gi";
import { SiCanvas } from "react-icons/si";
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { TiSocialFacebookCircular,TiSocialLinkedin,TiSocialGooglePlusCircular,TiSocialTwitter } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const HomePage=()=>{
    const [floatUp,setFloatUp] = useState(1)

    const indexRef = useRef()

    useEffect(() => {
        const handleFloating = () => {
          const scrollTop = window.scrollY;
          const maxScroll = indexRef.current;
          const newFloatUp = Math.max(1 - scrollTop / maxScroll, 0.6);
          setFloatUp(newFloatUp);
        };
    
        window.addEventListener("scroll", handleFloating);
    
        return () => {
          window.removeEventListener("scroll", handleFloating);
        };
      }, []);

        const sections = [{index:600,setState:setFloatUp},
            {index:800,setState:setFloatUp},
            {index:950, setState:setFloatUp},
            {index:1100,setState:setFloatUp},
            {index:1300,setState:setFloatUp},
            {index:1500,setState:setFloatUp},
            {index:1700,setState:setFloatUp},
            {index:1900,setState:setFloatUp}
        ]

        useEffect(() => {
            const handleSectionScrollUp = () => {
              const scrollTop = window.scrollY;
              sections.forEach(section => {
                if (scrollTop >= section.index) {
                  section.setState(Math.max(1 - scrollTop / section.index, 0.6));
                }
              });
            };
        
            window.addEventListener("scroll", handleSectionScrollUp);})

            const [pictureTracker, setPictureTracker] = useState(0);

            useEffect(() => {
                const interval = setInterval(() => {
                    setPictureTracker(prevTracker => prevTracker + 1);
                }, 1000);
            
                return () => clearInterval(interval);
            }, []); 
            
            const is992 = useMediaQuery({query:'(max-width:992px)'})
    return(
        <>
            <main className="mainPage">
                {/*introductory part  */}
                <section className="introductory">
                    <div className="introContainer">
                        <h2>
                        <span style={{color:'rgb(89, 138, 138)'}}>Painting,</span><br/> Where Colors Dance <br/><span style={{color:'rgb(89, 138, 138)'}}>and Walls Sing</span>
                        </h2>
                        <p>Where colors breathe life onto canvas, whispering stories of beauty and passion with every brushstroke.</p></div>
                </section>

                {/* second part */}
                <section className="secondPart">
                    <div className="chooseUs">
                        <h2 className={` ${floatUp<=0.6?'increase':''}`}>W<span style={{borderBottom:'1px solid darkslategray'}}>hy Choose Us <LiaBrushSolid className="brush"/> 
                        </span></h2>
                        <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p>
                    </div>

                    <div className="gridchooseUs">
                        {/* small container 1 */}
                            
                            <div className={`smallcontainer1 ${floatUp<=0.6?'up':''}`}>
                                <LuPaintbrush className="icons"/>
                                <h2>Window Washing</h2>
                                <p>Li lingues differe solmen in grammatica <br/>pronunciation commun vocabules.</p>
                            </div>

                         {/* small container 2 */}
                            <div className={`smallcontainer2 ${floatUp<=0.6?'up1':''}`}>
                                <GiSpray className="icons"/>
                                <h2>Color Proof</h2>
                                <p>Li lingues differe solmen in grammatica pronunciation commun vocabules.</p>
                            </div>

                         {/* small container 3 */}
                            <div className={`smallcontainer3 ${floatUp<=0.6?'up2':''}`}>
                                <GiDrippingKnife className="icons"/>
                                <h2>Mildew Removal</h2>
                                <p>Li lingues differe solmen in grammatica pronunciation commun vocabules.</p>
                            </div>

                        {/* small container 4 */}
                            <div className={`smallcontainer4 ${floatUp<=0.6?'up3':''}`}>
                                <RiPaintBrushFill className="icons"/>
                                <h2>Faux Finishes</h2>
                                <p>Li lingues differe solmen in grammatica pronunciation commun vocabules.</p>
                            </div>

                        {/* small container 5 */}
                            <div className={`smallcontainer5 ${floatUp<=0.6?'up4':''}`}>
                                <GiPaintBucket className="icons"/>
                                <h2>Water Proofing</h2>
                                <p>Li lingues differe solmen in grammatica pronunciation commun vocabules.</p>
                            </div>

                        {/* small container 6 */}
                            <div className={`smallcontainer6 ${floatUp<=0.6?'up5':''}`}>
                            <SiCanvas className="icons"/>
                                <h2>Pre-Point Demo</h2>
                                <p>Li lingues differe solmen in grammatica pronunciation commun vocabules.</p>
                            </div>
                        </div>
                </section>

                {/* third part */}
                <section className="thirdPart">
                    <div className="paintService">
                        <h2 className={`${floatUp<=0.6?'h2Third':''}`}>Our Pain<span style={{borderBottom:'1px solid darkslategray'}}>ting Services <LiaBrushSolid className="brush"/> </span></h2>
                        <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p></div>
                    
                    <div className="paintServiceGird">
                        {/* first part */}
                        <div className={`paintContainer1 ${floatUp<=0.6?'sidePart':''}`}>
                            <div className="btnMsg">
                                <LuPaintbrush2 style={{transform:'rotate(50deg)'}} className="icon"/>
                            </div>
                            <div className="secondPaintContainer">
                                <h2>Regular Painting</h2>
                                <p>Li lingues differe solmen in grammatica <br/>pronunciation commun vocabules.</p>
                            </div>
                        </div>

                        {/* second part */}
                        <div className={`paintContainer1 ${floatUp<=0.6?'sidePart1':''}`}>
                            <div className="btnMsg">
                                <GiPencilBrush/>
                            </div>
                            <div className="secondPaintContainer">
                                <h2>Residential Interior</h2>
                                <p>Li lingues differe solmen in grammatica<br/> pronunciation commun vocabules.</p>
                            </div>
                        </div>

                        {/* third part */}
                        <div className={`paintContainer1 ${floatUp<=0.6?'sidePart2':''}`}>
                            <div className="btnMsg">
                                <GiSpray/>
                            </div>
                            <div className="secondPaintContainer">
                                <h2>Regular Eco Xpress Painting</h2>
                                <p>Li lingues differe solmen in grammatica<br/> pronunciation commun vocabules.</p>
                            </div>
                        </div>

                        {/* fourth part */}
                        <div className={`paintContainer1 ${floatUp<=0.6?'sidePart3':''}`}>
                        <div className="btnMsg">
                                <SiCanvas/>
                            </div>
                            <div className="secondPaintContainer">
                                <h2>Water Proof Solution</h2>
                                <p>Li lingues differe solmen in grammatica<br/> pronunciation commun vocabules.</p>
                            </div>
                        </div>

                        {/* fifth part */}
                        <div className={`paintContainer1 ${floatUp<=0.6?'sidePart4':''}`}>
                            <div className="btnMsg">
                                <GiPaintBucket/>
                            </div>
                            <div className="secondPaintContainer">
                                <h2>Water Solutions</h2>
                                <p>Li lingues differe solmen in grammatica<br/> pronunciation commun vocabules.</p>
                            </div>
                        </div>

                        {/* sixth part */}
                        <div className={`paintContainer1 ${floatUp<=0.6?'sidePart5':''}`}>
                            <div className="btnMsg">
                                <GiTheaterCurtains/>
                            </div>
                            <div className="secondPaintContainer">
                                <h2>House Painting</h2>
                                <p>Li lingues differe solmen in grammatica<br/> pronunciation commun vocabules.</p>
                            </div>
                        </div>
                    </div>
                    
                </section>

                {/* fourth part */}
                <section className="fourthPart">
                <div className="TeamService">
                        <h2 style={{borderBottom:'1px solid darkslategray'}}className={`${floatUp<=0.6?'h2Fourth':''}`}>Our Team <LiaBrushSolid className="brush"/></h2>
                        <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p></div>
                <div className="teamMembers">

                    {/* Teammate 1 */}
                    <div className={`teammate teammate1 ${floatUp<=0.6?'up':''}`}>
                        <img src="../src/assets/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="Paulene Andrew" />
                        <h4>Paulene Andrew</h4>
                        <h6>Water Color Painter</h6>

                        <div className="floatSocials">
                           <button> <Link to='/' className="linkStyle"><TiSocialFacebookCircular/></Link>
                            </button>
                            <button><Link to='/' className="linkStyle"><TiSocialLinkedin/></Link></button>
                            <button><Link to='/' className="linkStyle"><TiSocialTwitter/></Link></button>
                            <button><Link to='/' className="linkStyle"><TiSocialGooglePlusCircular/></Link></button>
                        </div>
                    </div>

                    {/* Teammate 2 */}
                    <div className={`teammate  teammate2 ${floatUp<=0.6?'up1':''}`}>
                        <img src="../src/assets/luigi-estuye-lucreative-5wKvYUcWPYQ-unsplash.jpg" alt="Paul Isreal" />
                        <h4>Paul Isreal</h4>
                        <h6>House Painter</h6>

                        <div className="floatSocials">
                           <button> <Link to='/' className="linkStyle"><TiSocialFacebookCircular/></Link>
                            </button>
                            <button><Link to='/' className="linkStyle"><TiSocialLinkedin/></Link></button>
                            <button><Link to='/' className="linkStyle"><TiSocialTwitter/></Link></button>
                            <button><Link to='/' className="linkStyle"><TiSocialGooglePlusCircular/></Link></button>
                        </div>
                    </div>
                    
                    
                    {/* Teammate 3 */}
                    <div className={`teammate teammate3 ${floatUp<=0.6?'up2':''}`}>
                        <img src="../src/assets/tim-mossholder-bwbauFRbNyo-unsplash.jpg" alt="Robert Micheal" />
                        <h4>Robert Micheal</h4>
                        <h6>Wood Painter</h6>

                        <div className="floatSocials">
                           <button> <Link to='/' className="linkStyle"><TiSocialFacebookCircular/></Link>
                            </button>
                            <button><Link to='/' className="linkStyle"><TiSocialLinkedin/></Link></button>
                            <button><Link to='/' className="linkStyle"><TiSocialTwitter/></Link></button>
                            <button><Link to='/' className="linkStyle"><TiSocialGooglePlusCircular/></Link></button>
                        </div>
                    </div>

                    {/* Teammate 4 */}
                    <div className={`teammate teammate4 ${floatUp<=0.6?'up3':''}`}>
                        <img src="../src/assets/johan-mouchet-qDLdKMBmC6o-unsplash.jpg" alt="Oliver Josh" />
                        <h4>Oliver Josh</h4>
                        <h6>Color Painter</h6>

                        <div className="floatSocials">
                           <button> <Link to='/' className="linkStyle"><TiSocialFacebookCircular/></Link>
                            </button>
                            <button><Link to='/' className="linkStyle"><TiSocialLinkedin/></Link></button>
                            <button><Link to='/' className="linkStyle"><TiSocialTwitter/></Link></button>
                            <button><Link to='/' className="linkStyle"><TiSocialGooglePlusCircular/></Link></button>
                        </div>
                    </div>
                </div>
                </section>

                {/* Fifth part */}
                <section className="fifthPart">
                <div className="priceService">
                        <h2 style={{borderBottom:'1px solid darkslategray'}}className={`${floatUp<=0.6?'h2Fifth':''}`}>Our Price <LiaBrushSolid className="brush"/></h2>
                        <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p></div>
                        
                        <div className="fifthFlex">

                            {/* single visit */}
                            <div className={`singleVisit ${floatUp<=0.6?'sideleft':''}`}>
                                <div className="singleVisit1">
                                <h2>SINGLE VISIT</h2>
                                <button>$45<br/><span className="it">/Month</span></button>
                                </div>
                                <div className="singleVisit2">
                                    <p><FaCheck style={{color:'darkslategray'}}/>  2 Workers</p>
                                    <p><FaCheck style={{color:'darkslategray'}}/>  15 Days</p>
                                    <p><FaCheck style={{color:'darkslategray'}}/> Extra Feature</p>
                                    <p><MdCancel style={{color:'darkred'}}/> On Demand</p>
                                    <p style={{ fontSize:'1.1rem', color:'gray'}}>Extra Charges are based on Extra Work taken.</p>
                                    <button>Buy Service</button>
                                </div>

                            </div>

                            {/* On demand */}
                            <div className={`demand ${floatUp<=0.6?'sideright':''}`}>
                                <div className="demand1">
                                <h2>ON DEMAND</h2>
                                <button>$125<br/><span className="it">/Month</span></button>
                                </div>
                                <div className="demand2">
                                    <p><FaCheck style={{color:'darkslategray'}}/> 5 Workers</p>
                                    <p><FaCheck style={{color:'darkslategray'}}/> 5 Days</p>
                                    <p><FaCheck style={{color:'darkslategray'}}/> Extra Feature</p>
                                    <p><FaCheck style={{color:'darkslategray'}}/> On Demand</p>
                                    <p style={{fontSize:'1.1rem', color:'gray'}}>Extra Charges are based on Extra Work taken.</p>
                                    <button>Buy Service</button>
                                </div>

                            </div>

                            {/* maintain */}
                            <div className={`maintain ${floatUp<=0.6?'sideright':''}`}>
                                <div className="maintain1">
                                <h2>MAINTENANCE</h2>
                                <button>$130<br/><span className="it">/Month</span></button>
                                </div>
                                <div className="maintain2">
                                    <p><FaCheck style={{color:'darkslategray'}}/>  3 Workers</p>
                                    <p><MdCancel style={{color:'darkred'}}/> 15 Days</p>
                                    <p><FaCheck style={{color:'darkslategray'}}/>  Extra Feature</p>
                                    <p><FaCheck style={{color:'darkslategray'}}/>  On Demand</p>
                                    <p style={{fontSize:'1.1rem', color:'gray'}}>Extra Charges are based on Extra Work taken.</p>
                                    <button>Buy Service</button>
                                </div>

                            </div>
                        </div>
                        </section>

                {/* Sixth part */}
                <section className="sixthPart">
                <div className="testService">
                        <h2 style={{borderBottom:'1px solid darkslategray'}}className={`${floatUp<=0.6?'h2Six':''}`}>Our Testimonial <LiaBrushSolid className="brush"/></h2>
                        <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p></div>
                    
                    <div className="testSlidesContainer">
                        {/* test slide 1 */}
                        <div className="testSlide1">
                            <img src="../src/assets/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="Racheal's Profile Picture" />
                            <div className="comment">
                                <h3>Racheal Paul</h3>
                                <h4>CEO</h4>
                                <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p>
                            </div>
                        </div>
                        {/* test slide 2 */}
                        <div className="testSlide2">
                            <img src="../src/assets/tim-mossholder-bwbauFRbNyo-unsplash.jpg" alt="Alex Profile Picture" />
                            <div className="comment">
                                <h3>Alex Mucheal</h3>
                                <h4>HR Manager</h4>
                                <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seventh part */}
                <section className="seventhPart">
                    <div className="projectService">
                        <h2 style={{borderBottom:'1px solid darkslategray'}}className={`${floatUp<=0.6?'h2Seven':''}`}>Our Painting Project <LiaBrushSolid className="brush"/></h2>
                        <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p></div>

                        <div className="projectShowcase">
                            <div className="project1">
                                <p><img src="../src/assets/luigi-estuye-lucreative-5wKvYUcWPYQ-unsplash.jpg" alt="placeholder" className="special-img"/></p>
                                <p><img src="../src/assets/luigi-estuye-lucreative-5wKvYUcWPYQ-unsplash.jpg" alt="placeholder" /></p>
                            </div>

                            <div className="project2">
                                <p><img src="../src/assets/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="placeholder" /></p>
                                <p><img src="../src/assets/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="placeholder" /></p>
                                <p><img src="../src/assets/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="placeholder" /></p>
                            </div>

                            <div className="project1">
                                <p><img src="../src/assets/johan-mouchet-qDLdKMBmC6o-unsplash.jpg" alt="placeholder" /></p>
                                <p><img src="../src/assets/johan-mouchet-qDLdKMBmC6o-unsplash.jpg" alt="placeholder" className="special-img"/></p>
                            </div>
                        </div>
                </section>

                {/* Eight part */}
                <section className="eightPart">
                    <div className="blogService">
                        <h2 style={{borderBottom:'1px solid darkslategray'}}className={`${floatUp<=0.6?'h2Eight':''}`}>Our Blog <LiaBrushSolid className="brush"/></h2>
                        <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p></div>

                        <div className="blogSlidesContainer">
                        {/* test slide 1 */}
                        <div className="blogSlide1">
                            <img src="../src/assets/muhammad-rahim-ali-auNr-4jnx8U-unsplash.jpg" alt="Racheal's Profile Picture" />
                            <div className="comment">
                                <h4>May 14, 2024</h4>
                                <h2>A Beautiful Daycare</h2>
                                <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p>
                            </div>
                        </div>
                        {/* test slide 2 */}
                        <div className="blogSlide2">
                            <img src="../src/assets/tim-mossholder-bwbauFRbNyo-unsplash.jpg" alt="Alex Profile Picture" />
                            <div className="comment">
                                <h4>May 14, 2024</h4>
                                <h2>A Beautiful Daycare</h2>
                                <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p>
                            </div>
                        </div>

                        {/* test slide 3 */}
                        <div className="blogSlide3">
                            <img src="../src/assets/tim-mossholder-bwbauFRbNyo-unsplash.jpg" alt="Alex Profile Picture" />
                            <div className="comment">
                                <h4>May 14, 2024</h4>
                                <h2>A Beautiful Daycare</h2>
                                <p>Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
            </main>
        </>
    )
}
export default HomePage