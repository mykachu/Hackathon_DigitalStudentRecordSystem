import 'antd/dist/antd.css';
import React from 'react';

import { Descriptions, Layout } from 'antd';
class Work extends React.Component {
    render() {
        return (
            <Layout>
                <Descriptions title="Học vấn"
                    bordered
                    column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}>
                    <Descriptions.Item label="Tiểu học" span={2}>
                        Trường Tiểu học VinSchool
                </Descriptions.Item>
                    <Descriptions.Item label="Trung học cơ sở" span={2}>
                    Trường Trung học Vinschool
                </Descriptions.Item>
                    <Descriptions.Item label="Trung học phổ thông" span={2}>
                        N/A
                </Descriptions.Item>
                    <Descriptions.Item label="Đại học" span={2}>
                        N/A
                </Descriptions.Item>
                </Descriptions>

                <Descriptions title="Công việc"
                    bordered
                    column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}>
                    <Descriptions.Item label="Front End Development" span={2}>
                        27/12/2020
                </Descriptions.Item>
                <br />
                <hr /> 
                </Descriptions>
            </Layout>
        )
    }
}

export default Work;