import React from "react";
import {Helmet} from "react-helmet";

class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <html lang="he-IL">
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="example.com" />
                </html>
            </Helmet>
            ...
        </div>
    );
  }
};