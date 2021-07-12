import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/action";
import BottomBar from "../../components/bottom-bar";
import UserNavBar from "../../components/user_nav";
import { Input,Form,Button,Spin} from "antd";
import { fetchMessagesAsync } from "../../store/message/action";


const Messenger = () => {

  const dispatch = useDispatch();
  const history = useHistory();



  const { messages,fetchMessagesLoading} = useSelector(
          state => state.message);
  


  useEffect(() => {
    
    dispatch(fetchMessagesAsync());

  }, []);


  console.log("messages are now:",messages);
 
 const handleMessageClick = (id) => {
    history.push(`/messages/${id}/edit`);
  };


  const onSend = () => {
    dispatch(logOut());
  }

  if (fetchMessagesLoading || !messages) {
    return (
      <>
        <UserNavBar />
        <div
          style={{
            width: "100%",
            height: "550px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin tip="Loading messages..." />
        </div>

        <BottomBar/>
      </>
    );
  }
  return (
    <>
    <UserNavBar/>

    <div id ="messenger" style={{marginLeft:400,marginTop:10,width:500}}>
         
             <h2>Messages List</h2>
          <div>
            
            <ul>
              {
                //JSON.stringify(messages)
                 messages.map((message) =>
                  (<li>{message.msg}</li>
                 ))
              }
            </ul>
           
         </div>
    </div>
    
    
   <Form initialValues={{}} onFinish={onSend}>
        
          <Form.Item
            name="message"
          >
            <Input.TextArea rows={4} placeholder="write some thing" 
                    style={{marginLeft:400,marginTop:10,width:400}} />
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
                style={{ width: "100px",height:50,marginTop:-115,
                marginLeft:450,borderRadius:30,display:"block" }}
              >
                Send
              </Button>
            </div>
          </Form.Item>
   
        </Form>

  <BottomBar style={{marginTop:-200,position:"absolute"}}/>
    </>
  );
};
export default Messenger;




// function MessageContainer ({ messageData,fetchMessages }){

//   useEffect(()=>{ 
//       fetchMessages()
//   },[])

//   return (
//     messageData.fetchMessagesLoading ?(
//       <h2>Loading</h2>
//     ):messageData.fetchMessagesError?(

//       <h2>{ messageData.fetchMessagesError }</h2>
//     ):
    
//     (
//       <div>
//         <h2>Messages List</h2>
//          <div>
//            {
//             //  messageData &&
//             //  messageData.messages &&
//               messageData.messages.map(message => console.log(message.msg))
//            }
//          </div>
//       </div>
//     )
//   )

// }


// const mapStateToProps = state => {
//   return {
//       messageData: state.message
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//       fetchMessages: () => dispatch(fetchMessagesAsync())
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(MessageContainer)