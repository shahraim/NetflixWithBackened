import React from "react";
import { Github } from 'lucide-react';
function Footer() {
  return (
    <div className="footer">
      <p>
        <a href="#">Questions? Contact us.</a>
      </p>
      <div className="footerBox">
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Ways to Watch</a>
          </li>
          <li>
            <a href="#">Cookie Preferences</a>
          </li>
          <li>
            <a href="#">Speed Test</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Corporate Information</a>
          </li>
          <li>
            <a href="#">Legal Notices</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#"> Only on Netflix</a>
          </li>
        </ul>
      </div>
      <div className="selectArea">
        <select name="language" id="english">
          <option value="english" selected>
            <span>English</span>
          </option>
        </select>
        <p>
          Netflix Pakistan correct or made by <a href="https://www.github.com/shahraim" target="blank"><span> <Github size={18} /></span> Shahraim Khan</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
