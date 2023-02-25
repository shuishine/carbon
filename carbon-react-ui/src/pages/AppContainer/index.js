import "./index.css";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Avatar,
  Dropdown,
} from "antd";
import { HomeOutlined, UserOutlined, StarTwoTone } from "@ant-design/icons";
import menuData from "@/data/menu";
import logo from "@/assets/images/logo.png";
import moment from "moment/moment";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;
const AppContainer = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();

  const items = [
    {
      key: "username",
      label: "游客",
    },
    {
      key: "login",
      label: (
        <Link to="/login">
          <UserOutlined style={{ marginRight: 5 }} />
          用户登录
        </Link>
      ),
    },
    {
      key: "register",
      label: (
        <Link to="/register">
          <StarTwoTone style={{ marginRight: 5 }} />
          立即注册
        </Link>
      ),
    },
  ];

  return (
    <Layout className="layout">
      <Header style={{ backgroundColor: "#FFF" }}>
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="header-right-bar">
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
          >
            <Avatar shape="square" size={32} icon={<UserOutlined />} />
          </Dropdown>
        </div>

        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname]}
          items={menuData}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item>CARBON</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <small>&copy;{moment().format("YYYY")} CaRBoN.</small>
      </Footer>
    </Layout>
  );
};
export default AppContainer;
