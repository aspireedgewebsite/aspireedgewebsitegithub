import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Cloud.html?raw";

export default function Cloud() {
  useEffect(() => {
    document.title = "Cloud Computing | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
