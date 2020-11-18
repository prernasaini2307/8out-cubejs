import React from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
    StockOutlined,
    EyeOutlined,
    MoneyCollectOutlined,
    UserSwitchOutlined,
    CoffeeOutlined,
    PrinterOutlined,
    FileTextOutlined,
    ShoppingOutlined,
    PercentageOutlined
} from '@ant-design/icons';
import cubejs from "@cubejs-client/core";
import { CubeProvider } from "@cubejs-client/react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import cubejsLogo from "./cubejs-logo.png";
import DashboardPage from "./pages/DashboardPage";
import RevenuePage from "./pages/RevenuePage";
import ShiftPage from "./pages/ShiftPage";
import OrderPage from "./pages/OrdersPage";
import ReceiptsPage from "./pages/ReceiptsPage";
import InvoicesPage from "./pages/InvoicesPage";
import ProductsPage from "./pages/ProductsPage";
import TreatPage from "./pages/TreatPage";
import VatPage from "./pages/VatPage";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


let API_URL;
if (process.env.NODE_ENV === 'production') {
  API_URL = window.location.origin.replace('http', 'ws').replace('https', 'wss')
} else {
  API_URL = "https://8out.habilelabs.in"
  // API_URL = "http://localhost:5000"
}

const cubejsApi = cubejs(
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJRCI6MjMyLCJPd25lclVzZXJJRCI6bnVsbCwiU3RvcmVzIjpbXSwiU2Vzc2lvbiI6IjgxNzI1NDMyLWFhNzItNDgyNi1iZjhkLTIwMjhhNjZmZTk1NCIsImlhdCI6MTYwNTY5NTc2MDIzMywiZXhwIjoxNjA1NzEwMTYwMjMzLCJCcmFuZHMiOltdfQ.U7pE3les4gA1APGjN6xBo_j0L_CH994rAoskv1ywmW0",
  { apiUrl: API_URL + "/cubejs-api/v1", headers: {
       store: 10,
       brand: 1
    }
  });


const AppLayout = () => {
  return(<Router>
  <Layout height={100}>
    <Header className="header">
      <div className="logo">
        <img alt="cubejs-logo" src={cubejsLogo} height={40} />
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} height={100}>
        <Menu.Item key="1" >nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background" collapsible>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<EyeOutlined />}>
            <span>Current</span>
            <Link to="/" />
          </Menu.Item>
          <SubMenu key="sub1" title="Analytics" icon={<StockOutlined />}>
            <Menu.Item key="2" icon={<MoneyCollectOutlined />}><span>Revenue</span>
              <Link to="/revenue" /></Menu.Item>
            <Menu.Item key="3" icon={<UserSwitchOutlined />}><span>Shift</span>
              <Link to="/shift" /></Menu.Item>
            <Menu.Item key="4" icon={<CoffeeOutlined />}><span>Orders</span>
              <Link to="/orders" /></Menu.Item>
            <Menu.Item key="5" icon={<PrinterOutlined />} ><span>Receipts</span>
              <Link to="/receipts" /></Menu.Item>
            <Menu.Item key="6" icon={<FileTextOutlined />}><span>Invoices</span>
              <Link to="/invoices" /></Menu.Item>
            <Menu.Item key="7" icon={<ShoppingOutlined />}><span>Products</span>
              <Link to="/products" /></Menu.Item>
            <Menu.Item key="8" icon={<CoffeeOutlined />}><span>Treat</span>
              <Link to="/treat" /></Menu.Item>
            <Menu.Item key="9" icon={<PercentageOutlined />}><span>Vat</span>
              <Link to="/vat" /></Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Route key="r1" exact path="/" component={DashboardPage} />
          <Route key="r2" exact path="/revenue" component={RevenuePage} />
          <Route key="r3" exact path="/shift" component={ShiftPage} />
          <Route key="r4" exact path="/orders" component={OrderPage} />
          <Route key="r5" exact path="/receipts" component={ReceiptsPage} />
          <Route key="r6" exact path="/invoices" component={InvoicesPage} />
          <Route key="r7" exact path="/products" component={ProductsPage} />
          <Route key="r8" exact path="/treat" component={TreatPage} />
          <Route key="r9" exact path="/vat" component={VatPage} />
        </Content>
      </Layout>
    </Layout>
  </Layout>
  </Router>
)};
const App = () => {
  return (
    <CubeProvider cubejsApi={cubejsApi}>
      <AppLayout />
    </CubeProvider>
  );
};

export default App;
