import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneIcon from "@mui/icons-material/Phone";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer_container">
        <div className="footer-content">
          <h2>Biz bilan bog'laning</h2>
          <h3>+998 71 000 00 00</h3>
          <h3>+998 99 000 00 00</h3>
          <h2>
            Bizni ijtimoiy tarmoqlarida <br />
            kuzating
          </h2>
          <ul className="socials">
            <li className="phone">
              <a href="+998710000000">
                <PhoneIcon />
              </a>
            </li>
            <li className="facebook">
              <a className="facebook" href="https://www.facebook.com">
                <FacebookIcon />
              </a>
            </li>
            <li className="twitter">
              <a href="https://www.twitter.com">
                <TwitterIcon />
              </a>
            </li>
            <li className="instagram">
              <a href="https://www.instagram.com">
                <InstagramIcon />
              </a>
            </li>
            <li className="telegram">
              <a href="https://www.telegram.org">
                <TelegramIcon />
              </a>
            </li>
            <li className="google">
              <a href="https://www.google.com">
                <GoogleIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_contact_info">
          <h3>Amazing Hotel</h3>

          <p>
            Amazing Hotel mehmonxonasi biznes va dam olish maqsadida sayohat
            qiluvchilar uchun ajoyib joyni taklif etadi. Keng mehmon xonangizda
            o'zingizni uyingizdagidek his eting, kengash yig'ilishi yoki
            eksklyuziv tadbir o'tkazing va hovuz va kurort zonamizda dam olishni
            unutmang. Bu yerda siz Toshkentda bo'lgan vaqtingiz davomida
            unumdorlik va dam olish doimiy ekanligini bilib olasiz.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          copyright &copy; 2022 <a href="#">G'olibjon Turakulov</a>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
