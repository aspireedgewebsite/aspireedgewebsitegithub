import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Auto.html?raw";

export default function Auto() {
  useEffect(() => {
    document.title = "Automotive Software | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
