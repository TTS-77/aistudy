import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // later we can clear tokens/session
    navigate("/student");
  };

  return (
<div className="min-h-screen bg-gradient-hero relative overflow-hidden flex flex-col items-center justify-center p-6 text-white">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-full max-w-2xl text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <GraduationCap className="h-10 w-10 text-yellow-300" />
          <h1 className="text-3xl font-bold">Student Dashboard</h1>
        </div>

        <p className="text-lg mb-8">
          🎓 Welcome to your learning hub! Here you’ll see study materials,
          AI-powered summaries, and your progress (we’ll add these features step by step).
        </p>
        {/* Sections Start */}
<div className="grid grid-cols-1 gap-6 mb-6">
  {/* Study Materials */}
  <div className="bg-white/20 p-4 rounded-lg text-left">
    <h2 className="font-semibold text-lg">📚 Study Materials</h2>
    <p className="text-sm text-white/80">Access your uploaded study materials here.</p>
  </div>

  {/* AI Summaries */}
  <div className="bg-white/20 p-4 rounded-lg text-left">
    <h2 className="font-semibold text-lg">🤖 AI Summaries</h2>
    <p className="text-sm text-white/80">Check out AI-generated summaries of your lessons.</p>
  </div>

  {/* Practice Quizzes */}
  <div className="bg-white/20 p-4 rounded-lg text-left">
    <h2 className="font-semibold text-lg">📝 Practice Quizzes</h2>
    <p className="text-sm text-white/80">Test your knowledge with interactive quizzes.</p>
  </div>

  {/* Progress Tracker */}
  <div className="bg-white/20 p-4 rounded-lg text-left">
    <h2 className="font-semibold text-lg">📊 Progress Tracker</h2>
    <p className="text-sm text-white/80">Track your learning progress over time.</p>
  </div>
</div>
{/* Sections End */}

        <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default StudentDashboard;
