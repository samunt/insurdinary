import React from 'react';
import FormApp from '../components/FormApp'
import { BrowserRouter } from "react-router-dom";

function Index() {
    return (
       <div>
           <FormApp/>
       </div>
    )
}
export default Index


// get intiial props runs first time on the server,
// and each consecutive time on the client
// Index.getInitialProps = async (ctx) => {
//
//     // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     // const {data} = res;
//     // return {posts: data} //must be an object
//     return {}
//
// };

