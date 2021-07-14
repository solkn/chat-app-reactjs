import { useEffect } from "react";
import { Card, Form, Input, Button, Typography, Alert } from "antd";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../store/user/action";
import TopBar from "../../components/top-bar";
import BottomBar from "../../components/bottom-bar";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loginLoading, loginError, token } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (token) {
      history.push("/user");
    }
  }, [token]);

  const handleSubmit = (values) => {
    const { email, password } = values;
    dispatch(loginAsync(email, password));
  };

  return (
    <>
    <TopBar/>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "79vh",
      }}
    >
      <Card style={{ width: "500px" }}>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        {loginError && loginError.response ? (
          <Alert
            message={loginError.response.data.message}
            type="error"
            closable
            style={{
              marginTop: 5,
              marginBottom: 5,
            }}
          />
        ) : null}

        <Form initialValues={{}} onFinish={handleSubmit}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input size="large" placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
             <Form.Item>
                        
                            <Button
                              type="primary"
                              htmlType="submit"
                              style={{ width: "250px",height:50,
                              borderRadius:30,display:"block" }}
                            >
                              Login
                            </Button>
                        </Form.Item>
            </div>
          </Form.Item>
          <Form.Item>
            <Typography.Text>
              Don't have accout? <Link to="/signup">Sign Up</Link>
            </Typography.Text>
          </Form.Item>
        </Form>
      </Card>
    </div>

  <BottomBar/>
    </>
  );
};
export default Login;