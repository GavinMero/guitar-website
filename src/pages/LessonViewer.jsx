import { useParams } from "react-router-dom";
import VideoPlayer from "../components/video/VideoPlayer";
import LessonSidebar from "../components/lessons/LessonSidebar";
import LessonHeader from "../components/lessons/LessonHeader";
import LessonProgress from "../components/lessons/LessonProgress";

// Fake course data
const fakeCourses = {
  beginner: {
    title: "Beginner Guitar",
    lessons: [
      { id: 1, title: "G Major Chord", completed: true },
      { id: 2, title: "C Major Chord", completed: false },
      { id: 3, title: "D Major Chord", completed: false },
    ],
  },
  intermediate: {
    title: "Intermediate Guitar",
    lessons: [
      { id: 1, title: "Barre Chords", completed: false },
      { id: 2, title: "Power Chords", completed: false },
    ],
  },
  advanced: {
    title: "Advanced Guitar",
    lessons: [
      { id: 1, title: "CAGED System", completed: false },
      { id: 2, title: "Legato Techniques", completed: false },
    ],
  },
  jazz: {
    title: "Jazz Guitar",
    lessons: [
      { id: 1, title: "Major 7th Chords", completed: false },
      { id: 2, title: "Minor 7th Chords", completed: false },
    ],
  },
  blues: {
    title: "Blues Guitar",
    lessons: [
      { id: 1, title: "12-Bar Blues Progression", completed: false },
      { id: 2, title: "Blues Licks", completed: false },
    ],
  },
  solo: {
    title: "Solo Guitar",
    lessons: [
      { id: 1, title: "Pentanonic Scale (First Shape)", completed: false },
      { id: 2, title: "Pentanonic Scale (Second Shape)", completed: false },
    ],
  }
};

export default function LessonViewer() {
  const { courseId } = useParams();
  const course = fakeCourses[courseId] || { title: "Unknown Course", lessons: [] };
  const currentLesson = course.lessons[0] || { title: "No Lesson" };

  return (
    <div className="lesson-viewer" style={{ display: "flex", gap: "2rem" }}>
      {/* Main content */}
      <main style={{ flex: 3 }}>
        <VideoPlayer lessonTitle={currentLesson.title} />
        <LessonHeader courseTitle={course.title} lessonTitle={currentLesson.title} />
        <LessonProgress lessons={course.lessons} />
      </main>

      {/* Sidebar */}
      <aside style={{ flex: 1 }}>
        <LessonSidebar lessons={course.lessons} currentLessonId={currentLesson.id} />
      </aside>
    </div>
  );
}
