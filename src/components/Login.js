import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import notify from '../helpers/notify';
import { GooglePlusOutlined, FacebookOutlined } from '@ant-design/icons'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = ({ onSubmit, loginWithGoogle, loginWithFaceBook }) => {

  const [loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    try {
      setLoading(true)
      const response = await onSubmit(values.email, values.password)
      if(!response.user){
        notify(response,'error')
      }
    } catch (error) {
       
    }
    setLoading(false)
  };

  const loginGoogle = async () => {
    try {
      setLoading(true)
      const response = await loginWithGoogle()
      console.log('======== Bao Minh: loginGoogle -> response', response)
      if(!response.user){
        notify(response,'error')
      }
    } catch (error) {
       
    }
    setLoading(false)
  }
  const loginFacebook = async () => {
    try {
      setLoading(true)
      const response = await loginWithFaceBook()
      console.log('======== Bao Minh: loginFacebook -> response', response)
      if(!response.user){
        notify(response,'error')
      }
    } catch (error) {
       
    }
    setLoading(false)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type:'email',
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" loading={loading} icon={<GooglePlusOutlined />} onClick={loginGoogle}>
          Login with Google
        </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" loading={loading} icon={<FacebookOutlined />} onClick={loginFacebook}>
          Login with Facebook
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login