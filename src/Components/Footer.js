import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              PureHealth
            </p>
            <p className="ft-description">
              Talk to online doctors and get medical advice, online
              prescriptions, refills and medical notes within minutes. On-demand
              healthcare services at your fingertips.
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Pediatrics</a>
            </li>
            <li>
              <a href="#services">Mental Health</a>
            </li>
            <li>
              <a href="#services">Nutrition and Wellness</a>
            </li>
            <li>
              <a href="#services">Prescription</a>
            </li>
            <li>
              <a href="#services">Insights for doctors</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>General Info</Link>
            </li>
            <li>
              <Link to={"/legal"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/legal"}>Terms of Services</Link>
            </li>
            <li>
              <Link to={"/legal"}>Consultations</Link>
            </li>
            <li>
              <Link to={"/legal"}>How it Works</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@PureHealth.com">support@PureHealth.com</a>
            </li>
            <li>
              <a href="mailto:appointment@PureHealth.com">
                appointment@PureHealth.com
              </a>
            </li>
            <li>
              <a href="tel:+022 5454 5252">+022 5454 5252</a>
            </li>
            <li>
              <a href="tel:+022 2326 6232">+022 2326 6232</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2013-2023 PureHealth. All rights reserved.</p>

        <ul className="ft-social-links">
          <li>
            <a
              href="https://www.linkedin.com/in/meet-suthar-140306264/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Meet5801"
              title="FaceBook"
              target="_blank"
              rel="noopener noreferrer"
            >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24">
  <path fill="currentColor" d="M12 .297C5.371.297 0 5.644 0 12.297c0 5.446 3.589 10.079 8.548 11.715.625.115.854-.271.854-.604 0-.297-.011-1.083-.016-2.123-3.473.598-4.202-1.52-4.202-1.52-.567-1.404-1.383-1.777-1.383-1.777-1.134-.776.086-.76.086-.76 1.254.089 1.915 1.29 1.915 1.29 1.116 1.915 2.934 1.363 3.65 1.041.115-.822.436-1.378.793-1.695-2.77-.315-5.684-1.383-5.684-6.156 0-1.358.483-2.469 1.279-3.34-.127-.316-.557-1.586.123-3.303 0 0 1.047-.335 3.43 1.279 1-.278 2.066-.416 3.128-.42 1.061.004 2.126.142 3.128.42 2.38-1.614 3.426-1.279 3.426-1.279.682 1.717.251 2.987.124 3.303.799.871 1.277 1.982 1.277 3.34 0 4.785-2.918 5.837-5.699 6.145.448.385.846 1.146.846 2.313 0 1.671-.015 3.016-.015 3.429 0 .335.225.727.862.603 5.346-1.633 8.932-6.269 8.932-11.713C24 5.644 18.629.297 12 .297z"/>
</svg>

            </a>
          </li>

          <li>
            <a
              href="https://x.com/Meet48202371"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
