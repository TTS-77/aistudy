import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const SettingsPage = ({ role }: { role: "student" | "teacher" }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden flex flex-col items-center p-6 text-white pt-20">
      {/* Header */}
      <Header role={role} />

      {/* Content */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-full max-w-3xl mx-auto mt-4">
        <h1 className="text-3xl font-bold mb-6">{role === "student" ? "Student" : "Teacher"} Settings</h1>
        <p className="text-white/80 mb-4">
          This is a placeholder settings page. You can add options like:
        </p>
        <ul className="list-disc list-inside text-white/80 space-y-2">
          <li>Change password</li>
          <li>Update profile information</li>
          <li>Notification preferences</li>
          <li>Account settings</li>
        </ul>
        <button
          onClick={() => navigate(`/${role}/dashboard`)}
          className="mt-6 bg-secondary px-4 py-2 rounded hover:bg-secondary/90"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
