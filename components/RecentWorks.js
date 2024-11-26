"use client";
import { context } from "@/context/context";
import FsLightbox from "fslightbox-react";
import Isotope from "isotope-layout";
import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const galleryImages = {
  1: [
    "images/works/work1.jpg",
    "images/works/work2.jpg",
    "images/works/work3.jpg",
    "images/works/work4.jpg",
  ],
  2: [
    "images/works/work5.jpg",
    "images/works/work2.jpg",
    "images/works/work3.jpg",
    "images/works/work4.jpg",
  ],
};

const RecentWorks = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  const [activeGallaryImage, setActiveGallaryImage] = useState(1);
  const [gallery, setGallery] = useState(false);

  const { modalToggle, setPortfolioModal } = useContext(context);

  return (
    <Fragment>
      <FsLightbox
        toggler={gallery}
        sources={galleryImages[activeGallaryImage]}
      />
      <div className="section works section_" id="section-works">
        <div className="content">
          <div className="title">
            <div className="title_inner">Recent Works</div>
          </div>
          <div className="filter-menu">
            <div className="filters">
              <div className="btn-group">
                <label
                  data-text="All"
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".box-item"
                  />
                  All
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Links"
                  className={`c-pointer ${activeBtn("f-links")}`}
                  onClick={handleFilterKeyChange("f-links")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-links" />
                  Links
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Video"
                  className={`c-pointer ${activeBtn("f-video")}`}
                  onClick={handleFilterKeyChange("f-video")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-video" />
                  Video
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Image"
                  className={`c-pointer ${activeBtn("f-image")}`}
                  onClick={handleFilterKeyChange("f-image")}
                >
                  <input type="radio" name="fl_radio" defaultValue=".f-image" />
                  Image
                </label>
              </div>
              <div className="btn-group">
                <label
                  data-text="Gallery"
                  className={`c-pointer ${activeBtn("f-gallery")}`}
                  onClick={handleFilterKeyChange("f-gallery")}
                >
                  <input
                    type="radio"
                    name="fl_radio"
                    defaultValue=".f-gallery"
                  />
                  Gallery
                </label>
              </div>
            </div>
          </div>

          <div className="box-items portfolio-items">


            <div className="box-item f-links">
              <div className="image">
                <a
                  href="https://swift-basat.vercel.app/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work12.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Live Website</div>
                <a href="https://swift-basat.vercel.app/" className="name has-popup-link">
                  Swift : South African Ride sharing Platform
                </a>
              </div>
            </div>

            <div className="box-item f-links">
              <div className="image">
                <a
                  href="https://car-rental-basat.vercel.app/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work1.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Live Website</div>
                <a href="https://car-rental-basat.vercel.app/" className="name has-popup-link">
                  Car Rental Website
                </a>
              </div>
            </div>

            <div className="box-item f-links">
              <div className="image">
                <a
                  href="https://giphy-basat.vercel.app/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work2.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Live Website</div>
                <a href="https://giphy-basat.vercel.app/" className="name has-popup-link">
                  GIPHY Clone
                </a>
              </div>
            </div>

            <div className="box-item f-links">
              <div className="image">
                <a
                  href="https://tea-station-basat.vercel.app/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work3.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Live Website</div>
                <a href="https://tea-station-basat.vercel.app/" className="name has-popup-link">
                  Tea Station 
                </a>
              </div>
            </div>

            <div className="box-item f-links">
              <div className="image">
                <a
                  href="https://qrcode-basat.vercel.app/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work10.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Live Website</div>
                <a href="https://qrcode-basat.vercel.app/" className="name has-popup-link">
                  QR Code Generator
                </a>
              </div>
            </div>

            <div className="box-item f-video">
              <div className="image">
                <a
                  href="https://youtu.be/RJHnlz5wiSU?si=MonGqRSSdTrQR8oq"
                  className="has-popup-video"
                >
                  <img src="images/works/work24.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Video</div>
                <a
                  href="https://youtu.be/RJHnlz5wiSU?si=MonGqRSSdTrQR8oq"
                  className="name has-popup-video"
                >
                  Full Stack AirBnB Clone
                </a>
              </div>
            </div>

            <div className="box-item f-video">
              <div className="image">
                <a
                  href="https://youtu.be/bw7p_OMSzlY?si=DlcyKZFlyyO8jjpZ"
                  className="has-popup-video"
                >
                  <img src="images/works/work25.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Video</div>
                <a
                  href="https://youtu.be/bw7p_OMSzlY?si=DlcyKZFlyyO8jjpZ"
                  className="name has-popup-video"
                >
                  ChatGPT Clone 
                </a>
              </div>
            </div>

            <div className="box-item f-video">
              <div className="image">
                <a
                  href="https://youtu.be/U2A01Aj37t8?si=4k1oHcsORdFm7Azh"
                  className="has-popup-video"
                >
                  <img src="images/works/work26.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Video</div>
                <a
                  href="https://youtu.be/U2A01Aj37t8?si=4k1oHcsORdFm7Azh"
                  className="name has-popup-video"
                >
                  Quiz Application
                </a>
              </div>
            </div>

            <div className="box-item f-video">
              <div className="image">
                <a
                  href="https://youtu.be/UO6fNVXmSnA?si=b1H7eN_oB43RqoZi"
                  className="has-popup-video"
                >
                  <img src="images/works/work15.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Video</div>
                <a
                  href="https://youtu.be/UO6fNVXmSnA?si=b1H7eN_oB43RqoZi"
                  className="name has-popup-video"
                >
                  Wordle Clone
                </a>
              </div>
            </div>

            <div className="box-item f-video">
              <div className="image">
                <a
                  href="https://youtu.be/116Yx1SzKx0?si=TOuToc-VP7jUEQtD"
                  className="has-popup-video"
                >
                  <img src="images/works/work28.png" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-videocamera" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Video</div>
                <a
                  href="https://youtu.be/116Yx1SzKx0?si=TOuToc-VP7jUEQtD"
                  className="name has-popup-video"
                >
                  Chat App using React and Firebase
                </a>
              </div>
            </div>

            <div className="box-item f-gallery">
              <div className="image">
                <a
                  href="#gallery-1"
                  onClick={() => {
                    setGallery(!gallery);
                    setActiveGallaryImage(1);
                  }}
                  className="has-popup-gallery"
                >
                  <img src="images/works/work1.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-images" />
                      </span>
                    </span>
                  </span>
                </a>
                <div id="gallery-1" className="mfp-hide">
                  <a href="images/works/work1.jpg" />
                  <a href="images/works/work2.jpg" />
                  <a href="images/works/work3.jpg" />
                  <a href="images/works/work4.jpg" />
                </div>
              </div>
              <div className="desc">
                <div className="category">Gallery</div>
                <a href="#gallery-1" className="name has-popup-gallery">
                  Canvas Tote Bag MockUp
                </a>
              </div>
            </div>

            <div className="box-item f-image">
              <div className="image">
                <a href="images/works/work4.jpg" className="has-popup-image">
                  <img src="images/works/work4.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-image" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Image</div>
                <a
                  href="images/works/work4.jpg"
                  className="name has-popup-image"
                >
                  Shopping gift bag
                </a>
              </div>
            </div>

            <div className="box-item f-gallery">
              <div className="image">
                <a
                  href="#gallery-2"
                  className="has-popup-gallery"
                  onClick={() => {
                    setGallery(!gallery);
                    setActiveGallaryImage(2);
                  }}
                >
                  <img src="images/works/work5.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-images" />
                      </span>
                    </span>
                  </span>
                </a>
                <div id="gallery-2" className="mfp-hide">
                  <a href="images/works/work5.jpg" />
                  <a href="images/works/work2.jpg" />
                  <a href="images/works/work3.jpg" />
                  <a href="images/works/work4.jpg" />
                </div>
              </div>
              <div className="desc">
                <div className="category">Gallery</div>
                <a href="#gallery-2" className="name has-popup-gallery">
                  Amore Mio Three Cups
                </a>
              </div>
            </div>

            <div className="box-item f-image">
              <div className="image">
                <a href="images/works/work7.jpg" className="has-popup-image">
                  <img src="images/works/work7.jpg" alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-image" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Image</div>
                <a
                  href="images/works/work7.jpg"
                  className="name has-popup-image"
                >
                  Minimal Poster Frame
                </a>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorks;
