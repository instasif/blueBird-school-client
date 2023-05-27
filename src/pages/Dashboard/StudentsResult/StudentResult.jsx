import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const StudentResult = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const term = form.term.value;
    const stClass = form.stClass.value;
    const roll = form.roll.value;
    const section = form.section.value;
    const marks = form.marks.value;
    const results = { name, term, class: stClass, roll, section, marks };
    console.log(results);

    fetch(`http://localhost:5000/results?email=${user?.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(results),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          toast.success(`Successfullt added ${name}'s result!`);
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
          <p className="text-center text-lg font-medium">
            Add Students Results
          </p>

          <div>
            <label htmlFor="term" className="sr-only">
              Term
            </label>

            <div className="relative">
              <input
                type="text"
                name="term"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Exam Term"
              />
            </div>
          </div>

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
            <label htmlFor="roll" className="sr-only">
              Roll
            </label>

            <div className="relative">
              <input
                type="text"
                name="roll"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter roll"
              />
            </div>
          </div>

          <div>
            <label htmlFor="stClass" className="sr-only">
              class
            </label>

            <div className="relative">
              <input
                type="tel"
                name="stClass"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter class"
              />
            </div>
          </div>

          <div>
            <label htmlFor="section" className="sr-only">
              Section
            </label>

            <div className="relative">
              <input
                type="text"
                name="section"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter section"
              />
            </div>
          </div>

          <div>
            <label htmlFor="marks" className="sr-only">
              Marks
            </label>

            <div className="relative">
              <input
                type="text"
                name="marks"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter marks"
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

export default StudentResult;
