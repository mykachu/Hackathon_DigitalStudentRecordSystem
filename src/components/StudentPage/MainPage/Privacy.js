import 'antd/dist/antd.css';
import React from 'react';

import { Layout, Switch} from 'antd';
const { Content } = Layout; 
class Privacy extends React.Component {
    render(){
        return (
            <Layout style={{ padding: '0 24px 24px'}}>
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                <Switch> <span> Show birthday</span> </Switch>
        </Content>
        </Layout>
        )
    }
}

export default Privacy;