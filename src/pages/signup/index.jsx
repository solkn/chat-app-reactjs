import { useEffect } from "react";
import { Card, Form, Input, Button, Typography, Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUpAsync } from "../../store/user/action";
import TopBar from "../../components/top-bar";
import BottomBar from "../../components/bottom-bar";

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { signUpLoading, signUpError, token } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (token) {
      history.push("/messenger");
    }
  }, [token]);

  const handleSubmit = (values) => {
    const { fName, lName, email, password } = values;
    dispatch(signUpAsync(fName, lName, email, password));
  };

  return (

    <>
    <TopBar/>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75vh",
      }}
    >
      <Card style={{ width: "500px" }}>
        <h1 style={{ textAlign: "center" }}>Sign Up</h1>
        {signUpError && signUpError.response ? (
          <Alert
            message={signUpError.response.data.message}
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
            name="fName"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input size="large" placeholder="First Name" />
          </Form.Item>

          <Form.Item
            name="lName"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input size="large" placeholder="Last Name" />
          </Form.Item>

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
                          Sign Up
                        </Button>
                    </Form.Item>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
   
   <BottomBar/>
    </>
  );
};
export default SignUp;
