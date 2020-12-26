import React from 'react';

import { Layout, Switch } from 'antd';
const { Content } = Layout;

class Information extends React.Component {

    render(props) {
        const state_prop = this.props.state_prop
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                ><Switch></Switch>
                        Information
            </Content>
            </Layout>
        );
    }
}

export default Information;