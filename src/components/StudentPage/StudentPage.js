import '../css/StudentPage.css';
import 'antd/dist/antd.css';

import { Route, Link } from 'react-router-dom';
import React from 'react';
import { Layout, Menu } from 'antd';

import MainPage from './MainPage/MainPage'
import AboutPage from './AboutPage/AboutPage';
import LoginPage from '../LoginPage/LoginPage'
import ReportPage from './ReportPage/ReportPage';

const { Header } = Layout;


class StudentPage extends React.Component {

    state = {
        collapse: false,
    };
    current_state = {
        current: 'Overview',
    }

    handleClick = click => {
        this.setState({ current: click.key });
        console.log(this.state.current)
    };

    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
    
                    <Menu
                        onClick={this.handleClick}
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={this.state.current}
                    >
                        <Menu.Item key="MainPage">
                            Trang chủ
                            <Link to="/Main/" />
                        </Menu.Item>
                        <Menu.Item key="About">
                            Liên hệ
                            <Link to="/About/" />
                        </Menu.Item>
                        <Menu.Item key="Report">
                            Báo lỗi
                            <Link to='/Report' />
                        </Menu.Item>
                        <Menu.Item key="Log">
                            Đăng nhập
                            <Link to='/Login' />
                        </Menu.Item>
                    </Menu>
                </Header>
                <Route path="/Main/" component={MainPage} />
                <Route path="/About/" component={AboutPage} />
                <Route path="/Report/" component={ReportPage} />
                <Route path="/Login/" component={LoginPage} />
            </Layout >

        );
    }
}

export default StudentPage;