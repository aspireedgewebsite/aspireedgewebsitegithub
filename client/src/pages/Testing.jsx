import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Testing.html?raw";

export default function Testing() {
  useEffect(() => {
    document.title = "Software Testing | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
