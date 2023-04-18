import * as types from './actionType'
import axios from 'axios'

export const getQuotes=()=>(dispatch)=>{

     dispatch({type:types.GET_DATA_REQUEST})
     return axios.get(`https://api.quotable.io/quotes/random`)
    .then((res)=>{dispatch({type:types.GET_DATA_SUCCESS,payload:res.data})
})
    .catch(()=>dispatch({type:types.GET_DATA_FAILURE}))
}


export const getTags=()=>(dispatch)=>{

    dispatch({type:types.GET_TAGS_REQUEST})
    return axios.get(`https://api.quotable.io/tags`)
   .then((res)=>{dispatch({type:types.GET_TAGS_SUCCESS,payload:res.data})
})
   .catch(()=>dispatch({type:types.GET_TAGS_FAILURE}))
}


export const getSearch=(search)=>(dispatch)=>{

    dispatch({type:types.GET_SEARCH_REQUEST})
    return axios.get(`https://api.quotable.io/quotes?tags=${search}`)
   .then((res)=>{dispatch({type:types.GET_SEARCH_SUCCESS,payload:res.data.results})
   console.log(res,"a")
})
   .catch(()=>dispatch({type:types.GET_SEARCH_FAILURE}))
}


export const addBookmark=(item)=>(dispatch)=>{
console.log(item)
    dispatch({type:types.GET_BOOKMARK_REQUEST})
    localStorage.clear();
    localStorage.setItem("bookmarks",JSON.stringify(item))
   dispatch({type:types.GET_BOOKMARK_SUCCESS,payload:item})
   dispatch({type:types.GET_BOOKMARK_FAILURE})
}







