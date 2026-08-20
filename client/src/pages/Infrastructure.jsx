import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Infrastructure.html?raw";

export default function Infrastructure() {
  useEffect(() => {
    document.title = "Infrastructure Services | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
