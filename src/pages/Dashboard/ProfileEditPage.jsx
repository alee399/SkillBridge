import { X, Camera } from "lucide-react";
import { useState } from "react";
import profile from '../../assets/profile.png'
import InputTag from '../../components/Dashbard/Profile/ProfileEdit/TagInput'
import Button from '../../common/ui/Button'
import { useNavigate } from "react-router-dom";

const LANGUAGES = [
  "Urdu",
  "English",
  "Arabic",
  "Spanish",
  "French",
  "German",
  "Chinese",
];

const ProfileEditPage = () => {
  const [bio, setBio] = useState("I am AI Engineer");
  const [languages, setLanguages] = useState([
    "Urdu",
    "English",
    "German",
    "Chinese",
  ]);
  const navigate = useNavigate()

  const toggleLanguage = (lang) => {
    setLanguages((prev) =>
      prev.includes(lang)
        ? prev.filter((l) => l !== lang)
        : [...prev, lang]
    );
  };
  const [skillsTeach, setSkillsTeach] = useState([
    "React Development",
    "TypeScript",
    "UI/UX",
  ]);

  const [skillsLearning, setSkillsLearning] = useState([
      "Machine Learning",
      "Social Media Marketing",
      "Data Science",
    ]);

    const [certifications, setCertifications] = useState([
      "AWS Solution Architect",
      "Google UI/UX Design",
    ]);

  return (
      <div className="flex flex-col justify-between">
        {/* Header */}
        <div className="border-b border-border-color ">
        <div className="flex justify-between items-start gap-6 px-6 pt-6 pb-2 ">
          <div className="relative w-18 h-18">
            <img
              src={profile}
              alt="avatar"
              className="w-full h-full rounded-full object-cover"
            />
            <button className="absolute -bottom-1 -right-1 bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center">
              <Camera size={14} />
            </button>
          </div>
          <div className="flex-1">
              <div className="">
                <h2 className="text-xl font-semibold">JUNAID ALI</h2>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  maxLength={500}
                  className="mt-2 border border-border-color shadow-xs rounded-lg p-3 resize-none focus:outline-none focus:ring-1 focus:ring-primary w-full"
                  rows={3}
                />
                <p className="text-[12px] text-medium text-text-gray mt-1">
                  {bio.length}/500 characters
                </p>
              </div>
          </div>
          <button
            onClick={() => {
              navigate(-1)
            }} 
            className="cursor-pointer hover:scale-120 transition duration-100 hover:text-primary"
          >
              <X size={22} />
          </button>
        </div>
        </div>

        {/* Form */}
        <div id="editPro" className="h-65 w-full overflow-y-auto">
          <div className="grid grid-cols-2 gap-10 mt-8 px-12 lg:px-25">
            {/* Left */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-text-gray font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="JUNAID ALI"
                  className="w-full border border-border-color shadow-xs rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm text-text-gray font-medium mb-2">
                  Location
                </label>
                <input
                  type="text"
                  defaultValue="GilGit"
                  className="w-full border border-border-color shadow-xs rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm text-text-gray font-medium mb-2">
                  Timezone
                </label>
                <select className="w-full border border-border-color shadow-xs rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary">
                  <option>IST (GMT+5:30)</option>
                  <option>PST (GMT-8)</option>
                  <option>GMT (UTC)</option>
                </select>
              </div>
            </div>

            {/* Right */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Languages
              </label>

              <div className="flex flex-wrap gap-3">
                {LANGUAGES.map((lang) => {
                  const active = languages.includes(lang);
                  return (
                    <button
                      key={lang}
                      onClick={() => toggleLanguage(lang)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer
                        ${
                          active
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                    >
                      {active && "✓ "} {lang}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="space-y-10 mt-10 px-25">
            <InputTag
              title="Skills I Teach"
              tags={skillsTeach}
              setTags={setSkillsTeach}
              placeholder="Search"
            />

            <InputTag
              title="Skills I’m Learning"
              tags={skillsLearning}
              setTags={setSkillsLearning}
              placeholder="Search"
            />

            <InputTag
              title="Certifications"
              tags={certifications}
              setTags={setCertifications}
              placeholder="Search"
            />
          </div>
        </div>


        {/* Footer */}
        <div className="flex justify-end gap-4 mt-10 border-t border-border-color pt-6 px-6 pb-6 ">
          <Button variant="outline" size="md">Cancel</Button>
          <Button size="md">Save</Button>
        </div>
      </div>
  );
};

export default ProfileEditPage;
