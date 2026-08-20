import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Embedded.html?raw";

export default function Embedded() {
  useEffect(() => {
    document.title = "Embedded Systems | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
