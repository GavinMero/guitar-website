import React from "react";
import { Link } from "react-router-dom";
import "../Courses.css"; // <-- import the CSS file

function Courses() {
  const courses = [
    {
      title: "Beginner Guitar",
      path: "/courses/beginner",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      title: "Intermediate Guitar",
      path: "/courses/intermediate",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      title: "Fingerstyle",
      path: "/courses/fingerstyle",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      title: "Music Theory",
      path: "/courses/theory",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1>Courses</h1>
        <p>Here is where we'll list our lessons.</p>
      </div>

      {/* GRID STARTS HERE */}
      <div className="courses-grid">
        {courses.map((course) => (
          <Link key={course.path} to={course.path} className="course-card">
            <img src={course.image} alt={course.title} />

            <div className="course-overlay">
              <span>{course.title}</span>
            </div>
          </Link>
        ))}
      </div>
      {/* GRID ENDS HERE */}
    </div>
  );
}

export default Courses;
