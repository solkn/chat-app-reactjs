import { useEffect } from "react";
import { Card, Form, Input, Button, Typography, Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createMessageAsync } from "../../store/message/action";
import TopBar from "../top-bar";
import BottomBar from "../bottom-bar";

const AddMessage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
 
  const { createMessageLoading, createMessageError } = useSelector(
    (state) => state.message
  );
  
  // useEffect(() => {
  
  //     history.push("/messenger");
    
  // }, []);

  const handleSubmit = (values) => {
   
    const { msg, msgFrom, msgTo } = values;
   
    dispatch(createMessageAsync(msg,msgFrom,msgTo));

    history.push("/messenger");
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
        <h1 style={{ textAlign: "center" }}>Add Message</h1>
        {createMessageError && createMessageError.response ? (
          <Alert
            message={createMessageError.response.data.message}
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
            name="msg"
          >
            <Input.TextArea rows={4} placeholder="write some thing" 
                    style={{marginLeft:20,marginTop:10,width:400}} />
          </Form.Item>
          <Form.Item
            name="msgFrom"
            rules={[
              { required: true},
            ]}
          >
            <Input size="large" placeholder="sender" />
          </Form.Item>


          <Form.Item
            name="msgTo"
            rules={[{ required: true}]}
          >
            <Input size="large" placeholder="receiver" />
          </Form.Item>

          <Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "200px" }}
                disabled={createMessageLoading}
                loading={createMessageLoading}
              >
                Add
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
   
   <BottomBar/>
    </>
  );
};
export default AddMessage;
