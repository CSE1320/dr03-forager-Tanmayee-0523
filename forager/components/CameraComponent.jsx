"use client";
import React, { useEffect, useRef, useState } from "react";

const CameraComponent = ({ onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [error, setError] = useState(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((mediaStream) => {
          setStream(mediaStream); // Save stream for cleanup
          if (videoRef.current) {
            videoRef.current.srcObject = mediaStream;
            // Use onloadedmetadata with a check to ensure videoRef.current is valid
            videoRef.current.onloadedmetadata = () => {
              if (videoRef.current) {
                videoRef.current
                  .play()
                  .catch((err) =>
                    console.error("Error during video play:", err)
                  );
              }
            };
          }
        })
        .catch((err) => {
          console.error("Error accessing camera:", err);
          setError("Error accessing camera: " + err.message);
        });
    } else {
      setError("Camera not supported in this browser.");
    }

    // Cleanup: stop all media tracks when the component unmounts
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

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

      // Pass the captured image to the parent via callback
      if (onCapture) onCapture(dataUrl);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md flex flex-col items-center">
      <h1 className="text-xl text-black font-semibold mb-4">Take a Mushroom Picture</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="w-full relative">
        <video
          ref={videoRef}
          className="w-full rounded-xl shadow-md bg-black"
          autoPlay
          playsInline
        />
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
};

export default CameraComponent;
