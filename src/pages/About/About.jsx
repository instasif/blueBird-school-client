import about from "../../assets/photos/about.jpg"

const About = () => {
    return (
      <section className="mx-5">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Empowering Minds, Nurturing Futures: <br />
              <span className="text-blue-600">Blue Bird School and College</span>, <br /> where learning
              soars!
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Party"
                src={about}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <p>
                  Welcome to Blue Bird School and College, a beacon of
                  educational excellence and holistic development. At Blue Bird,
                  we strive to create a nurturing environment that inspires and
                  empowers young minds to reach their full potential. Our
                  dedicated team of passionate educators is committed to
                  providing a well-rounded education that fosters academic
                  achievement, critical thinking, creativity, and character
                  building. With state-of-the-art facilities and innovative
                  teaching methods, <br />
                  we ensure that our students receive a transformative learning
                  experience. Join us at Blue Bird School and College, where
                  every students journey is guided with care, and where they
                  spread their wings to soar towards a bright and successful
                  future.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;