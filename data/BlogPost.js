const BlogPosts =[
   {
    id: 1,
    title: "How to win",
    slug:"how-to-win",
    date:"2025-01-10",
    content: "gfishfio sofdj osifj eoijfso ocsjdfosdjfosd o fiodsuefjoii vs jvjoidfvjoiv "
   },
   {
    id: 2,
    title: "How to ndfkljd win",
    slug:"how-to-sdjkgdfl-win",
    date:"2025-01-30",
    content: "lorem =lorem()lorem50  dsgjkldgjsljdf sldjglsjfsldkmf sld jkdfskljfwlk gfishfio sofdj osifj eoijfso ocsjdfosdjfosd o fiodsuefjoii vs jvjoidfvjoiv lorem =lorem()lorem50  dsgjkldgjsljdf sldjglsjfsldkmf sld jkdfskljfwlk gfishfio sofdj osifj eoijfso ocsjdfosdjfosd o fiodsuefjoii vs jvjoidfvjoiv lorem =lorem()lorem50  dsgjkldgjsljdf sldjglsjfsldkmf sld jkdfskljfwlk gfishfio sofdj osifj eoijfso ocsjdfosdjfosd o fiodsuefjoii vs jvjoidfvjoivlorem =lorem()lorem50  dsgjkldgjsljdf sldjglsjfsldkmf sld jkdfskljfwlk gfishfio sofdj osifj eoijfso ocsjdfosdjfosd o fiodsuefjoii vs jvjoidfvjoiv lorem =lorem()lorem50  dsgjkldgjsljdf sldjglsjfsldkmf sld jkdfskljfwlk gfishfio sofdj osifj eoijfso ocsjdfosdjfosd o fiodsuefjoii vs jvjoidfvjoiv "
   }

]

export default function getBlogPostBySlug(slug){
   const post = BlogPosts.find(post=>post.slug==slug)
   return post
}

export function getBlogPosts(){
    return BlogPosts
}