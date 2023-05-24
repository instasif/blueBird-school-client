

const Stats = () => {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Our School <span className="text-blue-500">Statistics</span>
            </h2>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Since
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  2001
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Attendance
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  97%
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  A+
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  86%
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    );
};

export default Stats;