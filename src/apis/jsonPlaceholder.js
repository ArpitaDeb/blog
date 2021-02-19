import axios from 'axios';

export default axios.create ({
  baseURL:'https://zcd525xvsa.execute-api.us-east-1.amazonaws.com/dev/get-illness'
})
//baseURL:'http://localhost:5000/'
//baseURL:'https://jsonplaceholder.typicode.com'