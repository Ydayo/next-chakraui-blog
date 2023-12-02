import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "@/libs/microcms";
import Header from "@/components/ui/Header/Header";
import Footer from "@/components/ui/Footer/Footer";
import clsx from "clsx";

// キャッシュを利用しない場合 0 を設定
// キャッシュを利用しない場合、常にレンダリングを行うSSRになる
// キャッシュを利用する場合、ISRになる
export const revalidate = 10;

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

const BlogPost = async ({
  params: { postId },
}: {
  params: { postId: string };
}) => {
  const post = await getDetail(postId);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className=" px-3 max-w-[1000px] mx-auto h-[100vh]">
        <h1>{post.title}</h1>
        <div className="">{parse(post.content)}</div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
