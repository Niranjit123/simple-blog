import getBlogPostBySlug from "@/data/BlogPost"
import { getBlogPosts } from "@/data/BlogPost"
import Header from "@/components/common/Header"
import Footer from "@/components/common/footer"
import { formatDate } from "@/lib/utils"


export function generateStaticParams(){
    const posts = getBlogPosts()
    return posts.map((post)=>(
        {slug: post.slug,}
    ))
}

 
export default function BlogPost({params}){
     
    

    const post = getBlogPostBySlug(params.slug)

    return (
        <div>
            <Header/>
            <div className="border-3 border-blue-300 mt-40 mb-20 px-10 py-5" >
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <p>Published on : {formatDate(post.date)}</p>
                <p>{post.date}</p>
            </div>
        <Footer/>
        </div>
    )
}