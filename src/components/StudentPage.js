import './StudentPage.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function StudentPage() {
    return (

        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">Tiểu học</Menu.Item>
                    <Menu.Item key="2">Trung học cơ sở</Menu.Item>
                    <Menu.Item key="3">Trung học phổ thông</Menu.Item>
                    <Menu.Item key="4">Đại học</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Học bạ">
                            <Menu.Item key="1">Cả năm</Menu.Item>
                            <Menu.Item key="2">Hạnh kiểm</Menu.Item>

                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="Lấy link">
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="Tuỳ chỉnh chia sẻ">
                            <Menu.Item key="9"><Switch></Switch> Trường học</Menu.Item>
                            <Menu.Item key="10"></Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                        <Breadcrumb.Item>Xem điểm</Breadcrumb.Item>
                        {/* <Breadcrumb.Item>App</Breadcrumb.Item> */}
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    ><Switch></Switch>
                        Content
          </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default StudentPage;