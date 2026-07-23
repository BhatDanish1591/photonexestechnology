const fs = require('fs');
const path = require('path');

const filesToProcess = [
  "components/sections/AboutDetailsSection.tsx",
  "components/sections/AboutSection.tsx",
  "components/sections/BestCompanySection.tsx",
  "components/sections/CoreValuesSection.tsx",
  "components/sections/InternshipSection.tsx",
  "components/sections/PlacementSection.tsx",
  "components/sections/WhyChooseUsSection.tsx",
  "app/internship/page.tsx"
];

filesToProcess.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf-8');
  let originalContent = content;

  // Add import if missing
  if (!content.includes('import Image from "next/image"')) {
    if (content.match(/^"use client";/)) {
      content = content.replace(/^"use client";\r?\n/, '"use client";\nimport Image from "next/image";\n');
    } else {
      content = 'import Image from "next/image";\n' + content;
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf-8');
    console.log(`Added missing import to ${file}`);
  }
});
