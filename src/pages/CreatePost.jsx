import { useState } from "react";
import "./css/CreatePost.css";
import { useAxios } from "../contexts/axiosContext";
import { useNavigate } from "react-router";
export default function CreatePost() {
  const axios = useAxios();
  const navigate = useNavigate();
  const [tags, setTags] = useState([
    "Dolci",
    "Dessert",
    "Ricette vegetariane",
    "Senza cottura",
  ]);
  const [formData, setFormData] = useState({
    title: "Tiramisù Classico",
    content:
      "Ci sono dolci che non hanno bisogno di presentazioni, e il tiramisù è sicuramente uno di questi. Un dessert intramontabile che profuma di casa, di pranzi in famiglia e di cucchiai rubati dal frigorifero prima ancora che sia il momento di servirlo. Savoiardi inzuppati nel caffè, una crema vellutata al mascarpone e una generosa spolverata di cacao amaro: pochi ingredienti che, uniti con cura, danno vita a una delle ricette più amate della tradizione italiana. La nostra versione del tiramisù classico è semplice e fedele alla ricetta di sempre, perfetta da preparare per una cena speciale o per concedersi una coccola a fine giornata. E vedrete che, al primo assaggio, conquisterà tutti con la sua morbidezza e il suo gusto irresistibile.",
    image: "tiramisu-classico.avif",
    tag: "",
  });

  const HandleTags = (e) => {
    if (formData.tag) {
      setTags((c) => [...c, formData.tag]);
      setFormData((c) => {
        return {
          ...c,
          tag: "",
        };
      });
    }
  };

  const HandleFormData = (e) => {
    setFormData((c) => {
      return {
        ...c,
        [e.target.name]: e.target.value,
      };
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(tags);

    setFormData((c) => {
      return {
        ...c,
        tag: tags,
      };
    });

    axios
      .post("/posts", {
        ...formData,
        tags: tags,
      })
      .then((data) => {
        console.log(data);
        navigate("/");
      });
  };

  return (
    <div className="container">
      <h2 className="text-center my-3">Crea un nuovo Post</h2>
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "20rem" }}>
          <form
            action=""
            className="p-3 d-flex flex-column gap-3"
            onSubmit={HandleSubmit}
          >
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="name@example.com"
                value={formData.title}
                onChange={HandleFormData}
                required
              />
              <label htmlFor="title">Titolo</label>
            </div>

            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="content"
                name="content"
                placeholder="name@example.com"
                value={formData.content}
                onChange={HandleFormData}
                required
              />
              <label htmlFor="content">Descrizione</label>
            </div>

            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="image"
                name="image"
                placeholder="name@example.com"
                value={formData.image}
                onChange={HandleFormData}
                required
              />
              <label htmlFor="image">Immagine (URL)</label>
            </div>

            <div className="row g-0">
              <div className="form-floating col-10">
                <input
                  type="text"
                  className="form-control"
                  id="tags"
                  name="tag"
                  placeholder="name@example.com"
                  value={formData.tag}
                  onChange={HandleFormData}
                />
                <label htmlFor="tag">Tag</label>
              </div>

              <div className="col-2 d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-square add-button"
                  viewBox="0 0 16 16"
                  style={{
                    color: "green",
                  }}
                  onClick={HandleTags}
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
              </div>
            </div>
            {tags.length > 0 && (
              <div>
                <ul className="m-0">
                  {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="">
              <button type="submit" className="btn btn-success w-100">
                Success
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
