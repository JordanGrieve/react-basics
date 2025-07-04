import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = React.useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/JordanGrieve").then((response) =>
  //       response.json().then((data) => {
  //         setData(data);
  //         console.log(data);
  //       })
  //     );
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers} <br />
      <img
        src={data.avatar_url}
        alt="Avatar"
        className="w-24 h-24 rounded-full mx-auto mt-4"
      />
      <br />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/JordanGrieve");
  return response.json();
};
