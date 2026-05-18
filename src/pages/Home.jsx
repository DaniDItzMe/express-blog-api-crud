import axios from "axios";
import { useEffect, useState } from "react";
import { useAxios } from "../contexts/axiosContext";
import { data } from "react-router";
import PostCard from "../components/PostCard";
export default function Home() {
  const axios = useAxios();

  const [posts, setPosts] = useState();

  useEffect(() => {
    axios.get("/posts").then(({ data }) => {
      console.log(data);
      setPosts(data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <h1 className="text-center">Tutti i posts</h1>
        </div>
      </div>
      <div className="row g-3">
        {posts
          ? posts?.map((post) => (
              <div key={post.id} className="col-4 d-flex">
                <PostCard post={post} />
              </div>
            ))
          : Array.from({
              length: 15,
            }).map((elem, index) => (
              <div key={index} className="col-4">
                <div className="card" aria-hidden="true">
                  {/* <img src={null  } className="card-img-top" alt="..." /> */}
                  <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                      <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                      <span className="placeholder col-7"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-4"></span>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder col-8"></span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
