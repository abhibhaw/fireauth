import "./styles.css";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import { CourseCard } from "components";
import { api } from "env";
export default function Home({ uid, dbUser }) {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get(api.courses)
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [courses]);

  return (
    <div className="logged-container">
      <Typography variant="h4" sx={{ m: 6 }}>
        Courses
      </Typography>
      <div className="course-container">
        {courses.length > 0
          ? courses.map((course) => (
              <CourseCard
                key={course._id}
                id={course._id}
                desc={course.desc}
                title={course.title}
                image={course.imageUrl}
                uid={uid.uid}
                dbUser={dbUser}
              />
            ))
          : "No courses found"}
      </div>
    </div>
  );
}
