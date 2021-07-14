import { MessageActionTypes } from "./types";

const INITIAL_STATE = {
  fetchMessagesLoading: false,
  createMessageLoading: false,
  createMessageSuccess: false,
  updateMessageLoading: false,
  updateMessageSuccess: false,
  deleteMessageLoading: false,
  deleteMessageSuccess: false,
  messages: null,
  message:{},
  createMessageError: null,
  fetchMessagesError: null,
  updateMessageError:null,
  deleteMessageError:null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MessageActionTypes.MESSAGE_FETCH_START:
      return {
        ...state,
        fetchMessagesLoading: true,
        fetchMessagesError: null,
      };
    case MessageActionTypes.MESSAGE_FETCH_SUCCESS:
      return {
        ...state,
        fetchMessagesLoading: false,
        messages:action.payload
      };
    case MessageActionTypes.MESSAGE_FETCH_FAILURE:
      return {
        ...state,
        fetchMessagesLoading: false,
        fetchMessagesError: action.payload.error,
      };

    case MessageActionTypes.MESSAGE_CREATE_START:
      return {
        ...state,
        createMessagesLoading: true,
        createMessagesError: null,
      };
    case MessageActionTypes.MESSAGE_CREATE_SUCCESS:
      return {
        ...state,
        createMessageLoading: false,
        createMessageSuccess: true,
        messages: [action.payload.message, ...state.messages],
      };
    case MessageActionTypes.MESSAGE_CREATE_FAILURE:
      return {
        ...state,
        createMessageLoading: false,
        createMessageError: action.payload.error,
      };

      case MessageActionTypes.MESSAGE_UPDATE_START:
      return {
        ...state,
        updateMessageLoading: true,
        updateMessageError: null,
      };
    case MessageActionTypes.MESSAGE_UPDATE_SUCCESS:
      return {
        ...state,
        updateMessageLoading: false,
        updateMessageSuccess: true,
        messages: [action.payload.msg, ...state.messages],
      };
    case MessageActionTypes.MESSAGE_UPDATE_FAILURE:
      return {
        ...state,
        updateMessageLoading: false,
        updateMessageError: action.payload.error,
      };
    case MessageActionTypes.MESSAGE_DELETE_START:
        return{
            ...state,
            deleteMessageLoading:true,
            deleteMessageError:null,
        };
    case MessageActionTypes.MESSAGE_DELETE_SUCCESS:
        return{
            ...state,
            deleteMessageLoading:false,
            deleteMessageSuccess:true,

        };
    case MessageActionTypes.MESSAGE_DELETE_FAILURE:
        return{
            ...state,
            deleteMessageLoading:false,
            deleteMessageError:action.payload.error,
        };
    default:
      return state;
  }
};

export default reducer;