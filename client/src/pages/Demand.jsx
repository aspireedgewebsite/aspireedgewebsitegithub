import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Demand.html?raw";

export default function Demand() {
  useEffect(() => {
    document.title = "Demand Generation | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
