import 'antd/dist/antd.css';
import React from 'react';

import { Descriptions, Layout } from 'antd';
class Overview extends React.Component {
    render() {
        return (
            <Layout>
                <Descriptions title="Tổng Quan"
                    bordered
                    column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}>
                    <Descriptions.Item label="Mã Học sinh">
                        HS_313901391
                </Descriptions.Item>
                    <Descriptions.Item label="Giới tính">
                        NAM
                </Descriptions.Item>
                    <Descriptions.Item label="Họ và tên">
                        BÙI CÔNG NAM
                </Descriptions.Item>
                    <Descriptions.Item label="Ngày sinh">
                        13/01
                </Descriptions.Item>
                    <Descriptions.Item label="Năm sinh">
                        2009
                </Descriptions.Item>
                    <Descriptions.Item label="Nơi sinh">
                        THÀNH PHỐ HỒ CHÍ MINH
                </Descriptions.Item>
                    <Descriptions.Item label="Dân tộc">
                        KINH
                </Descriptions.Item>
                    <Descriptions.Item label="Trình độ">
                        6/12
                    </Descriptions.Item>
                    <Descriptions.Item label="Họ tên cha">
                        BÙI VĂN A
                </Descriptions.Item>
                    <Descriptions.Item label="Họ tên mẹ">
                        NGUYỄN THỊ B
                </Descriptions.Item>
                </Descriptions>
            </Layout>
        )
    }
}

export default Overview;