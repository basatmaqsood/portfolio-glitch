"use client";
export const DesignSkills = () => {
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Design Skills</div>
        </div>
        <div className="skills">
          <ul>
            <li>
              <div className="name">Web Design</div>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">UI/UX</div>
              <div className="progress">
                <div className="percentage" style={{ width: "80%" }}>
                  <span className="percent">80%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Figma</div>
              <div className="progress">
                <div className="percentage" style={{ width: "75%" }}>
                  <span className="percent">75%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Canva</div>
              <div className="progress">
                <div className="percentage" style={{ width: "80%" }}>
                  <span className="percent">80%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Adobe Illustrator</div>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const CodingSkills = () => {
  const skills = [
    { id: 1, title: "React JS", value: 90 },
    { id: 2, title: "Node/Express", value: 85 },
    { id: 3, title: "MongoDB/SQL", value: 80 },
    { id: 4, title: "Next Js", value: 90 },
    { id: 5, title: "Tailwind CSS", value: 95 },
    { id: 6, title: "TypeScript", value: 85 },
    { id: 7, title: "JavaScript", value: 95 },
    { id: 8, title: "HTML/CSS", value: 95 },
    { id: 9, title: "SystemDesign", value: 80 },
    { id: 10, title: "SEO", value: 75 },
  ];
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Coding Skills</div>
        </div>
        <div className="skills circles">
          <ul>
            {skills.map((skill) => (
              <li key={skill.id}>
                <div className="name">{skill.title}</div>
                <div className={`progress p${skill.value}`}>
                  <div
                    className="percentage"
                    style={{ width: `${skill.value}%` }}
                  >
                    <span className="percent">{skill.value}%</span>
                  </div>
                  <span>{skill.value}%</span>
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export const Knowledge = () => {
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Knowledge</div>
        </div>
        <div className="skills list">
          <ul>
            <li>
              <div className="name">Responsive web design and development</div>
            </li>
            <li>
              <div className="name">Custom e-commerce solutions</div>
            </li>
            <li>
              <div className="name">SEO-friendly website optimization</div>
            </li>
            <li>
              <div className="name">Branding and visual identity creation</div>
            </li>
            <li>
              <div className="name">Cross-platform app development</div>
            </li>
            <li>
              <div className="name">UI/UX design for web and mobile</div>
            </li>
            <li>
              <div className="name">Social media marketing strategies</div>
            </li>
            <li>
              <div className="name">Content management system integration</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

import { glitcheUtils } from "@/utility";
import { Fragment, useEffect } from "react";
const Skills = ({
  design = true,
  coding = true,
  knowledge = true,
}) => {
  return (
    <Fragment>
      {coding && <CodingSkills />}
      {design && <DesignSkills />}
      {knowledge && <Knowledge />}
    </Fragment>
  );
};
export default Skills;
