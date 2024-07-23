import Heading from "@/components/Heading"
import Postcard from "@/components/Postcard"
import { getAllPosts } from "@/lib/post"

export const metadata = {
    title: "Blog",
    description: "ini adalah laman about",
  };

export default async function blog(){
        const posts = await getAllPosts();
        // console.log(posts)
    return(
        <>
            <Heading>Halo ini laman Blog</Heading>
            <h2 className="mb-3 text-2xl">Halo ini laman Blog</h2>


            {posts.map((post) =>(
            <Postcard  
                title={post.title}
                hreff= {`/Blog/${post.slug}`}       
                description={post.deskripsi}
                date={post.date}
                Author={post.author}
                image={post.image}
        
            />
            ))}


        </>
    )
}