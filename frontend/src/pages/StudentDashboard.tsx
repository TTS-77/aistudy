import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { GraduationCap, Upload, BookOpen, Users, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // later we can clear tokens/session
    navigate("/student");
  };

  return (
<div className="min-h-screen bg-gradient-hero relative overflow-hidden flex flex-col items-center p-6 text-white pt-20">
  {/* Header */}
  <Header role="student" />
  
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-full max-w-2xl text-center mt-20">
        <div className="flex items-center justify-center gap-3 mb-6">
          <GraduationCap className="h-10 w-10 text-yellow-300" />
          <h1 className="text-3xl font-bold">Student Dashboard</h1>
        </div>

        <p className="text-lg mb-8">
          🎓 Welcome to your learning hub! Here you’ll see study materials,
          AI-powered summaries, and your progress (we’ll add these features step by step).
        </p>

        {/* Sections Start */}
<div className="grid grid-cols-1 gap-6 mb-6 text-left">
  {/* Study Materials */}
  <div 
            onClick={() => navigate("/student/materials")}
            className="bg-white/20 p-4 rounded-lg cursor-pointer hover:bg-white/30 transition"
          >
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <BookOpen className="w-5 h-5" /> Study Materials
            </h2>
            <p className="text-sm text-white/80">Check out the uploaded topics by your teacher.</p>
          </div>

  {/* Progress Tracker */}
  <div 
            onClick={() => navigate("/student/progress")}
            className="bg-white/20 p-4 rounded-lg cursor-pointer hover:bg-white/30 transition"
          >
            <h2 className="font-semibold text-lg flex items-center gap-2">
              📊 Progress Tracker
            </h2>
            <p className="text-sm text-white/80">Track your learning progress over time.</p>
          </div>
          </div>
{/* Sections End */}

      </div>
    </div>
  );
};

export default StudentDashboard;
