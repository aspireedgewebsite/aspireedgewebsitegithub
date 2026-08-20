import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Privacypolicy.html?raw";

export default function Privacypolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
