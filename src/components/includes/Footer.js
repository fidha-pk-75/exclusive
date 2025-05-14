import send from'../../assets/images/icon-send.svg';
import qrcode from '../../assets/images/Qr Code.png';
import googleplay from '../../assets/images/GooglePlay.png';
import appstore from '../../assets/images/AppStore.png'
import facebook from '../../assets/images/Icon-Facebook.svg';
import twitter from '../../assets/images/Icon-Twitter.svg';
import intagram from '../../assets/images/icon-instagram.svg';
import linkedin from '../../assets/images/Icon-Linkedin.svg';
import copyright from '../../assets/images/Group.svg'
import'../../components/includes/product.css'
function Footer() {
  return (
    <>
      <div className='footercontainer'>
        <div className='footercontents'>

          <div className='footercntnt'>
            <div className='sub'>
              <a href='/' className='logo'><h1>Exclusive</h1></a>
              <h3 className='footerhead'>Subscribe</h3> 
              <p>Get 10% off your first order</p> 
            </div>
            <div className='footeremail'>
              <input placeholder='Enter Your email'/>
              <img src={send} alt='send'/>
            </div>
          </div>

          <div className='footercontent'>
            <div className='footerheadcontainer'>
              <h3 className='footerhead'>Support</h3>
            </div>
            <div className='footeritems'>
              <ul>
                <li><a href='/'> 111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a></li>
                <li><a href='/'>exclusive@gmail.com</a></li>
                <li><a href='/'>+88015-88888-9999</a></li>
              </ul>
            </div>
          </div>

          <div className='footercontent'>
            <div className='footerheadcontainer'>
              <h3 className='footerhead'>Account</h3>
            </div>
            <div className='footeritems'>
              <ul>
                <li><a href='/'>My Account</a></li>
                <li><a href='/'>Login / Register</a></li>
                <li><a href='/'>Cart</a></li>
                <li><a href='/'>wishlist</a></li>
                <li><a href='/'>shop</a></li>
              </ul>
            </div>
          </div>

          <div className='footercontent'>
            <div className='footerheadcontainer'>
              <h3 className='footerhead'>Quick Link</h3>
            </div>
            <div className='footeritems'>
              <ul>
                <li><a href='/'>Privacy Policy</a></li>
                <li><a href='/'>Terms Of Use</a></li>
                <li><a href='/'>FAQ</a></li>
                <li><a href='/'>Contact</a></li>
              </ul>
            </div>
          </div>

          <div className='footercontent'>
            <div className='footerheadcontainer'>
              <h3 className='footerhead'>Download App</h3>
            </div>
            <div className='footerdownload'>
              <span>Save $3 with App New User Only</span>
              <div className='downloadoptions'>
                <div className='qrcode'>
                  <a href='/'><img src={qrcode} alt='QRcode'/></a>
                </div>
                <div className='stores'>
                  <div>
                    <a href='/'><img src={googleplay} alt='Google Play'/></a>
                  </div>
                  <div>
                    <a href='/'><img src={appstore} alt='App Store'/></a>
                  </div>
                </div>
              </div>
            </div>

            <div className='social'>
              <div className='app'>
                <a href='/facebook'><img src={facebook} alt='facebook'/></a>
              </div>
              <div className='app'>
                <a href='/twitter'><img src={twitter} alt='twitter'/></a>
              </div>
              <div className='app'>
                <a href='/instagram'><img src={intagram} alt='instagram'/></a>
              </div>
              <div className='app'>
                <a href='/linkedin'><img src={linkedin} alt='linkedin'/></a>
              </div>
            </div>
          </div>
          
        </div>
        <div className='mostdown'>
          <div className='copyright'>
            <div className='copyrighticon'>
              <img src={copyright} alt='copyright'/>
            </div>
            <p>Copyright Rimel 2022. All right reserved</p>
          </div>
        </div>
      </div>
      

    </>
  )
}

export default Footer
