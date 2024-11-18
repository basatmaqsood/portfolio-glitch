const About = () => {
  return (
    <div className="section about section_" id="section-resume">
      <div className="content">
        <div className="title">
          <div className="title_inner">About Me</div>
        </div>
        <div className="image">
          <img src="images/dp.png " alt="" />
        </div>
        <div className="desc">
          <p>
            I’m Basat Maqsood, a passionate Software Engineering student at UET
            Taxila, dedicated to crafting innovative and user-focused solutions.
            I thrive on creating seamless and engaging digital experiences that
            solve real-world problems. With a strong commitment to learning and
            growth, I continuously challenge myself to deliver impactful
            results. Let’s connect and collaborate to turn ideas into reality!
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Name:</strong> Basat Maqsood
              </li>
              <li>
                <strong>Age:</strong> 20 Years
              </li>
              <li>
                <strong>Job:</strong> Web Developer
              </li>
              <li>
                <strong>Citizenship:</strong> Pakistan
              </li>
              <li id="info-class-email">
                <strong>E-mail:</strong> <a  href="mailto:itzbasatmaqsood@gmail.com"> itzbasatmaqsood@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="#" className="btn fill" data-text="Download CV">
              Download CV
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
