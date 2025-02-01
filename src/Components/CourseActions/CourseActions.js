const CourseActions = ({ onCategoryChange }) => {
  return (
    <div className="glass-card p-6 mb-8">
      <div className="flex gap-4 items-center justify-between wrapSmall">
        <button className="gradient-button">
          <i className="fas fa-plus"></i>
          Create New Course
        </button>
        <select
          className=" modern-input"
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="development">Development</option>
          <option value="design">Design</option>
          <option value="business">Business</option>
          <option value="marketing">Marketing</option>
        </select>
      </div>
    </div>
  );
};

export default CourseActions;
