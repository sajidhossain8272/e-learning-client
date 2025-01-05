import { useState } from "react";
import Navbar from "./Navbar";

const OnlineModules = () => {
  // Quiz data
  const quizzes = [
    {
      id: 1,
      title: "Python Variables Quiz",
      description: "Test your knowledge of Python variables.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/python-variables-quiz/",
    },
    {
      id: 2,
      title: "Data Types Quiz",
      description: "Understand and evaluate your knowledge of Python data types.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/data-type-gq/",
    },
    {
      id: 3,
      title: "Output Quiz",
      description: "Assess your understanding of Python output functions.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/output-type-gq/",
    },
    {
      id: 4,
      title: "Operators Quiz",
      description: "Learn and test yourself on Python operators.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/operators-gq-2/",
    },
    {
      id: 5,
      title: "Control Flow Quiz",
      description: "Check your skills on Python's conditional logic and control flow.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/python-control-flow-conditional-logic-quiz/",
    },
    {
      id: 6,
      title: "For Loop Quiz",
      description: "Evaluate your understanding of Python for loops.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/python-for-loop-quiz/",
    },
    {
      id: 7,
      title: "While Loop Quiz",
      description: "Test your knowledge of Python while loops.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/python-while-loop-quiz/",
    },
    {
      id: 8,
      title: "List Quiz",
      description: "Understand Python lists better by taking this quiz.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/python-list-quiz/",
    },
    {
      id: 9,
      title: "String Quiz",
      description: "Evaluate your skills in Python string operations.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/python-string-quiz/",
    },
    {
      id: 10,
      title: "Tuples Quiz",
      description: "Test your understanding of Python tuples.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/python-tuples-quiz/",
    },
    {
      id: 11,
      title: "Dictionary Quiz",
      description: "Enhance your knowledge of Python dictionaries.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/python-dictionary-quiz/",
    },
    {
      id: 12,
      title: "Sets Quiz",
      description: "Learn and test yourself on Python sets.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/python-sets-quiz/",
    },
    {
      id: 13,
      title: "Functions Quiz",
      description: "Test your skills on Python functions.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/functions-python-gq/",
    },
    {
      id: 14,
      title: "Namespaces and Scope Quiz",
      description: "Understand Python namespaces and scope with this quiz.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/python-namespaces-and-scope-quiz/",
    },
    {
      id: 15,
      title: "OOP Quiz",
      description: "Check your knowledge of Python's Object-Oriented Programming.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/python-oops-quiz/",
    },
    {
      id: 16,
      title: "Classes Quiz",
      description: "Evaluate your skills on Python classes.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/python-classes-quiz/",
    },
    {
      id: 17,
      title: "Exception Handling Quiz",
      description: "Learn and test yourself on Python exception handling.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/python-exception-handling-quiz/",
    },
    {
      id: 18,
      title: "File Handling Quiz",
      description: "Assess your knowledge of Python file handling.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/python-file-handling-quiz/",
    },
    {
      id: 19,
      title: "Miscellaneous Quiz",
      description: "Explore and test yourself with miscellaneous Python topics.",
      language: "Python",
      link: "https://www.geeksforgeeks.org/quizzes/miscellaneous-gq/",
    },
    {
      id: 20,
      title: "JavaScript Course Quiz 1",
      description: "Test your knowledge of JavaScript basics.",
      language: "JavaScript",
      link: "https://www.geeksforgeeks.org/quizzes/javascript-course-quiz-1/?ref=quiz_lbp",
    },
    {
      id: 21,
      title: "JavaScript Course Quiz 3",
      description: "Evaluate your JavaScript advanced skills.",
      language: "JavaScript",
      link: "https://www.geeksforgeeks.org/quizzes/javascript-course-quiz-3/?ref=quiz_lbp",
    },
    {
      id: 22,
      title: "HTML Practice Quiz 1",
      description: "Test your foundational knowledge of HTML.",
      language: "HTML",
      link: "https://www.geeksforgeeks.org/quizzes/html-course-practice-quiz-1/?ref=quiz_lbp",
    },
    {
      id: 23,
      title: "HTML Practice Quiz 2",
      description: "Enhance your understanding of HTML elements.",
      language: "HTML",
      link: "https://www.geeksforgeeks.org/quizzes/html-course-practice-quiz-2/?ref=quiz_lbp",
    },
    {
      id: 24,
      title: "Sudo Placement Quiz",
      description: "Test your overall coding and problem-solving skills.",
      language: "General",
      link: "https://www.geeksforgeeks.org/quizzes/practice-quiz-for-sudo-placement/?ref=quiz_lbp",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const quizzesPerPage = 6;

  // Filtered quizzes based on search and language filter
  const filteredQuizzes = quizzes.filter(
    (quiz) =>
      quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (languageFilter === "" || quiz.language === languageFilter)
  );

  // Pagination logic
  const indexOfLastQuiz = currentPage * quizzesPerPage;
  const indexOfFirstQuiz = indexOfLastQuiz - quizzesPerPage;
  const currentQuizzes = filteredQuizzes.slice(indexOfFirstQuiz, indexOfLastQuiz);
  const totalPages = Math.ceil(filteredQuizzes.length / quizzesPerPage);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Quiz Section</h1>

        {/* Search and Filter Options */}
        <div className="flex flex-wrap gap-4 mb-8">
          <input
            type="text"
            placeholder="Search quizzes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border px-3 py-2 rounded w-full md:w-1/3"
          />
          <select
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
            className="border px-3 py-2 rounded w-full md:w-1/3"
          >
            <option value="">All Languages</option>
            <option value="Python">Python</option>
            <option value="JavaScript">JavaScript</option>
            <option value="HTML">HTML</option>
            <option value="General">General</option>
          </select>
        </div>

        {/* Quiz Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentQuizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white"
            >
              <h2 className="text-xl font-bold mb-2">{quiz.title}</h2>
              <p className="text-gray-600 mb-4">{quiz.description}</p>
              <a
                href={quiz.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded block text-center hover:bg-blue-600 transition-colors"
              >
                Take Quiz
              </a>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page + 1)}
              className={`mx-2 px-4 py-2 rounded ${
                currentPage === page + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineModules;
