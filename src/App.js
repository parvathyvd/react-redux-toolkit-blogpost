import Posts from "./features/posts/Posts";
import AddPost from "./features/posts/AddPost";

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Post Creation using Redux Tool Kit</h1>
      <AddPost />
      <Posts />
    </div>
  );
}

export default App;
