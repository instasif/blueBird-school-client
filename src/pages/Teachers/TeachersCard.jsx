const TeachersCard = ( {teacher} ) => {
  // const { name, possion, img } = teacher;
  return (
    <div className="w-full max-w-xs text-center">
      <img
        className="object-cover object-center w-full h-[60%] mx-auto rounded-lg"
        src={teacher.img}
        alt="avatar"
      />

      <div className="mt-2">
        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
          {teacher.name}
        </h3>
        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
          {teacher.possion}
        </span> <br />
        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
          Phone: {teacher.phone}
        </span>
      </div>
    </div>
  );
};

export default TeachersCard;
