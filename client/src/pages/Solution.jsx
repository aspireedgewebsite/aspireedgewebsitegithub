import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/solution.html?raw";

export default function Solution() {
  useEffect(() => {
    document.title = "Software Solutions | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
