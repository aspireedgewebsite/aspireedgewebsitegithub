import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Termcondition.html?raw";

export default function Termcondition() {
  useEffect(() => {
    document.title = "Terms & Conditions | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
