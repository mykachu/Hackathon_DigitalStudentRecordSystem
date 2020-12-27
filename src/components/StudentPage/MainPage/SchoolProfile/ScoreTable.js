import 'antd/dist/antd.css';
import React from 'react';

import { Layout, Empty } from 'antd';
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
                <p> This is ScoreTable at level: {this.props.level}</p>
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Content>
        </Layout>
        )
    }
}

export default Overview;