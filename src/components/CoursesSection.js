import React, { useState } from 'react';
import './CoursesSection.css';

// You can replace these URLs with your local images if needed
const logos = {
  html: "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256",
  css: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/180px-CSS3_logo.svg.png",
  javascript: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
};

const courses = [
  {
    title: "HTML",
    description: "Learn the building blocks of web development by mastering HTML.",
    logo: logos.html,
    learningPath: [
      "Introduction to HTML Elements",
      "Working with Forms and Input",
      "HTML5 Semantic Elements",
      "Multimedia in HTML (Audio/Video)",
      "Best Practices and Accessibility",
      "Hands on exercises and projects"
    ],
  },
  {
    title: "CSS",
    description: "Style your websites beautifully using modern CSS techniques.",
    logo: logos.css,
    learningPath: [
      "CSS Basics and the Box Model",
      "Styling with Flexbox",
      "Grid Layout for Responsive Design",
      "Advanced Selectors and Pseudo-Classes",
      "CSS Animations and Transitions",
      "Hands on exercises and projects"

    ],
  },
  {
    title: "JavaScript",
    description: "Bring interactivity and dynamic behavior to your websites with JavaScript.",
    logo: logos.javascript,
    learningPath: [
      "JavaScript Basics and Variables",
      "Functions and Events in JavaScript",
      "DOM Manipulation",
      "ES6+ Features (Arrow Functions, Promises)",
      "Asynchronous JavaScript (Async/Await)",
      "Hands on exercises and projects"

    ],
  },
];

const CoursesSection = () => {
  const [activeCourse, setActiveCourse] = useState(null);

  const toggleLearningPath = (index) => {
    if (activeCourse === index) {
      setActiveCourse(null); // Hide the learning path if clicked again
    } else {
      setActiveCourse(index); // Show the learning path of clicked course
    }
  };

  return (
    <section className="courses-section">
      <h2>Frontend Developer Internship</h2>
      <div className="courses">
        {courses.map((course, index) => (
          <div className="course" key={index}>
            <img src={course.logo} alt={`${course.title} logo`} className="course-logo" />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button className="register-btn" onClick={() => toggleLearningPath(index)}>
              {activeCourse === index ? 'Hide Learning Path' : `See ${course.title} Learning Path`}
            </button>

            {/* Learning Path - Show/Hide */}
            {activeCourse === index && (
              <div className="learning-path">
                <h4>Learning Path for {course.title}:</h4>
                <ul>
                  {course.learningPath.map((step, stepIndex) => (
                    <li key={stepIndex}>{step}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
