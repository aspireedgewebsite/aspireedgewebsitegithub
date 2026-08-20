import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/BI.html?raw";

export default function BI() {
  useEffect(() => {
    document.title = "Business Intelligence | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
