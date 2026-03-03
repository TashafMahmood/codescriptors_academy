import React from "react";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Helmet>
        <title>CodeScriptors Academy</title>

        {/* Basic Meta */}
        <meta
          name="description"
          content="Learn AI & Coding with CodeScriptors Academy. Build real-world projects and grow your tech career."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="CodeScriptors Academy - Learn AI & Coding"
        />
        <meta
          property="og:description"
          content="Join CodeScriptors Academy and master AI, Web Development & Software Engineering."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dxsjfends/image/upload/v1772537867/Untitled_design_zwzntj.png"
        />
        <meta property="og:url" content="https://academy.codescriptors.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CodeScriptors Academy - Learn AI & Coding"
        />
        <meta
          name="twitter:description"
          content="Build real-world projects and become job-ready with AI & Web Development."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dxsjfends/image/upload/v1772537867/Untitled_design_zwzntj.png"
        />
      </Helmet>

      <Home />
    </div>
  );
};

export default App;
