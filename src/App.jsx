import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./layouts/Base";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import { AxiosProvider } from "./contexts/axiosContext";
function App() {
  return (
    <>
      <AxiosProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Base />}>
              <Route index element={<Home />}></Route>
              <Route path="/postDetails/:id" element={<PostDetails />}></Route>
              <Route path="/createPost" element={<CreatePost />}></Route>
              <Route path="/updatePost/:id" element={<UpdatePost />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AxiosProvider>
    </>
  );
}

export default App;
