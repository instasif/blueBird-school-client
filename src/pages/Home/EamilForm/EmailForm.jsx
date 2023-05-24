const EmailForm = () => {
  return (
    <section className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-blue-800 md:flex-row md:h-48">
      <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-blue-700 md:dark:bg-blue-800">
        <div className="px-6 py-6 md:px-8 md:py-0">
          <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
            Sign Up For{" "}
            <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">
              School
            </span>{" "}
            Updates
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
            Stay Update with us!
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
        <form>
          <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              aria-label="Enter your email"
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
            />

            <button
              className="px-4 py-3 inline-block rounded bg-emerald-600 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailForm;
