"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const Blog = ({ dark }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".blog-items", {
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

  const blogs = [
    {
      id: 1,
      title: "Common Pitfalls in JAVASCRIPT",
      img: "images/blog/blog-1.webp",
      link:'https://basatmaqsood.medium.com/navigating-common-javascript-pitfalls-a-developers-guide-3aa669329305',
      date: "14 June 2016",
    },
    {
      id: 2,
      title: "10 Mind-Blowing Javascript One-Liners",
      img: "images/blog/blog-2.webp",
      link:'https://basatmaqsood.medium.com/mastering-javascript-with-10-mind-blowing-one-liners-a0fc7d84daa0', 
      date: "14 June 2016",
    },  
    {
      id: 3,
      title: "Mastering Modern Javascript",
      img: "images/blog/blog-3.png",
      link:'https://basatmaqsood.medium.com/mastering-modern-javascript-tips-and-tricks-for-efficient-development-2a77ead8b99c',
      date: "14 June 2016",
    }
  ];

  return (
    <div className="section blog section_" id="section-blog">
      <div className="content">
        <div className="title">
          <div className="title_inner">Latest Posts</div>
        </div>
        <div className="box-items blog-items">
          {blogs.map((blog) => (
            <div className="box-item" key={blog.id}>
              <div className="image">
                <Link href={blog.link}>
                  <img src={blog.img} alt />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <span className="ion ion-ios-book-outline" />
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
              <div className="desc">
                <Link
                  href={blog.link}
                  className="name"
                >
                  {blog.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Blog;
