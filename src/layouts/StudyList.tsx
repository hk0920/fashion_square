import React from "react";
import { Link } from "react-router-dom";

import "./layout.css";

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
    <div className="box__index">
      <p className="text__title">개인 스터디 리스트</p>
      <ul className="list__index">
        {studyData.map((data, index) => {
          return (
            <li className="list-item" key={`study_${index}`}>
              <Link to={data.link} className="link__item">
                <p className="text__service">{data.service}</p>
              </Link>
              <span className="text__date">{data.date}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudyList;
