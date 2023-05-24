import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import admission from "../../assets/photos/admission.jpeg";
import logo from "../../assets/photos/slogo.jpeg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Admission = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAdmission = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const admissionClass = form.admissionClass.value;
    const email = form.email.value;
    const number = form.number.value;
    const section = form.section.value;
    const admission = {
      name: name,
      class: admissionClass,
      email,
      number,
      section,
    };

    fetch("http://localhost:5000/admission", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(admission),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("We will confirm you by email, Thank You!");
          form.reset();
          navigate("/");
        }
      });
  };
  return (
    <section className="bg-white mx-5">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="admission"
            src={admission}
            className="absolute inset-0 h-full w-full object-cover opacity-100"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <img src={logo} alt="logo" className="w-20 rounded-full" />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-gray-50 sm:text-3xl md:text-4xl">
              Welcome to Blue Birds admission form 🦑
            </h2>
          </div>
        </section>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/"
              >
                <span className="sr-only">Home</span>
                <img src={logo} alt="logo" className="w-20 rounded-full" />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Blue Birds admission form 🦑
              </h1>
            </div>

            <form
              onSubmit={handleAdmission}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  defaultValue={user?.displayName}
                  className="mt-1 w-full input-bordered rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="class"
                  className="block text-sm font-medium text-gray-700"
                >
                  Class
                </label>

                <input
                  type="number"
                  id="class"
                  required
                  name="admissionClass"
                  className="mt-1 w-full input-bordered rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  required
                  defaultValue={user?.email}
                  className="mt-1 w-full input-bordered rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="phone"
                  required
                  name="number"
                  className="mt-1 w-full input-bordered rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="section"
                  className="block text-sm font-medium text-gray-700"
                >
                  Class Section (For class 9-12 students only)
                </label>

                <input
                  type="text"
                  id="section"
                  placeholder="Optional"
                  name="section"
                  className="mt-1 w-full input-bordered rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label className="flex gap-4">
                  <span className="text-sm text-red-600 font-bold">
                    Submit all your information very carefully!
                  </span>
                </label>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-emerald-600 bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-emerald-500">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Admission;
