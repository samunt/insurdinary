import axios from 'axios';
import Link from "next/link";
function Index({posts}) {
    return (
    <div>
        <h1>Our posts</h1>
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
    )
};
// get intiial props runs first time on the server,
// and each consecutive time on the client
Index.getInitialProps = async (ctx) => {

    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const {data} = res;
    return {posts: data} //must be an object

};
export default Index

