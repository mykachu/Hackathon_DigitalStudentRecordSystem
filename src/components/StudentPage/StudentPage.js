import '../css/StudentPage.css';
import 'antd/dist/antd.css';
import React from 'react';
import { Layout, Menu } from 'antd';

import MainPage from './MainPage/MainPage'
import AboutPage from './AboutPage/AboutPage';

const { Header } = Layout;

class StudentPage extends React.Component {

    state = {
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
                        <Menu.Item key="MainPage">Trang chủ</Menu.Item>
                        <Menu.Item key="About">Liên hệ</Menu.Item>
                        <Menu.Item key="Report">Báo lỗi</Menu.Item>
                    </Menu>
                </Header>
                {/* <AboutPage /> */}
                <MainPage />

            </Layout >
           
             
        );
    }
}

export default StudentPage;