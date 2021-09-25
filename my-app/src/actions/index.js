import jsonPlaceHolder from "../apis/jsonPlaceHolder";

 export const fetchPosts =async() =>{

  // Bad approach! --> Breaking ruls of action creator!!!
  const response = await jsonPlaceHolder.get('/posts');
  //We think we are returning plain Js, but in reality because of Async await function,
  //When FetchPost action creator is called, it is returning request function (jsonPlaceHolder)  rather than plain JS object.
  //That is why we are seeing an error message!

  /***********************  OR *********************************/
  //we can use WITHOUT AWAIT!
  //However, the components can run faster than fetching data.
  //As a result, by the time the reducer looks at the action form, there are no data because its still fetching!

   return {
     type:'FETCH_POSTS',
     payload:response
   };
 };
