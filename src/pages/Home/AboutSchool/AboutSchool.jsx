import { Link } from "react-router-dom";
import aboutSchool from "../../../assets/photos/aboutSchool.jpg"

const AboutSchool = () => {
    return (
      <section className=" dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
        <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
          <div className="lg:w-1/2">
            <div
              className="h-64 bg-cover lg:h-full"
              style={{ backgroundImage: `url(${aboutSchool})` }}
            ></div>
          </div>

          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Our <span className="text-blue-500">School</span>
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-300">
              Blue Bird School and College is a renowned educational institution
              known for its commitment to academic excellence and holistic
              development. With a rich history spanning several decades, our
              school prides itself on providing a nurturing and inclusive
              learning environment for students from diverse backgrounds. Our
              dedicated faculty members ensure personalized attention and foster
              a love for learning among students.
            </p>

            <div className="inline-flex w-full mt-6 sm:w-auto">
              <Link
                to={'/about'}
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Admission
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AboutSchool;