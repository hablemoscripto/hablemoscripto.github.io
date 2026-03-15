/**
 * Image optimization script for Hablemos Cripto
 * Generates PWA icons, compresses large images, and creates responsive variants.
 * Run with: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import path from 'path';

const PUBLIC = 'public';
const IMAGES = `${PUBLIC}/images`;

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

// ─── 1. Generate PWA Icons from og-cover.png ───
async function generatePWAIcons() {
  console.log('🔧 Generating PWA icons...');
  const iconDir = `${PUBLIC}/icons`;
  await ensureDir(iconDir);

  const source = `${IMAGES}/og-cover.png`;
  const sizes = [16, 32, 48, 72, 96, 128, 144, 152, 180, 192, 384, 512];

  // Extract center square from the 1200x630 image
  const metadata = await sharp(source).metadata();
  const squareSize = Math.min(metadata.width, metadata.height);
  const left = Math.round((metadata.width - squareSize) / 2);
  const top = Math.round((metadata.height - squareSize) / 2);

  for (const size of sizes) {
    await sharp(source)
      .extract({ left, top, width: squareSize, height: squareSize })
      .resize(size, size, { fit: 'cover' })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(`${iconDir}/icon-${size}x${size}.png`);
    console.log(`  ✅ icon-${size}x${size}.png`);
  }

  // Generate maskable icon with padding (safe zone = 80% of icon)
  for (const size of [192, 512]) {
    const innerSize = Math.round(size * 0.8);
    const padding = Math.round((size - innerSize) / 2);

    const inner = await sharp(source)
      .extract({ left, top, width: squareSize, height: squareSize })
      .resize(innerSize, innerSize, { fit: 'cover' })
      .toBuffer();

    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 2, g: 6, b: 23, alpha: 1 } // navy-950 #020617
      }
    })
      .composite([{ input: inner, left: padding, top: padding }])
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(`${iconDir}/maskable-${size}x${size}.png`);
    console.log(`  ✅ maskable-${size}x${size}.png`);
  }

  // Generate favicon.ico (32x32 PNG, browsers accept PNG favicons)
  await sharp(source)
    .extract({ left, top, width: squareSize, height: squareSize })
    .resize(32, 32, { fit: 'cover' })
    .png({ quality: 90 })
    .toFile(`${PUBLIC}/favicon.png`);
  console.log(`  ✅ favicon.png`);
}

// ─── 2. Compress Large Images ───
async function compressImages() {
  console.log('\n🗜️  Compressing large images...');

  // og-cover.png → optimized WebP (for actual use) + keep smaller PNG for OG tags
  const ogMeta = await sharp(`${IMAGES}/og-cover.png`).metadata();
  await sharp(`${IMAGES}/og-cover.png`)
    .resize(1200, 630, { fit: 'cover' })
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(`${IMAGES}/og-cover-optimized.png`);
  const ogSize = (await stat(`${IMAGES}/og-cover-optimized.png`)).size;
  console.log(`  ✅ og-cover-optimized.png (${(ogSize / 1024).toFixed(0)}KB)`);

  // MadLad.jpg → WebP at multiple sizes
  for (const width of [450, 900]) {
    const suffix = width === 450 ? '' : '-2x';
    await sharp(`${IMAGES}/MadLad.jpg`)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(`${IMAGES}/MadLad${suffix}.webp`);
    const s = (await stat(`${IMAGES}/MadLad${suffix}.webp`)).size;
    console.log(`  ✅ MadLad${suffix}.webp (${(s / 1024).toFixed(0)}KB)`);
  }

  // banner.jpg → WebP at multiple sizes (hero background)
  for (const width of [768, 1280, 1920]) {
    await sharp(`${IMAGES}/banner.jpg`)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(`${IMAGES}/banner-${width}w.webp`);
    const s = (await stat(`${IMAGES}/banner-${width}w.webp`)).size;
    console.log(`  ✅ banner-${width}w.webp (${(s / 1024).toFixed(0)}KB)`);
  }
}

// ─── 3. Create responsive lesson image variants ───
async function optimizeLessonImages() {
  console.log('\n📐 Creating responsive lesson image variants...');
  const lessonsDir = `${IMAGES}/lessons`;
  const dirs = await readdir(lessonsDir);

  for (const dir of dirs) {
    const dirPath = `${lessonsDir}/${dir}`;
    const dirStat = await stat(dirPath);
    if (!dirStat.isDirectory()) continue;

    const files = await readdir(dirPath);
    for (const file of files) {
      if (!file.endsWith('.webp') || file.includes('-sm') || file.includes('-md')) continue;

      const filePath = `${dirPath}/${file}`;
      const baseName = file.replace('.webp', '');
      const metadata = await sharp(filePath).metadata();

      // Create mobile variant (640px wide)
      if (metadata.width > 640) {
        await sharp(filePath)
          .resize(640, null, { withoutEnlargement: true })
          .webp({ quality: 78 })
          .toFile(`${dirPath}/${baseName}-sm.webp`);
      }

      // Create tablet variant (1024px wide)
      if (metadata.width > 1024) {
        await sharp(filePath)
          .resize(1024, null, { withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(`${dirPath}/${baseName}-md.webp`);
      }

      console.log(`  ✅ ${dir}/${baseName} → responsive variants`);
    }
  }
}

// ─── Run All ───
async function main() {
  console.log('═══════════════════════════════════════');
  console.log('  Hablemos Cripto Image Optimization');
  console.log('═══════════════════════════════════════\n');

  await generatePWAIcons();
  await compressImages();
  await optimizeLessonImages();

  console.log('\n✨ All images optimized successfully!');
}

main().catch(console.error);
