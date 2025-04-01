import { useEffect } from "react";

function Resume() {
  useEffect(() => {
    window.open(
      "https://drive.google.com/file/d/1-ujdGAPQJPvOiuuPFqavl12DrHOHTwnv/preview",
      "_blank"
    );
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-gray-600 text-lg">Opening resume...</p>
    </div>
  );
}

export default Resume;
