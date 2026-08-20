import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Financial.html?raw";

export default function Financial() {
  useEffect(() => {
    document.title = "Financial Services | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
