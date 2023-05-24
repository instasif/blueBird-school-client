

const SuccessCard = ({data}) => {
    return (
      <div
        className={`${data.bg} p-8 border rounded-lg dark:border-gray-700`}
      >
        <p className="leading-loose text-gray-500 dark:text-gray-400">
          {data.story}
        </p>

        <div className="flex items-center mt-8 -mx-2">
          <img
            className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
            src={data.img}
            alt=""
          />

          <div className="mx-2">
            <h1 className="font-semibold text-gray-800 dark:text-white">
              {data.name}
            </h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Class: <span className="">{data.class}</span>
            </span>
          </div>
        </div>
      </div>
    );
};

export default SuccessCard;