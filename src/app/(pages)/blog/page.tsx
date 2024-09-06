import Link from "next/link";

type TBlog = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

const getAllPosts = async () => {
  const res = await fetch(`http://localhost:3000/api/blog`, {
    cache: "no-store", //SSR
    //next: { revalidate: 60 }, //ISR
  });
  const allPosts = await res.json();
  return allPosts;
};

const BlogPage = async () => {
  const allPosts = await getAllPosts();
  console.log(allPosts);
  return (
    <div className="container mx-auto py-[50px]">
      <div className="grid grid-cols-12 gap-3">
        {allPosts.map((blog: TBlog) => (
          <div
            className="col-span-4 border border-black rounded p-5"
            key={blog.id}
          >
            <Link href={`/blog/${blog.id}`} className="w-full">
              <h2>{blog.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
