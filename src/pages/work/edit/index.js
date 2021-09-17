import React from 'react';
import './style.scss';
import {Form, Input, Button, Space} from 'antd';


function WorkEdit(props) {


    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="Work-edit">
            <Form
                name="basic"
                wrapperCol={{
                    span: 200,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="标题"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: '请输入标题!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="内容"
                    name="content"
                    rules={[
                        {
                            required: true,
                            message: '请输入内容!',
                        },
                    ]}
                >
                    <Input.TextArea rows={8}/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 10,
                        span: 16,
                    }}
                >
                    <Space>
                        <Button onClick={()=>{props.history.goBack()}}>
                            取消
                        </Button>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
}

export default WorkEdit;
