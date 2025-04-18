'use client'

import Header from '@/components/common/Header'
import Footer from '@/components/common/footer';
import BlogPostList from '@/components/features/BlogPostList';
import { getBlogPosts } from '@/data/BlogPost';

export default function Home() {
 

  const posts = getBlogPosts()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <Header/>

       <BlogPostList posts={posts}/>
       

      <Footer/>
    </div>
  );
}
