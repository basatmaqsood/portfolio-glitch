import { FaGithub, FaMedium, FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="soc">
        <a target="_blank" href="https://linkedin.com/in/basatmaqsood">
          <FaLinkedin size={30} />
        </a>
        <a target="_blank" href="https://github.com/basatmaqsood">
          <FaGithub size={30} />
        </a>
        <a target="_blank" href="https://www.twitter.com/basatmaqsood">
          <FaSquareXTwitter size={30} />
        </a>
        <a target="_blank" href="https://wa.me/qr/JCAM53BXMMRRD1">
          <FaWhatsappSquare size={30} />
        </a>
      </div>
      <div className="copy">
        © {new Date().getFullYear()} Basat Maqsood. All rights reserved.
      </div>
      <div className="clr" />
    </footer>
  );
};
export default Footer;
