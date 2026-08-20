import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/AAI.html?raw";

export default function AAI() {
  useEffect(() => {
    document.title = "AI Solutions | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
