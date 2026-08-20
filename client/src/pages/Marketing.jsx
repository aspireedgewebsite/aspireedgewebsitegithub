import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Marketing.html?raw";

export default function Marketing() {
  useEffect(() => {
    document.title = "Marketing Analysis | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
