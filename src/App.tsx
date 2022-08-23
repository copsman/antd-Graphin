import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import Item from "antd/lib/list/Item";
import React, { useContext, useEffect, useState } from "react";
import GraphTest from "./graph_canvas";
import Graphin, { Behaviors, Utils, GraphinContext, Graph } from "@antv/graphin";
import PageSider from "./page_layout/PageSider";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <PageSider/>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <>
            <GraphTest></GraphTest>
            </>
        </Content>
        <Footer/>
      </Layout>
    </Layout>
  );
};

export default App;
