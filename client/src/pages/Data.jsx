import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Data.html?raw";

export default function Data() {
  useEffect(() => {
    document.title = "Data Science | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
