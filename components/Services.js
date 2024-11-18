import { GrServer } from "react-icons/gr";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaGear } from "react-icons/fa6";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";

const Services = () => {
  return (
    <div className="section service">
      <div className="content">
        <div className="title">
          <div className="title_inner">My Services</div>
        </div>
        <div className="service-items">
          <div className="service-item">
            <div className="icon">
              <HiMiniComputerDesktop />{" "}
            </div>
            <div className="name">Front-end</div>
            <p>
              Crafting modern, responsive, and visually engaging user interfaces
              for websites and applications.
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <GrServer />
            </div>
            <div className="name">Back-End Development</div>
            <p>
              Developing robust and scalable server-side solutions to power your
              applications effectively.
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <FaGear />{" "}
            </div>
            <div className="name">Full-Stack Development</div>
            <p>
              Offering end-to-end development solutions by integrating front-end
              and back-end systems seamlessly.
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <MdLocalGroceryStore />{" "}
            </div>
            <div className="name">E-Commerce Solutions</div>
            <p>
              Creating custom e-commerce platforms to help businesses sell
              products and manage operations online.
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <FaGlobe />{" "}
            </div>
            <div className="name">Personal Portfolio</div>
            <p>
              Building professional, visually appealing portfolio websites to
              showcase your skills and achievements.
            </p>
          </div>
          <div className="service-item">
            <div className="icon">
              <AiFillApi />{" "}
            </div>
            <div className="name">API Integration</div>
            <p>
              Integrating third-party APIs to enhance functionality and provide
              dynamic, data-driven solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
