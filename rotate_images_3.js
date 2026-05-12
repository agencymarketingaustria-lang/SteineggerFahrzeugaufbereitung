const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

sharp.cache(false);

async function processImages() {
  const actions = {
    '3a.webp': 270, // 90 degrees left
    '3b.webp': 270  // 90 degrees left
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
