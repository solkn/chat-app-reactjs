import { useState } from "react";
import { Card, Row, Col, Button, Pagination } from "antd";
import { PlusOutlined } from "@ant-design/icons";

//import TopBar from "../../components/tob-bar";

const Home = () => {
  const [isModalOpen, setModal] = useState(false);

  const handleMessageChange = (msg) => {
    /**
     * TODO: Handle pagination change
     */
  };

  const handleMessageClick = (page) => {
    /**
     * TODO: Handle book click
     */
  };

  return (
    <>
      <div
        style={{
          marginTop: "20px",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <Button
            type="default"
            style={{ width: "100px" }}
            onClick={() => setModal(true)}
          >
            <PlusOutlined />
            Add
          </Button>
        </div>
        <>
          <Row gutter={16}>
            <Col span={5} onClick={handleMessageClick}>
              <Card
                hoverable
                cover={
                  <img
                    src={`https://picsum.photos/200/300`}
                    alt="This is alt"
                  />
                }
              >
                <Card.Meta
                  title="You don't know JS"
                  description="This is the message"
                />
              </Card>
            </Col>
          </Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Pagination
              defaultCurrent={1}
              total={0}
              onChange={handleMessageChange}
            />
          </div>
        </>
        )
      </div>
    </>
  );
};
export default Home;