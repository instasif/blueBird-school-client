import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const StudentsNotice = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const day = form.day.value;
    const stNotice = form.notice.value;

    const notice = { date, day, notice: stNotice };

    fetch(`http://localhost:5000/notice?email=${user?.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(notice),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          navigate("/notice");
        }
      });
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <form
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={handleSubmit}
        >
          <p className="text-center text-lg font-medium">Add a Notice</p>

          <div>
            <label htmlFor="date" className="sr-only">
              Date
            </label>

            <div className="relative">
              <input
                type="text"
                name="date"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter date"
              />
            </div>
          </div>

          <div>
            <label htmlFor="day" className="sr-only">
              Day
            </label>

            <div className="relative">
              <input
                type="text"
                name="day"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter day"
              />
            </div>
          </div>

          <div>
            <label htmlFor="notice" className="sr-only">
              Notice
            </label>

            <div className="relative">
              <textarea
                placeholder="Enter Notice"
                name="notice"
                className="textarea textarea-bordered textarea-md w-full max-w-xs"
              ></textarea>
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

export default StudentsNotice;
