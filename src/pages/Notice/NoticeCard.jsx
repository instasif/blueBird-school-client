

const NoticeCard = ({ notice, isAdmin, handleDelete }) => {
  const { date, day, notice: text, _id } = notice;
  return (
    <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6 mb-[100%]">
      <div className="flex justify-between">
        <span className="inline-block rounded bg-blue-600 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </span>

        {isAdmin && (
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm bg-red-600 border-none text-white rounded-full relative bottom-7 left-8"
          >
            X
          </button>
        )}
      </div>

      <div>
        <h3 className="mt-0.5 text-lg font-medium text-gray-900">{date}, </h3>
        <h3 className="mt-0.5 text-lg font-medium text-gray-900">{day}</h3>
      </div>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">{text}</p>
    </article>
  );
};

export default NoticeCard;
