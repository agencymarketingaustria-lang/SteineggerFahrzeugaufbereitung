const fs = require('fs');
const sharp = require('sharp');
async function check() {
  const dir = 'C:/Users/noahg/.gemini/antigravity/brain/68cd910a-f70c-4085-9b4f-27dc8f65bfa6/';
  const files = fs.readdirSync(dir).filter(f => f.startsWith('uploaded_media_'));
  for (const f of files) {
    try {
      const m = await sharp(dir + f).metadata();
      console.log(f, m.width, 'x', m.height, 'orientation:', m.orientation);
    } catch(e) {
      console.error(f, e.message);
    }
  }
}
check();
