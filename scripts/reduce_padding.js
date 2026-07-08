const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/loysa/OneDrive/Desktop/NEW/photonexes/components/sections';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

let changedFiles = 0;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let originalContent = fs.readFileSync(filePath, 'utf8');
  let content = originalContent;

  // Replace Tailwind padding classes
  content = content.replace(/\bpy-24\b/g, 'py-12');
  content = content.replace(/\bpy-20\b/g, 'py-10');
  content = content.replace(/\bpt-24\b/g, 'pt-12');
  content = content.replace(/\bpt-20\b/g, 'pt-10');
  content = content.replace(/\bpb-24\b/g, 'pb-12');
  content = content.replace(/\bpb-20\b/g, 'pb-10');

  // Replace inline padding styles
  content = content.replace(/padding:\s*"8rem /g, 'padding: "4rem ');
  content = content.replace(/padding:\s*"6rem /g, 'padding: "3rem ');
  content = content.replace(/padding:\s*"4rem /g, 'padding: "2rem ');
  
  content = content.replace(/paddingTop:\s*"8rem"/g, 'paddingTop: "4rem"');
  content = content.replace(/paddingTop:\s*"10rem"/g, 'paddingTop: "5rem"');
  
  content = content.replace(/paddingBottom:\s*"10rem"/g, 'paddingBottom: "5rem"');
  content = content.replace(/paddingBottom:\s*"8rem"/g, 'paddingBottom: "4rem"');
  content = content.replace(/paddingBottom:\s*"6rem"/g, 'paddingBottom: "3rem"');

  if (originalContent !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    changedFiles++;
    console.log(`Updated padding in ${file}`);
  }
});

console.log(`\nSuccess! Reduced padding in ${changedFiles} files.`);
