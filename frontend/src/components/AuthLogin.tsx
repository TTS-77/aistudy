import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Brain, Users, ArrowRight, GraduationCap, UserCheck, Upload } from "lucide-react";

const AuthLogin = () => {
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [successMessage, setSuccessMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");


  
  // Determine default tab from URL
  const isTeacherRoute = location.pathname.includes('/teacher');
  const defaultTab = isTeacherRoute ? 'teacher' : 'student';

 const handleStudentSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: studentEmail,
        password: studentPassword,
        role: "student",
      }),
    });

    const data = await response.json();

   if (response.ok && data.success) {
  setMessageType("success");
  setSuccessMessage(data.message); // green
  setTimeout(() => navigate("/student/dashboard"), 1500);
} else {
  setMessageType("error");
  setSuccessMessage(data.message || "Invalid credentials"); // red
}

  } catch (error) {
    console.error("Error during login:", error);
    alert("Something went wrong, please try again.");
  }
};

const handleTeacherSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: teacherEmail,
        password: teacherPassword,
        role: "teacher",
      }),
    });

    const data = await response.json();

   if (response.ok && data.success) {
  setMessageType("success");
  setSuccessMessage(data.message); // green
  setTimeout(() => navigate("/teacher/dashboard"), 1500);
} else {
  setMessageType("error");
  setSuccessMessage(data.message || "Invalid credentials"); // red
}

  } catch (error) {
    console.error("Error during login:", error);
    alert("Something went wrong, please try again.");
  }
};


  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl w-full">
          
          {/* Left side - Hero content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white">COGNIPATH</h1>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your Personal AI
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent block">
                  Learning
                </span>
                <span className="text-white/90">Study Partner</span>
              </h2>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-md">
               Transform your teacher's notes into powerful learning tools. Get instant summaries, clear explanations, and practice quizzes to master any subject.
              </p>
            </div>

            {/* Role-specific features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                  <h3 className="text-white font-semibold">Your Smart Study Kit
</h3>
                </div>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Master Key Concepts Instantly</li>
                  <li>• Understand the Toughest Topics</li>
                  <li>• Practice for Perfection</li>
                  <li>• Visualize Your Progress</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-white" />
                  <h3 className="text-white font-semibold">Your AI Teaching Assistant</h3>
                </div>
                <ul className="text-white/80 text-sm space-y-2">
                  <li>• Upload Materials in Seconds</li>
                  <li>• Organize Your Curriculum Seamlessly</li>
                  <li>• Pinpoint Student Learning Gaps</li>
                  <li>• Monitor Class Engagement</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Right side - Login form */}
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md bg-gradient-card backdrop-blur-xl border-white/20 shadow-strong">
              <CardHeader className="text-center space-y-4">
              <CardTitle className="text-2xl font-bold text-white">
                    Welcome to Cognipath
              </CardTitle>

                <CardDescription className="text-muted-foreground">
                  Choose your role to get started
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {successMessage && (
                  <div
                       className={`mb-4 p-3 rounded ${
                        messageType === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                         >
                        {successMessage}
  </div>
)}      


                <Tabs defaultValue={defaultTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-white/10 backdrop-blur-sm">
                    <TabsTrigger 
                      value="student" 
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      <UserCheck className="h-4 w-4 mr-2" />
                      Student
                    </TabsTrigger>
                    <TabsTrigger 
                      value="teacher"
                      className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Teacher
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="student" className="space-y-4 mt-6">
                    <form onSubmit={handleStudentSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="student-email" className="text-foreground font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="student-email"
                          type="email"
                          placeholder="Enter your email"
                          value={studentEmail}
                          onChange={(e) => setStudentEmail(e.target.value)}
                          className="h-12 bg-white/50 border-white/30 focus:border-primary focus:ring-primary transition-smooth"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="student-password" className="text-foreground font-medium">
                          Password
                        </Label>
                        <Input
                          id="student-password"
                          type="password"
                          placeholder="Enter your password"
                          value={studentPassword}
                          onChange={(e) => setStudentPassword(e.target.value)}
                          className="h-12 bg-white/50 border-white/30 focus:border-primary focus:ring-primary transition-smooth"
                          required
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full h-12 bg-primary text-primary-foreground hover:shadow-glow transition-all duration-300 group font-semibold text-lg mt-6"
                      >
                        Login to Learn
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                    
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                      <p className="text-xs text-muted-foreground text-center">
                        🎯 Track progress • 📚 AI summaries • 🧠 Smart explanations
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="teacher" className="space-y-4 mt-6">
                    <form onSubmit={handleTeacherSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="teacher-email" className="text-foreground font-medium">
                          Email Address
                        </Label>
                        <Input
                          id="teacher-email"
                          type="email"
                          placeholder="Enter your email"
                          value={teacherEmail}
                          onChange={(e) => setTeacherEmail(e.target.value)}
                          className="h-12 bg-white/50 border-white/30 focus:border-secondary focus:ring-secondary transition-smooth"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="teacher-password" className="text-foreground font-medium">
                          Password
                        </Label>
                        <Input
                          id="teacher-password"
                          type="password"
                          placeholder="Enter your password"
                          value={teacherPassword}
                          onChange={(e) => setTeacherPassword(e.target.value)}
                          className="h-12 bg-white/50 border-white/30 focus:border-secondary focus:ring-secondary transition-smooth"
                          required
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full h-12 bg-secondary text-secondary-foreground hover:shadow-glow transition-all duration-300 group font-semibold text-lg mt-6"
                      >
                        Access Dashboard
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                    
                    <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/10">
                      <p className="text-xs text-muted-foreground text-center">
                        📋 Upload materials • 👥 Track students • 📊 View progress
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Quick links */}
                <div className="text-center pt-4 border-t border-white/10">
                  <p className="text-muted-foreground text-sm">
                    Need help getting started?{" "}
                    <Link 
                      to="/" 
                      className="text-accent font-medium hover:text-accent-light transition-colors hover:underline"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AuthLogin;