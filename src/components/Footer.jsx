import Container from "./Container";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12 ">
      <Container>
        <div className="grid md:grid-cols-5 gap-8">
        
          <div>
            <h3 className="text-white font-semibold mb-2">
              Customer — Ticket System
            </h3>
            <p className="text-sm">
              Customer — Ticket System is a modern platform designed to
              streamline support requests and improve customer satisfaction. It
              allows users to submit issues quickly, track progress in real
              time, and receive timely updates.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Manager</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Our Apps</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href=""
                  target=""
                  rel=""
                  className="flex items-center gap-2 hover:text-blue-500 "
                >
                  <CiFacebook /> CS-Facebook
                </a>
              </li>
              <li>
                <a
                  href=""
                  target=""
                  rel=""
                  className="flex items-center gap-2 hover:text-blue-400"
                >
                  <CiLinkedin /> Cs-Linkedin
                </a>
              </li>
              <li>
                <a
                  href=""
                  target=""
                  rel=""
                  className="flex items-center gap-2 hover:text-gray-300"
                >
                  <FaXTwitter />
                  CS-Twitter
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex items-center gap-2 hover:text-red-400"
                >
                  <MdOutlineMailOutline /> support@cs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-left md:text-center text-gray-500 text-sm mt-8">
          © 2025 CS — Ticket System.
          <br className="block md:hidden" /> All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
