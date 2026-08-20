import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Software.html?raw";

export default function Software() {
  useEffect(() => {
    document.title = "Software Development | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
