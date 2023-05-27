import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const AddTeacher = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const possion = form.possion.value;
    const number = form.number.value;
    const photo = form.photo.files[0];

    const formData = new FormData();
    formData.append("image", photo);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_API_KEY_IMGBB
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const teacher = {
          name,
          possion,
          phone: number,
          img: imgData.data.display_url,
        };

        fetch(`http://localhost:5000/teachers?email=${user?.email}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(teacher),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              form.reset();
              navigate("/dashboard/manage-teachers");
            }
          });
      });
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <form
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={handleSubmit}
        >
          <p className="text-center text-lg font-medium">Add a Teacher</p>

          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>

            <div className="relative">
              <input
                type="text"
                name="name"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter full name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="possion" className="sr-only">
              Possion
            </label>

            <div className="relative">
              <input
                type="text"
                name="possion"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter his/her possion & subject"
              />
            </div>
          </div>

          <div>
            <label htmlFor="number" className="sr-only">
              Number
            </label>

            <div className="relative">
              <input
                type="tel"
                name="number"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter number"
              />
            </div>
          </div>

          <div>
            <label htmlFor="photo" className="sr-only">
              Photo
            </label>

            <div className="relative">
              <input
                type="file"
                name="photo"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter photo"
              />
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTeacher;
