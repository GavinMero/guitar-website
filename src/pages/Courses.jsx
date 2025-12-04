import React from "react";
import { Link } from "react-router-dom";
import "../Courses.css";

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
      title: "Advanced Guitar",
      path: "/courses/advanced",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      title: "Jazz Guitar",
      path: "/courses/jazz",
      image: "https://picsum.photos/600/400?random=4",
    },
    {
      title: "Blues Guitar",
      path: "/courses/blues",
      image: "https://picsum.photos/600/400?random=5",
    },
    {
      title: "Solo Techniques",
      path: "/courses/solo",
      image: "https://picsum.photos/600/400?random=6",
    }
  ];

  return (
    <div className="courses-grid">
      {courses.map((course, index) => (
        <Link key={index} to={course.path} className="course-card">
          <img src={course.image} alt={course.title} />
          <div className="course-label">{course.title}</div>
        </Link>
      ))}
    </div>
  );
}

export default Courses;
