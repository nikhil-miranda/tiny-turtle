#!/bin/bash

# Image Optimization Script for Portfolio Website
# This script converts images to WebP format for better performance

echo "🖼️  Image Optimization Script"
echo "================================"
echo ""

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebp not found. Installing webp tools..."
    echo ""
    echo "Please install webp tools using one of these methods:"
    echo ""
    echo "Using Homebrew (recommended):"
    echo "  brew install webp"
    echo ""
    echo "Using npm (alternative):"
    echo "  npm install -g cwebp-bin"
    echo ""
    exit 1
fi

# Create output directory for WebP images
OUTPUT_DIR="src/assets/images/webp"
mkdir -p "$OUTPUT_DIR"

echo "📁 Output directory: $OUTPUT_DIR"
echo ""

# Counter for converted images
CONVERTED=0
SKIPPED=0

# Convert PNG and JPEG images to WebP
echo "🔄 Converting images to WebP format..."
echo ""

for img in src/assets/images/*.{png,jpg,jpeg,PNG,JPG,JPEG} 2>/dev/null; do
    # Skip if no files found
    [ -e "$img" ] || continue
    
    # Get filename without path and extension
    filename=$(basename "$img")
    name="${filename%.*}"
    
    # Output WebP file
    output="$OUTPUT_DIR/${name}.webp"
    
    # Skip if already converted
    if [ -f "$output" ]; then
        echo "⏭️  Skipping $filename (already exists)"
        ((SKIPPED++))
        continue
    fi
    
    # Convert to WebP with quality 85 (good balance of quality and size)
    echo "🔄 Converting: $filename"
    cwebp -q 85 "$img" -o "$output" 2>&1 | grep -E "(Saving|file size)"
    
    if [ $? -eq 0 ]; then
        # Get file sizes
        original_size=$(du -h "$img" | cut -f1)
        webp_size=$(du -h "$output" | cut -f1)
        echo "   ✅ Original: $original_size → WebP: $webp_size"
        ((CONVERTED++))
    else
        echo "   ❌ Failed to convert $filename"
    fi
    echo ""
done

echo "================================"
echo "✨ Conversion Complete!"
echo ""
echo "📊 Summary:"
echo "   - Converted: $CONVERTED images"
echo "   - Skipped: $SKIPPED images"
echo "   - Output: $OUTPUT_DIR"
echo ""
echo "💡 Next steps:"
echo "   1. Update your components to use WebP images"
echo "   2. Add fallback to original images for older browsers"
echo "   3. Test the images in your application"
echo ""
