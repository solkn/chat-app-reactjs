import { MessageActionTypes } from "./types";
import axios from "axios";

/**
 * MESSAGE FETCH ACTION
 * @returns ACTION
 */

export const fetchMessageStart = () =>({
     type:MessageActionTypes.MESSAGE_FETCH_START,
});
export const fetchMessageSuccess = (messages) =>({
   
  type:MessageActionTypes.MESSAGE_FETCH_SUCCESS,
    
   payload:messages,
       

});
export const fetchMessageError = (error) =>({
    type:MessageActionTypes.MESSAGE_FETCH_FAILURE,
    payload:{
        error,
    }
});


/**
 * MESSAGE CREATE ACTION
 * @returns ACTION
 */

 export const createMessageStart = () =>({
    type:MessageActionTypes.MESSAGE_CREATE_START,
});
export const createMessageSuccess = (message) =>({
   type:MessageActionTypes.MESSAGE_CREATE_SUCCESS,
   payload:{
       message,
   },
});
export const createMessageError = (error) =>({
   type:MessageActionTypes.MESSAGE_CREATE_FAILURE,
   payload:{
       error,
   }
});

/**
 * MESSAGE UPDATE ACTION
 * @returns ACTION
 */

 export const updateMessageStart = () =>({
    type:MessageActionTypes.MESSAGE_UPDATE_START,
});
export const updateMessageSuccess = (msg) =>({
   type:MessageActionTypes.MESSAGE_UPDATE_SUCCESS,
   payload:{
       msg,
   },
});
export const updateMessageError = (error) =>({
   type:MessageActionTypes.MESSAGE_UPDATE_FAILURE,
   payload:{
       error,
   }
});


/**
 * MESSAGE DELETE ACTION
 * @returns ACTION
 */

 export const deleteMessageStart = () =>({
    type:MessageActionTypes.MESSAGE_DELETE_START,
});
export const deleteMessageSuccess = (msg) =>({
   type:MessageActionTypes.MESSAGE_DELETE_SUCCESS,
   payload:{
       msg,
   },
});
export const deleteMessageError = (error) =>({
   type:MessageActionTypes.MESSAGE_DELETE_FAILURE,
   payload:{
       error,
   }
});


/**
 * Message Async Action Types
 */

 export const fetchMessagesAsync = () => {
    return async (dispatch, getState) => {
      const {
        user: { token },
      } = getState();
      try {
        dispatch(fetchMessageStart());
        const response = await axios.get(
          "/api/v1/messages",
          {
           
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        dispatch(
          fetchMessageSuccess(
          
            response.data.data
            
          )
         
        );
      } catch (err) {
        dispatch(fetchMessageError(err));
      }
    };
  };
  
  export const createMessageAsync = (msg) => {
    return async (dispatch, getState) => {
      const {
        user: { token },
      } = getState();
      try {
        dispatch(createMessageStart());
        const response = await axios.post(
          "/api/v1/messages",
          {
             msg,
             
             
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        dispatch(createMessageSuccess(response.data.data));
      } catch (err) {
        dispatch(createMessageError(err));
      }
    };
  };

  export const updateMessageAsync = (message,messageFrom,messageTo) => {
    return async (dispatch, getState) => {
      const {
        user: { token },
      } = getState();
      try {
        dispatch(updateMessageStart());
        const response = await axios.put(
          "/api/v1/messages",
          {
              message,
              messageFrom,
              messageTo,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "text/json",
            },
          }
        );
        dispatch(updateMessageSuccess(response.data.data));
      } catch (err) {
        dispatch(updateMessageError(err));
      }
    };
  };

  export const deleteMessageAsync = (message) => {
    return async (dispatch, getState) => {
      const {
        user: { token },
      } = getState();
      try {
        dispatch(deleteMessageStart());
        const response = await axios.delete(
          "/api/v1/messages",
          
              message,
        
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        dispatch(deleteMessageSuccess(response.data.data));
      } catch (err) {
        dispatch(deleteMessageError(err));
      }
    };
  };

