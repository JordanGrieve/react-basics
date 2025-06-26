import React, { use } from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="py-5 bg-orange-500 text-black text-3xl text-center">
      User: {userid}
    </div>
  );
}

export default User;
