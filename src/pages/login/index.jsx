import { Form, Input, Button, Space } from 'antd';


const Login = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Form.Item label="Email">
        <Space>
          <Form.Item
            name="email"
            noStyle
            rules={[{ required: true, message: 'Username is required' }]}
          >
            <Input style={{ width: 250,fontStyle:'italic' }} placeholder="Please input" />
          </Form.Item>
        </Space>
      </Form.Item>
      <Form.Item label="Password">
          
      <Space>
          <Form.Item
            name="password"
            noStyle
            rules={[{ required: true, message: 'Password is required' }]}
          >
            <Input style={{ width: 250, fontStyle:'italic' }} placeholder="Please input" />
          </Form.Item>
        </Space>
       
      </Form.Item>
    
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          SignIn
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;