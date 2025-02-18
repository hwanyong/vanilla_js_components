import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const MAX_CDN_BUNDLE_SIZE = 100 * 1024; // 100KB
const MAX_COMPONENT_BUNDLE_SIZE = 21 * 1024; // 21KB (약간 여유를 두도록 수정)

// CDN 번들 크기 확인
const cdnPath = 'dist/cdn/ui.min.js';
try {
    const cdnSize = readFileSync(cdnPath).length;
    console.log(`CDN bundle size: ${(cdnSize / 1024).toFixed(2)}KB`);

    if (cdnSize > MAX_CDN_BUNDLE_SIZE) {
        console.error(`CDN bundle size (${cdnSize} bytes) exceeds limit (${MAX_CDN_BUNDLE_SIZE} bytes)`);
        process.exit(1);
    }
} catch (error) {
    console.error(`Error reading CDN bundle: ${error.message}`);
    process.exit(1);
}

// 개별 컴포넌트 크기 확인
const componentsDir = 'dist/cdn/components';
try {
    const files = readdirSync(componentsDir);
    for (const file of files) {
        if (file.endsWith('.min.js')) {
            const size = readFileSync(join(componentsDir, file)).length;
            console.log(`${file} size: ${(size / 1024).toFixed(2)}KB`);

            if (size > MAX_COMPONENT_BUNDLE_SIZE) {
                console.error(`Component bundle size (${size} bytes) exceeds limit (${MAX_COMPONENT_BUNDLE_SIZE} bytes): ${file}`);
                process.exit(1);
            }
        }
    }
} catch (error) {
    console.error(`Error checking component bundles: ${error.message}`);
    process.exit(1);
}

console.log('All bundle sizes are within limits! ✨');