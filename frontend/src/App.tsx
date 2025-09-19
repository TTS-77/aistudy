import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AuthLogin from "./components/AuthLogin";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import UploadPage from "./pages/teacher/UploadPage";
import SubjectsPage from "./pages/teacher/SubjectsPage";
import StudentsPage from "./pages/teacher/StudentsPage";
import SettingsPage from "./pages/teacher/SettingsPage";

import MaterialsPage from "./pages/student/MaterialsPage";
import ProgressPage from "./pages/student/ProgressPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/student" element={<AuthLogin />} />
          <Route path="/teacher" element={<AuthLogin />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/upload" element={<UploadPage />} />
          <Route path="/teacher/subjects" element={<SubjectsPage />} />
          <Route path="/teacher/students" element={<StudentsPage />} />
          <Route path="/teacher/settings" element={<SettingsPage role="teacher" />} />
          <Route path="/teacher/settings" element={<SettingsPage role="student" />} />
          <Route path="/student/materials" element={<MaterialsPage />} />
          <Route path="/student/progress" element={<ProgressPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
