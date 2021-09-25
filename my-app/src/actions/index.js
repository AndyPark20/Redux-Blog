import jsonPlaceHolder from "../apis/jsonPlaceHolder";

 export const fetchPosts =async() =>{

  // Bad approach! --> Breaking ruls of action creator!!!
  const response = await jsonPlaceHolder.get('/posts');

   return {
     type:'FETCH_POSTS',
     payload:response
   };
 };
