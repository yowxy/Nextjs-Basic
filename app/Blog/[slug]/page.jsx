import Heading from "@/compone7nts/Heading";
import { getPost, getSlugs } from "@/lib/post";
import Sharelinkbutton from "@/components/ShareLinkbtn";


export async function generateMetadata({params: {slug}}){
  
  const post = await getPost(slug)
  return{
    title: post.title,
    description: post.deskripsi,
  }
}

export async function generateStaticParams(){
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}




export default async function belajar({ params: {slug} }) {
    const post = await getPost(slug);
  return (
    <>
      <Heading>{post.title}</Heading>
      <div  className="flex gap-3 pb-2 items-baseline "  >
        <h1 className="font-bold">{post.author}</h1>
        <p className="italic text-sm">{post.date}</p>
        <Sharelinkbutton/>
      </div>
        
      <h2>halo</h2>
      <img
        src={post.image}
        alt=""
        width={640}
        height={360}
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: post.body }}
        className="max-w-screen-sm    prose"
      />
    </>
  );
}
