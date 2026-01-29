import { X, Search } from "lucide-react";
import { useState } from "react";

const TagInput = ({ title, tags, setTags, placeholder }) => {
    const [inputVal, setInputVal] = useState('')

   
    
  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

    const handleForm = (e) => {
    e.preventDefault();

    const value = inputVal.trim();
    if (!value) return;                 // prevent empty
    if (tags.includes(value)) return;   // prevent duplicates

    setTags((prev) => [...prev, value]);
    setInputVal("");                    // reset input properly
    };

  return (
    <div className="space-y-3">
      <h3 className="text-base font-medium">{title}</h3>

      {/* Search input */}
      <div className="flex items-center gap-2 border border-border-color rounded-lg px-3 py-2 bg-gray-50">
        <Search size={16} className="text-gray-400" />
        <form onSubmit={(e) => {
            handleForm(e)
        }}>
            <input
                type="text"
                value={inputVal}
                placeholder={placeholder}
                className="bg-transparent outline-none w-full text-sm"
                onChange={(e) => setInputVal(e.target.value)}
            />
        </form>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm"
          >
            {tag}
            <button className="cursor-pointer" onClick={() => removeTag(tag)}>
              <X size={14} />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
