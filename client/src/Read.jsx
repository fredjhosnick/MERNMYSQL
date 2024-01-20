import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/read/" + id)
      .then((res) => {
        console.log(res);
        setStudent(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Student Details:</h2>
        <h2>{student.ID}</h2>
        <h2>{student.NAME}</h2>
        <h2>{student.EMAIL}</h2>
        <Link to={"/"} className="btn btn-primary">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Read;
