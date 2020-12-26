import 'antd/dist/antd.css';
import React from 'react';

import { Layout, Menu } from 'antd';
import { BookOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import Information from './Profile/Information';

const { SubMenu } = Menu;
const { Sider } = Layout;

class MainPage extends React.Component {

    state = {
        current: 'Overview'
    }

    handleClick = click => {
        this.setState({ current: click.key });
    };

    render() {
        return (
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        onClick={this.handleClick}
                        style={{ height: '100%', borderRight: 0 }}
                        selectedKeys={this.state.current}
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
                <Layout>
                    
                <Information state_prop={this.state.current} />
                </Layout>
            </Layout>
        );
    }
}

export default MainPage;