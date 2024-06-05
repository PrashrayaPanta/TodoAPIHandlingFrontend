import { useQuery } from "@tanstack/react-query";

import React from "react";
import { getAllTodos } from "../api";
import Card from "./Card";

const TodoList = () => {
  const query = useQuery({
    queryKey: ["TodoQuery"],
    queryFn: getAllTodos,
  });

  if (query.isLoading) return <h1>Loading...</h1>;

  if (query.isError) return <h1>Error..</h1>;

  const array = query?.data?.data?.data;

  return (
    <div className="flex flex-wrap justify-center gap-20">
      {array.map((object) => (
        <div key={object._id}>
          <Card
            title={object.title}
            description={object.description}
            id={object._id}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
