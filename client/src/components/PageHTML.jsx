import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Renders a pre-converted static HTML fragment (originally a Razor .cshtml
 * view) and intercepts clicks on same-origin links so navigation stays
 * inside the React SPA instead of doing a full page reload.
 */
export default function PageHTML({ html }) {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [html]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    function onClick(e) {
      const anchor = e.target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      // let external links, mail/tel/hash/whatsapp links behave normally
      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        anchor.target === "_blank"
      ) {
        return;
      }
      e.preventDefault();
      navigate(href);
    }

    node.addEventListener("click", onClick);
    return () => node.removeEventListener("click", onClick);
  }, [navigate]);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
}
