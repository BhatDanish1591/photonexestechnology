const fs = require('fs');
const path = require('path');

const filesToProcess = [
  "components/sections/InternshipSection.tsx",
  "components/sections/PlacementSection.tsx"
];

filesToProcess.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf-8');
  let originalContent = content;

  // Find Duplicate objectFit: "cover", in the style object
  // Specifically: style={{ objectFit: "cover", ... objectFit: "cover" ... }}
  // We can just use a regex to remove the FIRST instance of 'objectFit: "cover", '
  // if there's a second 'objectFit: "cover"' shortly after.
  content = content.replace(/objectFit:\s*"cover",([\s\S]*?)objectFit:\s*"cover"/g, '$1objectFit: "cover"');

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf-8');
    console.log(`Fixed duplicates in ${file}`);
  }
});
