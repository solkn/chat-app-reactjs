import { Form, Input, Button, Space, Typography } from 'antd';

const SignUp = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Form.Item label="fName">
        <Space>
          <Form.Item
            name="fName"
            noStyle
            rules={[{ required: true, message: 'first name is required' }]}
          >
            <Input style={{ width: 250,fontStyle:'italic' }} placeholder="Please input" />
          </Form.Item>
      
        </Space>
      </Form.Item>
      <Form.Item label="lName">
        <Space>
          <Form.Item
            name="lName"
            noStyle
            rules={[{ required: true, message: 'last name is required' }]}
          >
            <Input style={{ width: 250,fontStyle:'italic' }} placeholder="Please input" />
          </Form.Item>
    
        </Space>
      </Form.Item>
      <Form.Item label="Email">
          
      <Space>
          <Form.Item
            name="email"
            noStyle
            rules={[{ required: true, message: 'Email is required' }]}
          >
            <Input style={{ width: 250,fontStyle:'italic'  }} placeholder="Please input" />
          </Form.Item>
 
        </Space>
       
      </Form.Item>

      <Form.Item label="Password">
        <Space>
          <Form.Item
            name="password"
            noStyle
            rules={[{ required: true, message: 'password is required' }]}
          >
            <Input style={{ width: 250,fontStyle:'italic'  }} placeholder="Please input" />
          </Form.Item>
          
        </Space>
      </Form.Item>
    
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;