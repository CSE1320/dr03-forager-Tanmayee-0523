"use client";
import React, { useEffect, useRef, useState } from "react";

export default function CameraPage() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  // Request camera access when the component mounts
  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        })
        .catch((err) => {
          console.error("Error accessing camera:", err);
        });
    }
  }, []);

  // Capture the current frame from the video stream
  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/png");
      setCapturedImage(dataUrl);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md flex flex-col items-center">
      <h1 className="text-xl font-semibold mb-4">Take a Mushroom Picture</h1>
      <div className="w-full relative">
        <video
          ref={videoRef}
          className="w-full rounded-xl shadow-md bg-black"
          autoPlay
          playsInline
        />
        {/* Hidden canvas used for capturing the photo */}
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
      <button
        onClick={capturePhoto}
        className="mt-4 px-6 py-2 bg-[#397367] text-white font-medium rounded-full shadow hover:bg-[#315f58] transition-colors"
      >
        Capture Photo
      </button>
      {capturedImage && (
        <div className="mt-6 w-full">
          <h2 className="text-lg font-semibold mb-2">Captured Image</h2>
          <img
            src={capturedImage}
            alt="Captured"
            className="w-full rounded-xl shadow-md"
          />
        </div>
      )}
    </div>
  );
}
