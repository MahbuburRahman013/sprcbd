import useAxiosPublic from "./useAxiosPublic";


async function useGetSingleBlog(queryTitle) {
    const axiosPublic = useAxiosPublic()
    const result = await axiosPublic.get(`/single-blog/${queryTitle}`);
    return result;
}

export default useGetSingleBlog