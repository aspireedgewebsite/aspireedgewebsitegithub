import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/SpecializedPrograms.html?raw";

export default function SpecializedPrograms() {
  useEffect(() => {
    document.title = "Specialized Programs | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
