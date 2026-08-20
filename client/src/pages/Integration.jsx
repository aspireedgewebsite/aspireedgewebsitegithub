import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Integration.html?raw";

export default function Integration() {
  useEffect(() => {
    document.title = "System Integration | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
