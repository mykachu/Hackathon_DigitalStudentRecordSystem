import 'antd/dist/antd.css';
import React from 'react';

import { Layout, Descriptions, Switch } from 'antd';
const { Content } = Layout;
class Privacy extends React.Component {
    render() {
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Descriptions title="Tuỳ chỉnh quyền riêng tư"
                    bordered
                    column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                    <Descriptions.Item label="Hiển thị ngày sinh">
                       <Switch></Switch>
                </Descriptions.Item>
                    <Descriptions.Item label="Hiển thị năm sinh">
                    <Switch></Switch>
                </Descriptions.Item>
                    <Descriptions.Item label="Hiện thị bằng tốt nghiệp" >
                    <Switch></Switch>
                </Descriptions.Item>
                    <Descriptions.Item label="Cho phép tải bảng điểm">
                    <Switch></Switch>
                </Descriptions.Item>
                </Descriptions>
            </Layout>
        
        )
    }
}

export default Privacy;