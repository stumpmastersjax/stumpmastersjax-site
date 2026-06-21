import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const sizes = [16, 32, 48, 192, 512];
const inputLogo = './public/images/logo.png';

console.log('Generating favicons from logo...');

// Read the logo
const logoBuffer = readFileSync(inputLogo);

// Generate PNG favicons for each size
for (const size of sizes) {
  await sharp(logoBuffer)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(`./public/favicon-${size}x${size}.png`);

  console.log(`✓ Generated favicon-${size}x${size}.png`);
}

// Generate apple-touch-icon (180x180)
await sharp(logoBuffer)
  .resize(180, 180, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  })
  .png()
  .toFile('./public/apple-touch-icon.png');

console.log('✓ Generated apple-touch-icon.png');

// Generate ICO file (using 32x32 as base)
await sharp(logoBuffer)
  .resize(32, 32, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  })
  .png()
  .toFile('./public/favicon-32.png');

console.log('✓ All favicons generated successfully!');
console.log('\nGenerated files:');
sizes.forEach(size => console.log(`  - favicon-${size}x${size}.png`));
console.log('  - apple-touch-icon.png');
