import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Disclaimer.html?raw";

export default function Disclaimer() {
  useEffect(() => {
    document.title = "Disclaimer | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
