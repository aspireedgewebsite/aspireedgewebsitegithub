import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Consulting.html?raw";

export default function Consulting() {
  useEffect(() => {
    document.title = "IT Consulting | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
