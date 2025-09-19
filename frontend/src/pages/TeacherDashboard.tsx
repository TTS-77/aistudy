import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Upload, BookOpen, Users, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/teacher");
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden flex flex-col items-center p-6 text-white pt-20">
  {/* Header */}
  <Header role="teacher" />
  
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-full max-w-2xl text-center mt-20">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Upload className="h-10 w-10 text-green-300" />
          <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
        </div>

        <p className="text-lg mb-8">
          📚 Welcome! Here you’ll upload materials, organize subjects, and track students.
        </p>

        {/* Sections */}
        <div className="grid grid-cols-1 gap-6 mb-6 text-left">
          <div 
            onClick={() => navigate("/teacher/upload")}
            className="bg-white/20 p-4 rounded-lg cursor-pointer hover:bg-white/30 transition"
          >
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <Upload className="w-5 h-5" /> Upload Materials
            </h2>
            <p className="text-sm text-white/80">Upload study resources for students.</p>
          </div>

          <div 
            onClick={() => navigate("/teacher/subjects")}
            className="bg-white/20 p-4 rounded-lg cursor-pointer hover:bg-white/30 transition"
          >
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <BookOpen className="w-5 h-5" /> Manage Subjects
            </h2>
            <p className="text-sm text-white/80">Organize and edit course subjects.</p>
          </div>

          <div 
            onClick={() => navigate("/teacher/students")}
            className="bg-white/20 p-4 rounded-lg cursor-pointer hover:bg-white/30 transition"
          >
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <Users className="w-5 h-5" /> Track Students
            </h2>
            <p className="text-sm text-white/80">Monitor student progress and performance.</p>
          </div>

        </div>

      
      </div>
    </div>
  );
};

export default TeacherDashboard;
