import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Enter your email address to receive the rotary club of Kaimosi news
          letter
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/wearerotry">We are Rotary</Link>
            <Link to="/clubleaders">Club Leaders</Link>
            <Link to="/presidentofrotaryclubofkaimosi">
              President of rotary club of Kaimosi
            </Link>
            <Link to="/historyofrotaryclubinternational">
              History of Rotary club International
            </Link>
            <Link to="/historyofrotaryclubinkenya">
              History of Rotary club in Kenya
            </Link>
            <Link to="/historyofrotaryclubofkaimosi">
              History of Rotary club of Kaimosi
            </Link>
          </div>
          <div class="footer-link-items">
            <h2>Projects and Partners</h2>
            <Link to="/serviceprojects">Service projects</Link>
            <Link to="/rotarysplashpark">Rotary Splash Park</Link>
            <Link to="/projectpartners">Project Partners</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Membership</h2>
            <Link to="/reasonstojoinrotary">10 Reasons to join rotary</Link>
            <Link to="/kaimosirotaryserviceprojects">
              Kaimosi rotary service projects
            </Link>
            <Link to="/whatdoesrotarydo">What does rotary do?</Link>
          </div>
          <div class="footer-link-items">
            <h2>Events</h2>
            <Link to="/clubevents">Club Events</Link>
            <Link to="/districtevents">District Events</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Kaimosi Rotary School
            </Link>
          </div>
          <small class="website-rights">Kaimosi Rotary Club © 2020</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
