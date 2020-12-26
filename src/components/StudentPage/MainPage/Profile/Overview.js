import 'antd/dist/antd.css';
import React from 'react';

import { Layout } from 'antd';
const { Content } = Layout;
class Overview extends React.Component {
    render(){
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                <p> This is Overview</p>
        </Content>
        </Layout>
        )
    }
}

export default Overview;