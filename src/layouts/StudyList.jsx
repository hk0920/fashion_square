import React from "react";
import { Link } from "react-router-dom";

const studyData = [
  {
    service: "패션스퀘어_FashionSquare",
    skill: ["React", "Type-Script", "Style-components"],
    link: "/fashion-square",
    date: "2024-09-03",
  },
];

const StudyList = () => {
  return (
    <ul className="list__study">
      {studyData.map((data, index) => {
        return (
          <li className="list-item" key={`study_${index}`}>
            <Link to={data.link}>
              <p className="text__service">{data.service}</p>
              <span className="text__date">{data.date}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default StudyList;
