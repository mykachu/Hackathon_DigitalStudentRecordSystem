import '../css/StudentPage.css';
import 'antd/dist/antd.css';
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BookOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class StudentPage extends React.Component {

    state = {
        horizontal_current: 'MainPage',
        vertical_current: 'Overview',
        current_title: 'Tổng quan'
    }

    handleClickHorizontal = click => {
        this.setState({ horizontal_current: click.key });
    };

    handleClickVertical = click => {
        this.setState({ vertical_current: click.key });
        this.setState({ current_title: click.title})
    };

    render() {
        const { current } = this.state

        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        onClick={this.handleClickHorizontal}
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={[current]}
                    >
                        <Menu.Item key="MainPage">Trang chủ</Menu.Item>
                        <Menu.Item key="Contact">Liên hệ</Menu.Item>
                        <Menu.Item key="Report">Báo lỗi</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            onClick={this.handleClickVertical}
                            style={{ height: '100%', borderRight: 0 }}
                            selectedKeys={[current]}
                        >
                            <SubMenu key="Profile" icon={<UserOutlined />} title="Thông tin cá nhân">
                                <Menu.Item key="Overview">Tổng quan</Menu.Item>
                                <Menu.Item key="Work">Công việc và học vấn</Menu.Item>
                                <Menu.Item key="Information">Thông tin liên hệ</Menu.Item>

                            </SubMenu>
                            <SubMenu key="School Profile" icon={<BookOutlined />} title="Học Bạ">
                                <Menu.Item key="Elementary">Tiểu học</Menu.Item>
                                <Menu.Item key="Secondary">Trung học cơ sở</Menu.Item>
                                <Menu.Item key="High School">Trung học phổ thông</Menu.Item>
                                <Menu.Item key="University">Đại học</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="Privacy" icon={<LockOutlined />}>Tuỳ chỉnh chia sẻ</Menu.Item>

                        </Menu>
                    </Sider>

                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>{this.state.vertical_current}</Breadcrumb.Item>
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
            </Layout >
        );
    }
}

export default StudentPage;