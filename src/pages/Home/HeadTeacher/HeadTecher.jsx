import { Link } from "react-router-dom";
import headTeacher from "../../../assets/photos/headteacher.png"
const HeadTecher = () => {
    return (
      <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Our School <span className="text-blue-500">Head Teacher</span>
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Mr. Kabir Hossain, the esteemed headteacher of our school, is a
              visionary leader dedicated to fostering a culture of academic
              excellence and personal growth. With his exceptional leadership
              skills and passion for education, he inspires both students and
              faculty members alike. He unwavering commitment to creating a
              supportive and stimulating learning environment has played a
              significant role in shaping the success and reputation of our
              school.
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                to={"/teachers"}
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Checkout Our All Teachers
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="Violin"
          src={headTeacher}
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    );
};

export default HeadTecher;