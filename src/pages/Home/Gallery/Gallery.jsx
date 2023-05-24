import img1 from "../../../assets/photos/gallery1.jpg"
import img2 from "../../../assets/photos/gallery2.jpg"
import img3 from "../../../assets/photos/gallery3.jpg";
const Gallery = () => {
    return (
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Our School <span className="text-blue-500">Gallery</span>
            </h2>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <a href="#" className="relative block group">
                <img
                  src={img2}
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Cultural Activities
                  </h3>
                  <br />
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="relative block group">
                <img
                  src={img3}
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Students Playing Music
                  </h3>
                  <br />
                </div>
              </a>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="#" className="relative block group">
                <img
                  src={img1}
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    Research Center
                  </h3>
                  <br />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
};

export default Gallery;