import React from "react";
import { Link } from "react-router-dom";

function Courses() {
  const courses = [
    {
      title: "Beginner Guitar",
      path: "/courses/beginner",
      image: "https://picsum.photos/600/400?random=1"
    },
    {
      title: "Intermediate Guitar",
      path: "/courses/intermediate",
      image: "https://picsum.photos/600/400?random=2"
    },
    {
      title: "Fingerstyle",
      path: "/courses/fingerstyle",
      image: "https://picsum.photos/600/400?random=3"
    },
    {
      title: "Music Theory",
      path: "/courses/theory",
      image: "https://picsum.photos/600/400?random=4"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Courses</h1>
        <p className="text-gray-700">Here is where we'll list our lessons.</p>
      </div>

      {/* GRID STARTS HERE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link
            key={course.path}
            to={course.path}
            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-semibold">
                {course.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
      {/* GRID ENDS HERE */}
    </div>
  );
}

export default Courses;
