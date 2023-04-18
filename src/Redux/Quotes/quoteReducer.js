
import * as types from './actionType'

const initialState = {
  quote: [],
  isLoading: false,
  isError: false,
  tags:[],
  bookmarks:localStorage.getItem("bookmarks")!==null?JSON.parse(localStorage.getItem("bookmarks")):[],
};

export const quoteReducer = (state = initialState,action) => {

  const {type,payload}=action
//  console.log(state.isLoading);
  
  switch(type){
    case types.GET_DATA_REQUEST:{
      return{
        ...state,isLoading:true,
        isError:false
      }

    }

    case types.GET_DATA_SUCCESS:{
      return{
        ...state,quote:payload,
        isLoading:false,
        isError:false
      }

    }
    case types.GET_DATA_FAILURE:{
      return{
        ...state,isLoading:false,
        isError:true
      }

    }
    case types.GET_TAGS_REQUEST:{
      return{
        ...state,isLoading:true,
        isError:false
      }

    }

    case types.GET_TAGS_SUCCESS:{
      return{
        ...state,tags:payload,
        isLoading:false,
        isError:false
      }

    }
    case types.GET_TAGS_FAILURE:{
      return{
        ...state,isLoading:false,
        isError:true
      }

    }

    case types.GET_SEARCH_REQUEST:{
      return{
        ...state,isLoading:true,
        isError:false
      }

    }

    case types.GET_SEARCH_SUCCESS:{
      return{
        ...state,quote:payload,
        isLoading:false,
        isError:false
      }

    }
    case types.GET_SEARCH_FAILURE:{
      return{
        ...state,isLoading:false,
        isError:true
      }

    }

    case types.GET_BOOKMARK_REQUEST:{
      return{
        ...state,isLoading:true,
        isError:false
      }

    }

    case types.GET_BOOKMARK_SUCCESS:{
      return{
        ...state,bookmarks:payload,
        isLoading:false,
        isError:false
      }

    }
    case types.GET_BOOKMARK_FAILURE:{
      return{
        ...state,isLoading:false,
        isError:true
      }

    }
    
    
    default:
     return state;
  }
  
  
};
