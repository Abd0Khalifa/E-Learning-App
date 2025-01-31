import React from "react";

const CourseMedia = () => {
  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-bold mb-6">Course Media</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Course Thumbnail
          </label>
          <div className="border-2 border-dashed border-main-color/30 rounded-lg p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-main-color/20 flex items-center justify-center">
              <i className="fas fa-cloud-upload-alt text-3xl text-main-color"></i>
            </div>
            <p className="text-gray-400 mb-2">
              Drag and drop your image here, or click to browse
            </p>
            <p className="text-sm text-gray-400">
              Recommended size: 1280x720px
            </p>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Promotional Video
          </label>
          <div className="border-2 border-dashed border-main-color/30 rounded-lg p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-main-color/20 flex items-center justify-center">
              <i className="fas fa-film text-3xl text-main-color"></i>
            </div>
            <p className="text-gray-400 mb-2">
              Upload a video to introduce your course
            </p>
            <p className="text-sm text-gray-400">Maximum duration: 5 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMedia;
