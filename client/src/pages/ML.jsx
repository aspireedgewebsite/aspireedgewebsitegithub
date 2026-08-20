import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/ML.html?raw";

export default function ML() {
  useEffect(() => {
    document.title = "Machine Learning | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
