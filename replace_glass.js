const fs = require('fs');
const path = require('path');

const traverseDir = (dir, callback) => {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      traverseDir(fullPath, callback);
    } else {
      if (fullPath.endsWith('.css')) callback(fullPath);
    }
  });
};

const processFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace inset shadows
  content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.8\)\s*inset/g, 'var(--glass-border) inset');
  content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.9\)\s*inset/g, 'var(--glass-border-hover) inset');
  content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.1\)\s*inset/g, 'var(--glass-border) inset'); // found some 0.1s in About.css
  
  // Replace hover backgrounds and border colors
  content = content.replace(/background:\s*rgba\(255,\s*255,\s*255,\s*0\.85\);/g, 'background: var(--glass-bg-strong);');
  content = content.replace(/border-color:\s*rgba\(255,\s*255,\s*255,\s*0\.8\);/g, 'border-color: var(--glass-border);');
  content = content.replace(/border-color:\s*rgba\(255,\s*255,\s*255,\s*0\.1\);/g, 'border-color: var(--glass-border);');
  
  // Box shadows drop shadows (rgba(31, 38, 135, ...)) -> usually fine as they are dark, but in dark mode maybe we want generic shadow?
  // Let's leave drop shadows alone, they are dark enough.
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
};

const srcDir = path.join(__dirname, 'src');
traverseDir(srcDir, processFile);
console.log("Done replacing hardcoded whites.");
