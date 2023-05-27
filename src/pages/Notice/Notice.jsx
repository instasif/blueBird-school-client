import { useQuery } from "@tanstack/react-query";
import NoticeCard from "./NoticeCard";
import { useAdmin } from "../../Hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Notice = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const { data: notices = [], refetch } = useQuery({
    queryKey: ["notice"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/notice");
      const data = await res.json();
      return data;
    },
  });

  // 646fbdfd03465214d942c719

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/notice/${id}?email=${user?.email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
        }
      });
  };
  return (
    <section>
      <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
        School <span className="text-blue-500">Notice</span>
      </h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 md-grid-cols-2 gap-5 mx-5 mt-8">
        {notices.map((notice, i) => (
          <NoticeCard
            key={i}
            notice={notice}
            isAdmin={isAdmin}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
};

export default Notice;
