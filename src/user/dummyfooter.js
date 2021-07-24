import React from 'react';
import './dummyfooter.css';
const dummyfooter = () => {
    return (
        <div className="dfooter-cpyrt">
            <div className="dfooter">

                <div className="dleft_footer">
                    <div className="dfooter_info">
                        <div className="dfooter_head">Crypto Tracker</div><br /><br />
                        <div className="dfooter_about"> We are leading company in crypto market.We have helped many organisation in the sector of investing.We are helping many people to invest in crypto at ease.</div><br /><br />
                        <div className="dsocial_media">
                            <i className='fab fa-facebook-f'></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className='fab fa-instagram'></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className='fab fa-linkedin-in'></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className='fab fa-youtube'></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                </div>
                <div className="dright_footer">
                    <div className="dcontact_footer">
                        <div className="dcontact_head">Contact-Us</div>
                        <br /><br />
                        <div clasName="dcontact_info">
                            <p>  <i class='fas fa-phone dficon'></i> &nbsp; 9999999999<br /><br />
                                <i class='fas fa-envelope dficon'></i> &nbsp; cryptotracker@gmail.com<br /><br />
                                <i class='fa fa-home dficon'></i> &nbsp; 10-SkyHigh complex, Bombay 11111,India<br /><br />
                            </p>
                        </div>
                    </div>

                </div>


            </div>
            <div className="dcopyright">Copyright &#169; 2021 All Rights Reserved by Crypto Tracker</div>
        </div>
    )
}

export default dummyfooter;




