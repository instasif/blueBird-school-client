import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useAdmin } from "../../Hooks/useAdmin";

const RoutineImg = () => {
  const { user } = useContext(AuthContext);
    const navigate = useNavigate();
  const [isAdmin] = useAdmin(user?.email);
  const r = useLoaderData();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const routine = form.photo.files[0];
    const formData = new FormData();
    formData.append("image", routine);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_API_KEY_IMGBB
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const url = imgData.data.display_url;
        const data = {
          routine: url,
        };

        fetch(`http://localhost:5000/routine/${r._id}?email=${user?.email}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.acknowledged) {
                navigate("/");
            }
        })
      });
  };

  return (
    <section className="mx-5">
      <div className="flex justify-end">
        {isAdmin && (
          <label
            className="btn bg-red-600 text-white rounded-full border-none"
            htmlFor="my-modal"
          >
            Update
          </label>
        )}
      </div>
      <h1 className="text-center text-5xl underline">{r.class}</h1>

      <img src={r.routine} className="w-[60%] relative left-72 mt-4" alt="" />

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn btn-xs rounded-full bg-red-600 border-none"
            >
              X
            </label>
          </div>
          <h3 className="font-bold text-lg">Update Routine Image:</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              name="photo"
              placeholder="Type here"
              className="input w-full max-w-xs"
            />

            <button type="submit">
              <label htmlFor="my-modal" className="btn">
                Update
              </label>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RoutineImg;
