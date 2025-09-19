import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Brain, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-8 max-w-4xl">
        {/* Logo and Title */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
            <GraduationCap className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-white">Cognipath</h1>
        </div>

        {/* Hero Text */}
        <div className="space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Teacher-Guided AI Learning Platform
          </h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Where teachers upload materials and students learn with AI assistance. 
            Get summaries, explanations, and quizzes from your curriculum.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <BookOpen className="h-8 w-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Smart Summaries</h3>
            <p className="text-white/70 text-sm">AI condenses teacher materials into digestible summaries</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Brain className="h-8 w-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">AI Explanations</h3>
            <p className="text-white/70 text-sm">Get detailed explanations of complex concepts</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Users className="h-8 w-8 text-white mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Progress Tracking</h3>
            <p className="text-white/70 text-sm">Teachers monitor student learning progress</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link to="/student">
            <Button className="h-14 px-8 bg-gradient-primary hover:shadow-glow transition-all duration-300 group text-lg font-semibold">
              Student Login
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/teacher">
            <Button variant="outline" className="h-14 px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg font-semibold">
              Teacher Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
