import React from "react";
import { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/ShuvamAdhikaridev`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 tet-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img
        className="text-center"
        src={data.avatar_url}
        alt="git-pic"
        width={300}
      />
    </div>
  );
}

export default Github;
