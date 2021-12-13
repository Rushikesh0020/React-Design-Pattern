import styled from "styled-components";

export const DeveloperInfo = ({ developer, className }) => {
  const { name, title, country, profileImg, designation, skills } =
    developer || {};

  return developer ? (
    <div className={className}>
      <div className="card-container">
        <span className="pro">{title}</span>

        <img className="round" src={profileImg} alt="user" />

        <h3>{name}</h3>
        <h6>{country}</h6>
        <p>{designation}</p>
        <div className="btns">
          <button className="primary">Message</button>
          <button className="primary ghost">Following</button>
        </div>

        <div className="skills">
          <h6>Skills</h6>
          <ul>
            {skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading.....</p>
  );
};

//   id: "211",
//   name: "Ricky Park",
//   country: "New York",
//   profileImg: "https://randomuser.me/api/portraits/women/79.jpg",
//   designation: "User interface designer and front-end developer",
//   skills: ["UI / UX", "Front End Development ", "HTML", "CSS", "JavaScript", "React", "Node"],
