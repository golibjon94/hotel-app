import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import GoogleIcon from '@mui/icons-material/Google';
import PhoneIcon from '@mui/icons-material/Phone';

function Footer() {
  return (
    <footer>
      
        <div className="footer-content">
        <ul className="socials">
                <li className='phone'><a  href=""><PhoneIcon/></a></li>
                <li className='facebook'><a className='facebook' href="https://www.facebook.com"><FacebookIcon/></a></li>
                <li className='twitter'><a  href="https://www.twitter.com"><TwitterIcon/></a></li>
                <li className='instagram'><a  href="https://www.instagram.com"><InstagramIcon/></a></li>
                <li className='telegram'><a  href="https://www.telegram.org"><TelegramIcon/></a></li>
                <li className='google'><a  href="https://www.google.com"><GoogleIcon/></a></li>
            </ul>
            <h3>Amazing Hotel</h3>
          
            <p>
            Hyatt Regency Tashkent mehmonxonasi biznes va dam olish maqsadida sayohat qiluvchilar uchun ajoyib joyni taklif etadi.
             Keng mehmon xonangizda o'zingizni uyingizdagidek his eting,
              to'rtta restoran va barlarimizdan birida ovqatlaning, 
              kengash yig'ilishi yoki eksklyuziv tadbir o'tkazing 
              va hovuz va kurort zonamizda dam olishni unutmang.
               Bu yerda siz Toshkentda bo'lgan vaqtingiz davomida unumdorlik va dam olish doimiy ekanligini bilib olasiz.
                  </p>
            
        </div>
        <div className="footer-bottom">
            <p>copyright &copy; <a href="#">G'olibjon Turakulov</a>  </p>
                    <div className="footer-menu">
                      <ul className="f-menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Blog</a></li>
                      </ul>
                    </div>
        </div>

    </footer>
  )
}

export default Footer



// <div>
// <footer classNameName="footer">
//       <span classNameName="footer-title">G'olibjon Turakulov</span>
//       <p>Copyright @2022. All Rights Reserved.</p>
//   </footer>
// </div>