import NotFound from "@/app/not-found";

const getPost = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
    cache: "no-store", //SSR
    //next: { revalidate: 60 }, //ISR
  });

  const Post = await res.json();

  if (res.status === 404) {
    return "NotFound";
  }

  return Post;
};

const BlogArticlePage = async ({ params }: { params: { id: string } }) => {
  // console.log(params);
  const Post = await getPost(params.id);

  if (Post === "NotFound") {
    return <NotFound />;
  }

  // console.log(Post)

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-[50px]">{Post.title}</h2>
      <p>{Post.content}</p>
    </div>
  );
};

export default BlogArticlePage;
