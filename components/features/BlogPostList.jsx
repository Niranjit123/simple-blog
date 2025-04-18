import truncateText from "@/lib/utils"
import Link from "next/link"

export default function BlogPostList({posts}){

    return (

        <div>
            <h2>Blog Posts</h2>
            <ul className="border-10">
           { posts.map((post)=>(
                <li className="border-4 border-indigo-200" key={post.id}>

                <Link href={`/blog/${post.slug}`} >    <h3>{post.title}</h3> </Link>
                    <p>{truncateText(post.content)}</p>
                </li>
            ))}

            </ul>

        </div>
    )
}