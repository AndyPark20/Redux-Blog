import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts =() => {

  return async function(dispatch, getState) {

    // Bad approach! --> Breaking ruls of action creator!!!
    const response =  await jsonPlaceHolder.get('/posts');
    //We think we are returning plain Js, but in reality because of Async await function,
    //When FetchPost action creator is called, it is returning request function (jsonPlaceHolder)  rather than plain JS object.
    //That is why we are seeing an error message!

    /***********************  OR *********************************/
    //we can use WITHOUT AWAIT!
    //However, the components can run faster than fetching data.
    //As a result, by the time the reducer looks at the action form, there are no data because its still fetching!

    //MIDDLEWARE
    // Plain javascript function that gets called everytime it get dispatched.
    //Has the ability to control, modify actions.

    //Redux thunk can return action objects, or it can return functions

    dispatch({type:'FETCH_POSTS', payload:response})
  };
};



//You can also return action creators that are returning normal objectss!!!
export const selectPost =()=>{
  return{
    type:'SELECT_POST'
  }
}
