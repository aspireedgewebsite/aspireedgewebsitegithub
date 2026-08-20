import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Privacy.html?raw";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
