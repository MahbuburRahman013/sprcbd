

 async function useGetAllBlogs(limit) {
    const result = await fetch(`http://localhost:5000/all-blogs?limit=${limit}`, {
         next:{
          revalidate: 10 ,
         }
    });
    return result.json()

}

export default useGetAllBlogs