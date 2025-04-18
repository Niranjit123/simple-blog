import { getBlogPosts } from "@/data/BlogPost";


export  function GET(){
const posts = getBlogPosts()
console.log('GET /api/posts hit');

return Response.json({posts})
}