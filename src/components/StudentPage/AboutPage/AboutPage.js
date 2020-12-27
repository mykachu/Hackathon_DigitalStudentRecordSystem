import 'antd/dist/antd.css';
import React from 'react';

import { Empty, Layout } from 'antd';
class AboutPage extends React.Component {
    render(){
        return (
            <Layout>

            <p> This is AboutPage</p>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </Layout>
        )
    }
}

export default AboutPage;