import { useState } from "react";
import { BookOpen } from "lucide-react";

const dummyTopics = [
  { id: 1, title: "Introduction to React", aiContent: "AI summary will appear here..." },
  { id: 2, title: "JavaScript ES6 Features", aiContent: "AI summary will appear here..." },
  { id: 3, title: "CSS Flexbox & Grid", aiContent: "AI summary will appear here..." },
];

const MaterialsPage = () => {
  const [topics, setTopics] = useState(dummyTopics);

  return (
    <div className="min-h-screen bg-gradient-hero p-6 text-white pt-20">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg mt-20">
        <h1 className="text-2xl font-bold flex items-center gap-2 mb-6">
          <BookOpen className="h-6 w-6" /> Study Materials
        </h1>

        {topics.map((topic) => (
          <div
            key={topic.id}
            className="bg-white/20 p-4 rounded-lg mb-4 text-left"
          >
            <h2 className="font-semibold text-lg mb-2">{topic.title}</h2>
            
            {/* AI Content Box */}
            <div className="bg-white/10 p-3 rounded text-white/90">
              {topic.aiContent}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialsPage;
