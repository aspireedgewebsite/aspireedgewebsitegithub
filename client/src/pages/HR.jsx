import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/HR.html?raw";

export default function HR() {
  useEffect(() => {
    document.title = "HR Solutions | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
