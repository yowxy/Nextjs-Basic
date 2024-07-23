import matter from "gray-matter";
import { marked } from "marked";
import { link } from "node:fs";
import { readdir,readFile } from "node:fs/promises";

export async function getPost(slug){
    const text = await readFile(`./content/blog/${slug}.md`, "utf-8");
    
      const {
        content,
        data: { title, author, image, date,deskripsi},
      } = matter(text);
      const body = marked(content);

      return {slug,title,author,date,image,body,deskripsi}

}

export async function getAllPosts(){
  const slugs = await  getSlugs();
  const posts= [];
  
    for (const slug of slugs){
        const post = await getPost(slug);
        posts.push(post)
    }

    return posts;

  }
  
  export async function getSlugs(){
    const files = await readdir("./content/Blog");
    
    return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length))
}


