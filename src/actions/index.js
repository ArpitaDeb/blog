import jsonPlaceholder from '../apis/jsonPlaceholder';

//Action creator
export const fetchPosts = () =>
  async dispatch => {
    const response = await jsonPlaceholder.get('/');
    //console.log(response);
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    });
  };
