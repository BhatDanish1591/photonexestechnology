const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'components', 'sections');

const files = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(sectionsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace root section dark backgrounds with transparent
  content = content.replace(/background:\s*"#040d21"/g, 'background: "transparent"');
  content = content.replace(/background:\s*"linear-gradient\(180deg, #070f2b 0%, #040d21 100%\)"/g, 'background: "transparent"');
  content = content.replace(/background:\s*"linear-gradient\(180deg, #040d21 0%, #070f2b 100%\)"/g, 'background: "transparent"');
  
  // Replace dark purple gradients with cyan gradients for text
  content = content.replace(/background:\s*"linear-gradient\(135deg, #60a5fa, #a78bfa\)"/g, 'background: "var(--gradient-brand)"');
  
  // Also any transparent white borders/backgrounds to use the glass variables or light theme
  content = content.replace(/background:\s*"rgba\(255,255,255,0\.02\)"/g, 'background: "var(--bg-card)"');
  content = content.replace(/border:\s*"1px solid rgba\(255,255,255,0\.06\)"/g, 'border: "1px solid var(--border-glass)"');

  // Dashboard section uses #0d1b3e for inputs
  content = content.replace(/background:\s*"#0d1b3e"/g, 'background: "#ffffff"');
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated backgrounds in ${file}`);
}
