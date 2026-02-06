import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function PageWrapper({ page }) {
  const contentRef = useRef(null);
  const cleanupRef = useRef([]);

  useEffect(() => {
    const loadPage = async () => {
      try {
        // Wait for GSAP to be available
        let attempts = 0;
        while (!window.gsap && attempts < 100) {
          await new Promise(resolve => setTimeout(resolve, 50));
          attempts++;
        }

        if (!window.gsap) {
          console.error("GSAP not loaded after waiting");
          return;
        }

        const htmlResponse = await fetch(`/pages/${page}/index.html`);
        const htmlText = await htmlResponse.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, "text/html");

        const content = doc.querySelector(".content");
        const demo = doc.querySelector(".demo");

        if (contentRef.current) {
          contentRef.current.innerHTML = "";
          if (content) contentRef.current.appendChild(content.cloneNode(true));
          if (demo) contentRef.current.appendChild(demo.cloneNode(true));
        }

        const pageStyle = document.createElement("link");
        pageStyle.rel = "stylesheet";
        pageStyle.href = `/pages/${page}/style.css`;
        document.head.appendChild(pageStyle);
        cleanupRef.current.push(() => pageStyle.remove());

        let scriptUrl = `/pages/${page}/script.js`;
        let scriptResponse = await fetch(scriptUrl);
        
        if (!scriptResponse.ok) {
          scriptUrl = `/pages/${page}/main.js`;
          scriptResponse = await fetch(scriptUrl);
        }
        
        if (scriptResponse.ok) {
          const script = document.createElement("script");
          script.src = scriptUrl;
          script.defer = true;
          document.body.appendChild(script);
          cleanupRef.current.push(() => script.remove());
        }
      } catch (error) {
        console.error("Error loading page:", error);
      }
    };

    loadPage();

    return () => {
      cleanupRef.current.forEach(cleanup => cleanup());
      cleanupRef.current = [];
    };
  }, [page]);

  return (
    <main>
      <header className="nav">
        <Link to="/">
          <img src="/logo.svg" alt="logo" />
        </Link>
        <a href="https://jsmastery.com/all-courses" target="_blank">
          GSAP Course
        </a>
      </header>
      <div ref={contentRef}></div>
    </main>
  );
}

export default PageWrapper;
