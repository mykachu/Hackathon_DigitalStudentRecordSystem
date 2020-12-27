import 'antd/dist/antd.css';
import React from 'react';

import { Descriptions, Layout } from 'antd';
class Information extends React.Component {
    render() {
        return (
            <Layout>
                <Descriptions title="Thông tin liên hệ"
                    bordered
                    column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Descriptions.Item label="Số điện thoại" span={2}>
                        0987654321
                </Descriptions.Item>
                    <Descriptions.Item label="Mã tài khoản" span={2}>
                        HS_313901391
                </Descriptions.Item>
                <Descriptions.Item label="Địa chỉ hiện tại" span={2}>
                        1/2/3 Đường 4, Phường 5, Quận 6, Thành phố Hồ Chí Minh
                </Descriptions.Item>
                    <Descriptions.Item label="Email cá nhân" span={2}>
                        default@gmail.com
                </Descriptions.Item>
                <Descriptions.Item label="Số điện thoại cha" span={2}>
                        0987654320
                </Descriptions.Item>
                <Descriptions.Item label="Số điện thoại mẹ" span={2}>
                        0987654329
                </Descriptions.Item>
                

                </Descriptions>
            </Layout>
        )
    }
}

export default Information;