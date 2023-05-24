import { useQuery } from "@tanstack/react-query";
import TeachersCard from "./TeachersCard";

const Teachers = () => {
  const { data: teachers = [] } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/teachers");
      const data = await res.json();
      return data;
    },
  });
  return (
    <section className="bg-white dark:bg-gray-900 mx-5">
      <div className="container px-6 py-8 mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Our <span className="text-blue-500">Teachers & Stuffs</span>
        </h2>

        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teachers.map((teacher, index) => (
            <TeachersCard key={index} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
