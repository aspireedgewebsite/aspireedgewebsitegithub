import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/About.html?raw";

export default function About() {
  useEffect(() => {
    document.title = "About Us | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
