import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/AI.html?raw";

export default function AI() {
  useEffect(() => {
    document.title = "Artificial Intelligence | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
