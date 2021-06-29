import React from 'react';
import './style.scss';
import {Statistic, Row, Col, Button} from 'antd';
import { LikeOutlined } from '@ant-design/icons';

function Statistical() {
    return (
        <div className="Statistic">
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Active Users" value={112893} />
                </Col>
                <Col span={12}>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                    <Button style={{ marginTop: 16 }} type="primary">
                        Recharge
                    </Button>
                </Col>
                <Col span={12}>
                    <Statistic title="Active Users" value={112893} loading />
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                </Col>
                <Col span={12}>
                    <Statistic title="Unmerged" value={93} suffix="/ 100" />
                </Col>
            </Row>
        </div>
    );
}

export default Statistical;
