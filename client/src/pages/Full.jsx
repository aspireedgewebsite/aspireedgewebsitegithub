import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Full.html?raw";

export default function Full() {
  useEffect(() => {
    document.title = "Full Stack Development | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
