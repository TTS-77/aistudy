import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

const TeacherUploadsPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
  if (!selectedFile) {
    setMessage("Please select a file to upload.");
    return;
  }

  const formData = new FormData();
  formData.append("file", selectedFile);

  try {
    const response = await fetch("http://localhost:5000/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setUploadedFiles((prev) => [...prev, selectedFile.name]);
      setMessage(`Uploaded: ${selectedFile.name}`);
    } else {
      setMessage(`Error: ${data.message}`);
    }

    setSelectedFile(null);
  } catch (error) {
    console.error(error);
    setMessage("Something went wrong during upload.");
  }
};


  return (
    <div className="min-h-screen p-6 bg-gradient-hero text-white">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg mt-20">
        <h1 className="text-2xl font-bold flex items-center gap-2 mb-6">
          <Upload className="h-6 w-6" /> Upload Study Material
        </h1>

        {message && (
          <div className="mb-4 p-3 rounded bg-green-200 text-green-800">{message}</div>
        )}

        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="fileUpload">Select File</Label>
            <Input
              id="fileUpload"
              type="file"
              onChange={handleFileChange}
              className="text-black"
            />
          </div>

          <Button onClick={handleUpload} className=" items-center bg-green-500 hover:bg-green-600">
            Upload
          </Button>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Uploaded Files:</h2>
          {uploadedFiles.length === 0 ? (
            <p className="text-white/80">No files uploaded yet.</p>
          ) : (
            <ul className="list-disc list-inside text-white/90">
              {uploadedFiles.map((file, idx) => (
                <li key={idx}>{file}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherUploadsPage;
