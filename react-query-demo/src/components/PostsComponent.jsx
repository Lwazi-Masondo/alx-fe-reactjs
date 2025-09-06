import { useQuery } from "react-query";

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const PostsComponent = () => {
  //Use the useQuery hook to handle data fetching and caching
  const { data, isError, isLoading } = useQuery("posts", fetchData);

  //Handle loading state
  if (isLoading) return <div className="text-green-500 ">Loading...</div>;

  //Handle error state
  if (isError) return <div>Error loading data</div>;

  //Render the fetched data
  return (
    <div>
      {data.map((post) => (
        <div key={post.id} className="my-10 border-2 border-gray-600">
          {post.title}
          <p key={post.id}>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
