import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/UI.html?raw";

export default function UI() {
  useEffect(() => {
    document.title = "UI/UX Design | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
