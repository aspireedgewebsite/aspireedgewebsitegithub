import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Careers.html?raw";

export default function Careers() {
  useEffect(() => {
    document.title = "Careers | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
