import React from 'react';
import './style.scss';
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

function Login() {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className="Login">
            <div className="login-box">
                <div className="title">登陆</div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="密码"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block className="login-form-button">
                            登陆
                        </Button>
                    </Form.Item>

                    <div className="no-password">
                        <Button type="link" className="button-no-password">
                            没有账号
                        </Button>
                        <Button type="link" className="button-no-password">
                            忘记密码
                        </Button>
                    </div>
                </Form>

            </div>
        </div>
    );
}

export default Login;
