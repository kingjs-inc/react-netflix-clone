// rfc , rafc 등.. 함수형 컴포넌트 생성 방식은 원하는 방식으로
import React, { useState, useEffect } from "react";
import "./Nav.css";

export default function Nav() {
  const [show, setshow] = useState(false);

  // listener 등록
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("window.scrollY ", window.scrollY);
      if (window.scrollY > 50) {
        setshow(true);
      } else {
        setshow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []); // dependency 부분

  return (
    <nav className={`nav ${show && "nav__black"} `}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        onClick={() => window.location.reload()} //logo 클릭시 페이지 reload
      />
      <img
        alt="User logged"
        src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
        className="nav__avatar"
      />
    </nav>
  );
}
