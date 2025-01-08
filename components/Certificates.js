"use client";
 const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Developing Frontend Apps with React",
      issuer: "IBM through Coursera",
      link: "https://www.coursera.org/account/accomplishments/verify/0DBWZ9VJTGLF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
    {
      id: 2,
      title: "Introduction to Front-End Development",
      issuer: "META through Coursera",
      link: "https://coursera.org/share/dc9d90055feb8dfaccefa3f554ec9921",
    },
    {
      id: 3,
      title: "Programming with Javascript",
      issuer: "META through Coursera",
      link: "https://coursera.org/share/77b10cdcc04a781558da0b0bc69d3bad",
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