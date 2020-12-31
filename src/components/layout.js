import React from "react";
import "./layout.css";
import Menu from "./menu";
import Sidebar from "./sidebar";
import { StaticQuery, graphql } from "gatsby"

export default props => {
  const { children } = props;

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="app">
          <Menu title={data.site.siteMetadata.title} />
          <div className="main">
            <div className="content">{children}</div>
            <div className="sidebar"><Sidebar /></div>
          </div>
        </div>
      )}
    />
  )
}