import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Index.html?raw";

export default function Index() {
  useEffect(() => {
    document.title = "AspireEdge Private Limited | Home";
  }, []);

  return <PageHTML html={html} />;
}
