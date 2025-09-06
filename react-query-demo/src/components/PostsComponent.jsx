import { useQuery, useQueryClient } from "react-query";
import { useState, useEffect } from "react";

const fetchPosts = async (page) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
  );
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const PostsComponent = () => {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient(); // 👈 needed for prefetching

  //Use the useQuery hook to handle data fetching and caching
  const { data, error, isError, isLoading, isFetching } = useQuery(
    ["posts", page],
    () => fetchPosts(page),
    {
      staleTime: 1000 * 60, // 1 minute: data is "fresh" and won't refetch
      cacheTime: 1000 * 300, // 5 minutes: unused data stays in cache
      refetchOnWindowFocus: false, // don’t auto-refetch when switching tabs
      keepPreviousData: true, // 👈 keep old data while fetching new
    }
  );
  //  Prefetch the next page whenever `page` changes
  useEffect(() => {
    if (page < 20) {
      queryClient.prefetchQuery(["posts", page + 1], () =>
        fetchPosts(page + 1)
      );
    }
  }, [page, queryClient]);

  //Handle loading state
  if (isLoading) return <div className="text-green-500 ">Loading...</div>;

  //Handle error state
  if (error) return <div>Error loading data</div>;

  if (isError) return <div>Error: {error.message}</div>;

  //Render the fetched data
  return (
    <div>
      {data.map((post) => (
        <div key={post.id} className="my-10 border-2 border-gray-600">
          <h2 className="text-center">{post.title}</h2>
          <p className="text-center">{post.body}</p>
        </div>
      ))}
      <div>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={page === 20}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      {isFetching && <p className="text-gray-500 mt-2">Fetching new page...</p>}
    </div>
  );
};
export default PostsComponent;
