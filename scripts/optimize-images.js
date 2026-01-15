const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Image Optimization Script
 * Converts images to WebP format for better performance
 */

const INPUT_DIR = path.join(__dirname, '../src/assets/images');
const OUTPUT_DIR = path.join(__dirname, '../src/assets/images/webp');

// Supported image formats
const SUPPORTED_FORMATS = ['.png', '.jpg', '.jpeg'];

// WebP quality (0-100, higher is better quality but larger file)
const WEBP_QUALITY = 85;

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('🖼️  Image Optimization Script');
console.log('================================\n');
console.log(`📁 Input directory: ${INPUT_DIR}`);
console.log(`📁 Output directory: ${OUTPUT_DIR}`);
console.log(`⚙️  WebP quality: ${WEBP_QUALITY}\n`);

let converted = 0;
let skipped = 0;
let failed = 0;

/**
 * Get file size in human-readable format
 */
function getFileSize(filePath) {
    const stats = fs.statSync(filePath);
    const bytes = stats.size;
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

/**
 * Convert image to WebP
 */
async function convertToWebP(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .webp({ quality: WEBP_QUALITY })
            .toFile(outputPath);
        return true;
    } catch (error) {
        console.error(`   ❌ Error: ${error.message}`);
        return false;
    }
}

/**
 * Process all images in the input directory
 */
async function processImages() {
    const files = fs.readdirSync(INPUT_DIR);

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();

        // Skip if not a supported image format
        if (!SUPPORTED_FORMATS.includes(ext)) {
            continue;
        }

        const inputPath = path.join(INPUT_DIR, file);
        const outputFileName = path.basename(file, ext) + '.webp';
        const outputPath = path.join(OUTPUT_DIR, outputFileName);

        // Skip if already converted
        if (fs.existsSync(outputPath)) {
            console.log(`⏭️  Skipping ${file} (already exists)`);
            skipped++;
            continue;
        }

        console.log(`🔄 Converting: ${file}`);

        const originalSize = getFileSize(inputPath);
        const success = await convertToWebP(inputPath, outputPath);

        if (success) {
            const webpSize = getFileSize(outputPath);
            const savings = ((1 - fs.statSync(outputPath).size / fs.statSync(inputPath).size) * 100).toFixed(1);
            console.log(`   ✅ Original: ${originalSize} → WebP: ${webpSize} (${savings}% smaller)`);
            converted++;
        } else {
            failed++;
        }
        console.log('');
    }

    console.log('================================');
    console.log('✨ Conversion Complete!\n');
    console.log('📊 Summary:');
    console.log(`   - Converted: ${converted} images`);
    console.log(`   - Skipped: ${skipped} images`);
    console.log(`   - Failed: ${failed} images`);
    console.log(`   - Output: ${OUTPUT_DIR}\n`);
    console.log('💡 Next steps:');
    console.log('   1. Update your components to use WebP images');
    console.log('   2. Add fallback to original images for older browsers');
    console.log('   3. Test the images in your application\n');
}

// Run the script
processImages().catch(error => {
    console.error('❌ Script failed:', error);
    process.exit(1);
});
