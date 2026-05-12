const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

sharp.cache(false); // Disable cache to release file locks on Windows

async function processImages() {
  const actions = {
    '1a.webp': 90,
    '1b.webp': 90,
    '2a.webp': 90,
    '3a.webp': 180,
    '3b.webp': 180,
    '4a.webp': 90,
    '4b.webp': 90
  };

  for (const [file, angle] of Object.entries(actions)) {
    console.log(`Rotating ${file} by ${angle} degrees`);
    const inputPath = path.join('public/images', file);
    const tempPath = path.join('public/images', `temp_${file}`);
    
    await sharp(inputPath).rotate(angle).toFile(tempPath);
    
    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath);
  }
  
  console.log('All done!');
}

processImages().catch(console.error);
