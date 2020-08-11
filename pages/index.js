import React from 'react';
import PersonalInformaionForm from '../components/PersonalInformationForm'

function Index() {
    return (
       <div>
           <PersonalInformaionForm/>
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

