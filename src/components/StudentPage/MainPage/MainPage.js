import 'antd/dist/antd.css';
import React from 'react';

import { Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { BookOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';

import Information from './Profile/Information';
import Overview from './Profile/Overview'
import Work from './Profile/Work';
import ScoreTable from './SchoolProfile/ScoreTable'
import Privacy from './Privacy'

const { SubMenu } = Menu;
const { Sider } = Layout;

class MainPage extends React.Component {

    state = {
        collapsed: false,
        current: 'Overview'
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    handleClick = click => {
        this.setState({ current: click.key });
    };

    render() {
        return (
            <Layout>
                <Sider width={200}
                    className="site-layout-background"
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    theme='light'>
                    <Menu
                        mode="inline"
                        onClick={this.handleClick}
                        style={{ height: '100%', borderRight: 0 }}
                        selectedKeys={this.state.current}
                        theme='light'
                    >
                        <SubMenu key="Profile" icon={<UserOutlined />} title="Thông tin cá nhân">
                            <Menu.Item key="Overview">
                                Tổng quan
                                <Link to="/Main/" />
                            </Menu.Item>
                            <Menu.Item key="Work">
                                Công việc và học vấn
                                <Link to="/Main/Work" />
                            </Menu.Item>
                            <Menu.Item key="Information">
                                Thông tin liên hệ
                                <Link to="/Main/Information" />
                            </Menu.Item>

                        </SubMenu>
                        <SubMenu key="School Profile" icon={<BookOutlined />} title="Học Bạ">
                            <Menu.Item key="Elementary">
                                Tiểu học
                                <Link to="/Main/Elementary" />
                            </Menu.Item>
                            <Menu.Item key="Secondary">
                                Trung học cơ sở
                                <Link to="/Main/Secondary" />
                            </Menu.Item>
                            <Menu.Item key="High School">
                                Trung học phổ thông
                                <Link to="/Main/HighSchool" />
                            </Menu.Item>
                            <Menu.Item key="University">
                                Đại học
                                <Link to="/Main/University" />
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="Privacy" icon={<LockOutlined />}>
                            Tuỳ chỉnh chia sẻ
                            <Link to="/Main/Privacy" />
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>{this.state.current}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Route exact path="/Main/" component={Overview} />
                    <Route path="/Main/Information" component={Information} />
                    <Route path="/Main/Work" component={Work} />
                    <Route path="/Main/Elementary" render={(props) => (
                        <ScoreTable {...props} level={'Elementary'} />
                    )} />
                    <Route path="/Main/Secondary" render={(props) => (
                        <ScoreTable {...props} level={'Secondary'} />
                    )} />
                    <Route path="/Main/HighSchool" render={(props) => (
                        <ScoreTable {...props} level={'HighSchool'} />
                    )} />
                    <Route path="/Main/University" render={(props) => (
                        <ScoreTable {...props} level={'University'} />
                    )} />
                    <Route path="/Main/Privacy" component={Privacy} />



                </Layout>
            </Layout>
        );
    }
}

export default MainPage;