import { useEffect } from "react";

function Resume() {
  useEffect(() => {
    window.open(
      "https://docs.google.com/document/d/1Tpsnh49WfP5pftrWBoi5UXUS1tFyZiT_77QbhNfyVbE/preview",
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
