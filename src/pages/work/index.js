import React, {useState} from 'react';
import './style.scss';
import {Timeline, Button, Modal, Form, Input, DatePicker, Popconfirm, message} from 'antd';
import {ClockCircleOutlined} from '@ant-design/icons';
import CircleIcon from '../components/icon/circleIcon'

function WorkSection() {
    const {TextArea} = Input;

    let [isModalVisible, setIsModalVisible] = useState(false);   // 点击新增弹窗
    let [whiceIcon, setWhiceIcon] = useState(1);   // 显示哪个圆圈icon

    let onFinish = (values) => {
        console.log('Success:', values);
    }

    // 点击小圆圈触发
    let circleClick = () => {
        message.info('Clicked on Yes.');
    }

    // 抉择圆圈icon
    let checkCircleIcon = (key) => {
        switch (key) {
            case 1 :
                return <CircleIcon className="timeline-mIcon" type={'true'}/>
                break
        }
    }

    return (
        <div className="Work">
            <div className="operate">
                <Button type="primary" onClick={() => {
                    setIsModalVisible(true)
                }}>
                    新增
                </Button>
                <Modal title="新增"
                       visible={isModalVisible}
                       onCancel={() => {
                           setIsModalVisible(false)
                       }}
                       maskClosable={false}
                       footer={null}
                >
                    <Form
                        name="basic"
                        labelCol={{span: 8}}
                        wrapperCol={{span: 16}}
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="标题"
                            name="username"
                            rules={[{required: true, message: 'Please input your username!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="内容"
                            name="textArea"
                            rules={[{required: true, message: 'Please input your textArea!'}]}
                        >
                            <Input.TextArea/>
                        </Form.Item>

                        <Form.Item name="datePicker" label="预计完成时间">
                            <DatePicker placeholder={'选择时间'}/>
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
                <Timeline mode="alternate" pending={false}>
                    <Timeline.Item dot={checkCircleIcon(1)}>
                        <Popconfirm
                            placement="top"
                            icon={checkCircleIcon(1)}
                            title={<TextArea autoSize/>}
                            onConfirm={circleClick}
                            okText="确认" cancelText="取消">
                            <span className="timeline-content">Create a services site 2015-09-01</span>
                        </Popconfirm>
                    </Timeline.Item>
                    <Timeline.Item dot={<CircleIcon className="timeline-mIcon" type={'false'}/>}>
                        <Popconfirm
                            placement="top"
                            title={'Are you sure to delete this task?'}
                            onConfirm={circleClick}
                            okText="Yes" cancelText="No">
                            <span className="timeline-content">Solve initial network problems 2015-09-02</span>
                        </Popconfirm>
                    </Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined className="timeline-icon"/>}>
                        <Popconfirm
                            placement="top"
                            title={'Are you sure to delete this task?'}
                            onConfirm={circleClick}
                            okText="Yes" cancelText="No">
                            <span className="timeline-content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.</span>
                        </Popconfirm>
                    </Timeline.Item>
                    <Timeline.Item dot={<CircleIcon className="timeline-mIcon" type={'wait'}/>}>
                        <Popconfirm
                            placement="top"
                            title={'Are you sure to delete this task?'}
                            onConfirm={circleClick}
                            okText="Yes" cancelText="No">
                            <span className="timeline-content">Network problems being solved 2015-09-01</span>
                        </Popconfirm>
                    </Timeline.Item>
                    <Timeline.Item dot={<CircleIcon className="timeline-mIcon" type={'true'}/>}>
                        <Popconfirm
                            placement="top"
                            title={'Are you sure to delete this task?'}
                            onConfirm={circleClick}
                            okText="Yes" cancelText="No">
                            <span className="timeline-content">Create a services site 2015-09-01</span>
                        </Popconfirm>
                    </Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined className="timeline-icon"/>}>
                        <Popconfirm
                            placement="top"
                            title={'Are you sure to delete this task?'}
                            onConfirm={circleClick}
                            okText="Yes" cancelText="No">
                            <span className="timeline-content">Technical testing 2015-09-04</span>
                        </Popconfirm>
                    </Timeline.Item>
                </Timeline>
            </div>
        </div>
    );
}

export default WorkSection;
