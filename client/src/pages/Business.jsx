import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Business.html?raw";

export default function Business() {
  useEffect(() => {
    document.title = "Business Analysis | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
