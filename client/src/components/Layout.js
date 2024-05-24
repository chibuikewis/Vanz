import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

const layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

layout.defaultProps = {
  title: "Vanz",
  description: "",
  keywords: "",
  author: "vans",
};

export default layout;
