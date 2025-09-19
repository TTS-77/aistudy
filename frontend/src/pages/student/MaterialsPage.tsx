import { useState, useEffect } from "react";
import { BookOpen } from "lucide-react";
import axios from "axios";

interface Topic {
  id: number;
  aiContent: string;
}

const MaterialsPage = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/uploads");
        const files: string[] = res.data.files;

        const topicsWithAI = await Promise.all(
          files.map(async (file, idx) => {
            const aiRes = await axios.get(
              `http://localhost:5000/api/summary/${file}`
            );
            return {
              id: idx + 1,
              aiContent: aiRes.data.aiContent,
            };
          })
        );

        setTopics(topicsWithAI);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero p-6 text-white pt-20">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg mt-20">
        <h1 className="text-2xl font-bold flex items-center gap-2 mb-6">
          <BookOpen className="h-6 w-6" /> Study Materials
        </h1>

        {loading ? (
          <p>Loading AI summaries...</p>
        ) : (
          topics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white/20 p-4 rounded-lg mb-4 text-left"
            >
              {/* Custom heading */}
              <h2 className="font-semibold text-lg mb-2 text-blue-200">
                📘 AI Generated Summary
              </h2>

              {/* AI Content Box */}
              <pre className="bg-white/10 p-3 rounded text-white/90 whitespace-pre-wrap text-sm leading-relaxed">
                {topic.aiContent}
              </pre>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MaterialsPage;
