import React, {useState} from 'react';
import './style.scss';
import {Timeline, Button, Modal, Form, Input, DatePicker} from 'antd';
import {ClockCircleOutlined} from '@ant-design/icons';

function Work() {
    let [isModalVisible, setIsModalVisible] = useState(false);

    let showModal = () => {
        setIsModalVisible(true);
    };

    let onFinish = (values) => {
        console.log('Success:', values);
    }

    let onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <div className="Work">
            <div className="operate">
                <Button type="primary" onClick={showModal}>
                    新增
                </Button>
                <Modal title="新增"
                       visible={isModalVisible}
                       onCancel={()=>{setIsModalVisible(false)}}
                       maskClosable={false}
                       footer={null}
                >
                    <Form
                        name="basic"
                        labelCol={{span: 8}}
                        wrapperCol={{span: 16}}
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="标题"
                            name="username"
                            rules={[{required: true, message: 'Please input your username!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item name={['user', 'introduction']} label="内容">
                            <Input.TextArea/>
                        </Form.Item>
                        <Form.Item label="预计完成时间">
                            <DatePicker/>
                        </Form.Item>

                        <Form.Item wrapperCol={{offset: 8, span: 16}}>
                            <Button type="primary" htmlType="submit">
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
            <div className="timeline-div">
                <Timeline mode="alternate">
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{fontSize: '16px'}}/>}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.
                    </Timeline.Item>
                    <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{fontSize: '16px'}}/>}>
                        Technical testing 2015-09-01
                    </Timeline.Item>

                </Timeline>
            </div>
        </div>
    );
}

export default Work;
