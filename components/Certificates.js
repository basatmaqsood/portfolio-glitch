"use client";
 const Certificates = () => {
  const certificates = [
    {
      id: 6,
      title: "META Certified Frontend Developer",
      issuer: "META through Coursera",
      link: "https://www.credly.com/badges/be7b061c-21e1-4ca5-9e33-0380e0749463/public_url",
    },
    {
      id: 13,
      title: "Developing Back-End Apps with Node.js and Express",
      issuer: "IBM through Coursera",
      link: "https://coursera.org/share/1e99f1682f439af6a148d102db445dce",
    },
    {
      id: 1,
      title: "Developing Frontend Apps with React",
      issuer: "IBM through Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/0DBWZ9VJTGLF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
    {
      id: 11,
      title: "Front-End Developer Capstone",
      issuer: "META through Coursera",
      link: "https://coursera.org/share/ab7fb4b1c9cbf3a44bf8e4605dc922b8",
    },
    {
      id: 14,
      title: "Introduction to Next.js",
      issuer: "Coursera Instructor Network",
      link: "https://coursera.org/share/de7b8394304aff50ee05d0a7b8c6f2c9",
    },
    {
      id: 8,
      title: "React Basics",
      issuer: "META through Coursera",
      link: "https://coursera.org/share/d096398c1db93a2bec143f9bddce525f",
    },
    {
      id: 9,
      title: "Advanced React",
      issuer: "META through Coursera",
      link: "https://coursera.org/share/aa30feb40eb84f415e88275d2afe55d4",
    },
    {
      id: 10,
      title: "Principles of UX/UI Design",
      issuer: "META through Coursera",
      link: "https://coursera.org/share/4cbe6c64497796baa47e54207c91bbd1",
    },
    {
      id: 3,
      title: "Programming with Javascript",
      issuer: "META through Coursera",
      link: "https://coursera.org/share/77b10cdcc04a781558da0b0bc69d3bad",
    },
    {
      id: 7,
      title: "HTML and CSS in depth",
      issuer: "META through Coursera",
      link: "https://coursera.org/share/6970f8ab75bf90fd51ac06308c86ba5e",
    },
    {
      id: 2,
      title: "Introduction to Front-End Development",
      issuer: "META through Coursera",
      link: "https://coursera.org/share/dc9d90055feb8dfaccefa3f554ec9921",
    },
    {
      id: 4,
      title: "Version Control",
      issuer: "META through Coursera",
      link: "https://coursera.org/share/2894335445b949ea437e650a14e38b01",
    },
    {
      id: 5,
      title: "Manage Your Versions with Git",
      issuer: "Coursera Project Network",
      link: "https://coursera.org/share/434b52fdcb676a6f4fc5fddd71024d5a",
    },
    {
      id: 12,
      title: "Coding Interview Preparation",
      issuer: "META through Coursera",
      link: "https://coursera.org/share/cc7de8e5c5c5c20397261e571d7ff3d8",
    },
  ];

  return (
    <div className="section certificates">
      <div className="content">
        <div className="title">
          <div className="title_inner">Certificates</div>
        </div>
        <div className="certificates_list">
          <ul>
            {certificates.map((cert) => (
              <li key={cert.id}>
                <div className="certificate_item">
                  <div className="certificate_title">{cert.title}</div>
                  <div className="certificate_issuer">
                    Issued by: {cert.issuer}
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate_link"
                  >
                    View Certificate
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Certificates;