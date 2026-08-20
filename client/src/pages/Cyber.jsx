import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Cyber.html?raw";

export default function Cyber() {
  useEffect(() => {
    document.title = "Cyber Security | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
