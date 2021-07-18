import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import BottomBar from "../../components/bottom-bar";
import UserNavBar from "../../components/user_nav";
import { Input,Form,Button,Spin} from "antd";
import { fetchMessagesAsync,createMessageAsync } from "../../store/message/action";
import { fetchUsersAsync } from "../../store/user/action";
import { io } from "socket.io-client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import moment from "moment";


  const Messenger = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [socket,setSocket] = useState();
  
  const { messages,fetchMessagesLoading } = useSelector(
    (state) => state.message);

  const { users,fetchUsersLoading,token } = useSelector(
  (state) => state.user);



  useEffect(()=>{
   
    const s = io("ws://localhost:8080");
     setSocket(s);
     
    return() =>{
          s.disconnect();
    };

    

  },[]);

  var usersId = [];
  users?.map((user)=>(
   usersId.push(user._id)
  ));
 

  useEffect(()=>{

    socket?.emit("addUser","this is from client!")
    socket?.on("getUsers",data =>{
      console.log(data)
    });
  },[socket]);


  useEffect(() => {
    
    dispatch(fetchMessagesAsync());

  }, []);

  useEffect(() => {
    
    dispatch(fetchUsersAsync());

  }, []);

    
  
 const handleSubmit = (values) => {
     
      const { msg } = values;


     socket.emit("sendMessage",{
      msg:msg,
    });
    
     
     dispatch(createMessageAsync(msg));
     
     socket?.on("getMessage",data =>{

      dispatch(fetchMessagesAsync());
      console.log("data:",data);
      
    });

    

  };

  useEffect(()=>{
    socket?.on("getMessage",data =>{

      dispatch(fetchMessagesAsync());
      

    });
},[socket]);

  


  if (fetchUsersLoading || !users || fetchMessagesLoading || !messages) {
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
 
     
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>

<div class="container">

    <div class="page-title">
        <div class="row gutters">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"> </div>
        </div>
    </div>

    <div class="content-wrapper">

        <div class="row gutters">

            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                <div class="card m-0">

                    <div class="row no-gutters">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
                            <div class="users-container">
                                <div class="chat-search-box">
                                    <div class="input-group">
                                        <input class="form-control" placeholder="Search"/>
                                        <div class="input-group-btn">
                                            <button type="button" class="btn btn-info">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <ul class="users">
                                    {
                                    
                                      users.map((user) =>(
                                    <li class="person" data-chat="person1">
                                        <div class="user">
                                            <img src="https://www.bootdey.com/img/Content/avatar/avatar6.png" alt="Retail Admin"/>
                                            <span class="status busy"></span>
                                        </div>
                                        <p class="name-time">
                                            <span class="name">{user.firstName} {user.lastName}</span>
                                            <span class="time"style ={{marginLeft:20}}>{user.email}</span>
                                        </p>
                                    </li>
                                     
                                     
                                     ))

                               }
                                
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
                            <div class="selected-user">
                                <span class="name">Chat App</span>
                            </div>
                            <div class="chat-container">
                                <ul class="chat-box chatContainerScroll">
                                  {
                                    messages.map((message) =>(

                                      <li class="chat-left">
                                      <div class="chat-avatar">
                                          <img src="https://www.bootdey.com/img/Content/avatar/avatar6.png" alt="Retail Admin"/>
                                          <div class="chat-name">{message.msgFrom.firstName}
                                          </div>
                                      </div>
                                      <div class="chat-text">
                                          <br/>{message.msg}</div>
                                      <div class="chat-hour">{moment(message.createdOn).calendar()} <span class="fa fa-check-circle"></span></div>
                                  </li>

                                    ))
                                   
                                    
                  
                  }
                                  
                                </ul>
                               

                <Form initialValues={{}} onFinish={handleSubmit}>
                      
                      <Form.Item
                        name="msg"
                      >
                        <Input.TextArea rows={4} placeholder="write some thing" 
                                style={{marginLeft:100,marginTop:10,width:400}} />
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
                              style={{ width: "150px",height:50,marginTop:-115,
                              marginLeft:450,borderRadius:30,display:"block"}}
                            >
                              Send
                            </Button>
                          </div>
                        </Form.Item>
                
                      </Form>

         
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>

</div>



  <BottomBar/>
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