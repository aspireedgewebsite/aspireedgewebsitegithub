import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Digital.html?raw";

export default function Digital() {
  useEffect(() => {
    document.title = "Digital Marketing | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
