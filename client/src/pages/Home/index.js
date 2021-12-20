import "./styles.css";
import { CourseCard } from "components";
import { Typography } from "@mui/material";
export default function Home() {
  return (
    <div className="logged-container">
      <Typography variant="h4" sx={{ m: 6 }}>
        Courses
      </Typography>
      <div className="course-container">
        <CourseCard
          title="Course 1"
          desc="Course 1 on Personal Finance"
          id={1}
          image="https://picsum.photos/250/150"
        />
        <CourseCard
          title="Course 2"
          desc="Course 2 on Computer Science Fundamentals"
          id={2}
          image="https://picsum.photos/250/150"
        />
        <CourseCard
          title="Course 3"
          desc="Course 3 on Micros Architecture"
          id={3}
          image="https://picsum.photos/250/150"
        />
        <CourseCard
          title="Course 4"
          desc="Course 4 on System Design"
          id={4}
          image="https://picsum.photos/250/150"
        />
      </div>
    </div>
  );
}
