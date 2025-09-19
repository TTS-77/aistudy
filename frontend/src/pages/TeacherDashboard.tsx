import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // later we can clear tokens/session
    navigate("/teacher");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-600 to-green-700 text-white p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-full max-w-2xl text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Upload className="h-10 w-10 text-green-300" />
          <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
        </div>

        <p className="text-lg mb-8">
          📚 Welcome! Here you’ll upload materials, organize subjects, and track
          students (we’ll add these features step by step).
        </p>

        <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default TeacherDashboard;
