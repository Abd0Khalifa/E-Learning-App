import React, { useState } from "react";
const CourseContent = ({ onContentChange, errors, touched }) => {
  const [youtubeLinks, setYoutubeLinks] = useState([""]);
  const handleLinkChange = (index, value) => {
    const newLinks = [...youtubeLinks];
    newLinks[index] = value;
    setYoutubeLinks(newLinks);
    onContentChange(newLinks.filter((link) => link.trim() !== ""));
  };
  const addLinkInput = () => {
    setYoutubeLinks([...youtubeLinks, ""]);
  };
  return (
    <div className="glass-card p-8 mb-8 animate-on-scroll">
      <h2 className="text-2xl font-bold mb-6">Course Content</h2>
      <div className="space-y-4">
        {youtubeLinks.map((link, index) => (
          <div key={index}>
            <label className="block text-sm font-medium mb-2">
              YouTube Link {index + 1}
            </label>
            <input
              type="text"
              className="modern-input"
              placeholder="Enter YouTube video URL"
              value={link}
              onChange={(e) => handleLinkChange(index, e.target.value)}
            />
            {errors.youtubeLinks && touched.youtubeLinks && (
              <div className="text-red-500 text-sm">{errors.youtubeLinks}</div>
            )}
          </div>
        ))}
        <button
          type="button"
          className="gradient-button w-full justify-center py-2 mt-4"
          onClick={addLinkInput}
        >
          <i className="fas fa-plus"></i>
          Add Another Video
        </button>
      </div>
    </div>
  );
};

export default CourseContent;