import React, { useEffect } from "react";
import PageHTML from "../components/PageHTML.jsx";
import html from "./fragments/Vehicles.html?raw";

export default function Vehicles() {
  useEffect(() => {
    document.title = "Hybrid Vehicles | AspireEdge";
  }, []);

  return <PageHTML html={html} />;
}
