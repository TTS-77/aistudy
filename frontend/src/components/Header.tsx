import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  role: "student" | "teacher";
}

const Header = ({ role }: HeaderProps) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    // clear session/tokens if needed
    navigate(`/${role}`);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-lg px-6 py-3 flex items-center justify-between z-50">
      {/* Logo Left */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(`/${role}/dashboard`)}>
        <h1 className="text-xl font-bold text-white">Cognipath</h1>
      </div>

      {/* Profile Right */}
      <div className="relative">
        <User
          className="h-8 w-8 text-white cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white/90 backdrop-blur-md rounded-lg shadow-lg text-black">
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              onClick={() => navigate(`/${role}/`)}
            >
              Home
            </button>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              onClick={() => navigate(`/teacher/settings`)}
            >
              Settings
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
