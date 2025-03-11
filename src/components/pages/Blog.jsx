import {Link, useLoaderData} from "react-router-dom";

export function Blog () {
    const posts = useLoaderData()
    return (
        <div className="">
            <h3>Blog</h3>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}