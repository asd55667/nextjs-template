const fs = require('fs').promises;
const path = require('path');

const staticSrcPath = path.join(__dirname, '.next/static');
const staticDestPath = path.join(__dirname, '.next/standalone/.next/static');
const publicSrcPath = path.join(__dirname, 'public');
const publicDestPath = path.join(__dirname, '.next/standalone/public');

async function copyAssets(src, dest) {
    await fs.mkdir(dest, { recursive: true });
    const items = await fs.readdir(src, { withFileTypes: true });

    const promises = items.map(async (item) => {
        const srcPath = path.join(src, item.name);
        const destPath = path.join(dest, item.name);

        if (item.isDirectory()) {
            return copyAssets(srcPath, destPath);
        } else {
            return fs.copyFile(srcPath, destPath);
        }
    });

    await Promise.all(promises);
}

(async () => {
    try {
        await copyAssets(staticSrcPath, staticDestPath);
        await copyAssets(publicSrcPath, publicDestPath);
        console.log('Assets copied successfully');
    } catch (err) {
        console.error(`Failed to copy assets: ${err}`);
    }
})();