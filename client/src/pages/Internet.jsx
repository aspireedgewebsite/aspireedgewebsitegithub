import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Internet.html?raw";

export default function Internet() {
  useEffect(() => {
    document.title = "Internet of Things | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
