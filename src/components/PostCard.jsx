import "./css/PostCard.css";
import { useNavigate } from "react-router";
export default function PostCard({ post }) {
  const navigate = useNavigate();

  const HandleClick = (e) => {
    console.log("Card cliccata");
    navigate("/postDetails/" + post.id);
  };

  return (
    <div className="card custom-card" onClick={HandleClick}>
      <img src={`/${post.image}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text text-truncate">{post.content}</p>
        <p className="card-text fw-bold">
          {post.tags
            ? post.tags.map((tag) => "#" + tag.replaceAll(" ", "_")).join(" | ")
            : ""}
        </p>
      </div>
    </div>
  );
}
