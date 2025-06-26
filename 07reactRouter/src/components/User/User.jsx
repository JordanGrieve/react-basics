import React, { use } from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="py-5 bg-orange-500 text-black text-3xl text-center">
      {"user " ? userid : "not found"}
    </div>
  );
}

export default User;
