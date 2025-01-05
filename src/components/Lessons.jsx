import { useState } from "react";
import Navbar from "./Navbar";

const Lessons = () => {
  // Video data
  // eslint-disable-next-line no-unused-vars
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "HTML Tutorial for Beginners - FreeCodeCamp.org",
      description: "Learn the basics of HTML to build web pages.",
      src: "https://www.youtube.com/embed/1Rs2ND1ryYc?si=zx9CZXsvVIprNREY",
    },
    {
      id: 2,
      title: "CSS Tutorial for Beginners - Programming with Mosh",
      description: "Understand CSS to style your websites effectively.",
      src: "https://www.youtube.com/embed/qz0aGYrrlhU?si=k9w1rSJ_VHuzD69S",
    },
    {
      id: 3,
      title: "JavaScript Tutorial for Beginners - FreeCodeCamp.org",
      description: "Get started with JavaScript programming.",
      src: "https://www.youtube.com/embed/PkZNo7MFNFg?si=x-1p2nRtWGsSFFnQ",
    },
  ]);

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Online Modules</h1>

        <div className="flex flex-col lg:flex-row">
          {/* Video Player Section */}
          <div className="flex-1">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="480px"
                src={currentVideo.src}
                title={currentVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-2">{currentVideo.title}</h2>
              <p className="text-gray-700">{currentVideo.description}</p>
            </div>
          </div>

          {/* Playlist Section */}
          <div className="w-full lg:w-1/3 lg:ml-8 mt-8 lg:mt-0">
            <h3 className="text-xl font-bold mb-4">Playlist</h3>
            <div className="flex flex-col gap-4">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className={`border rounded-lg p-4 cursor-pointer ${
                    currentVideo.id === video.id ? "bg-blue-100" : "bg-white"
                  }`}
                  onClick={() => setCurrentVideo(video)}
                >
                  <h4 className="text-lg font-bold mb-2">{video.title}</h4>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
