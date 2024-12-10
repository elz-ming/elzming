type NavigationItem = {
  id: string; // Unique ID for each section
  label: string; // Label to display
};

const HeaderContent: Record<"English" | "Chinese" | "Malay", NavigationItem[]> =
  {
    English: [
      { id: "about", label: "About" },
      { id: "education", label: "Education" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "testimonials", label: "Testimonials" },
      { id: "contact", label: "Contact" },
    ],
    Chinese: [
      { id: "about", label: "关于我们" },
      { id: "education", label: "教育背景" },
      { id: "experience", label: "工作经验" },
      { id: "skills", label: "技能" },
      { id: "projects", label: "项目" },
      { id: "testimonials", label: "推荐信" },
      { id: "contact", label: "联系我们" },
    ],
    Malay: [
      { id: "about", label: "Tentang Kami" },
      { id: "education", label: "Pendidikan" },
      { id: "experience", label: "Pengalaman" },
      { id: "skills", label: "Kemahiran" },
      { id: "projects", label: "Projek" },
      { id: "testimonials", label: "Testimoni" },
      { id: "contact", label: "Hubungi Kami" },
    ],
  };

export default HeaderContent;
