import useGetSingleBlog from "../../../hooks/useGetSingleBlog";
import dynamic from 'next/dynamic'
const SingleBlog = dynamic(() => import('../../../components/SingleBlog'), {
  ssr: false,
})

async function BlogDetails({params}) {

  const queryTitle = params.queryTitle;
  const { data: blog } = await useGetSingleBlog(queryTitle);

  return <div>
    <SingleBlog blog={blog} />
  </div>;
}

export default BlogDetails;
