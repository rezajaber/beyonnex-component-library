#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const [framework, component] = args;

const baseDir = path.resolve(__dirname, 'components', framework);
const srcFile = path.join(baseDir, `${component}.vue`);
const destDir = path.resolve(process.cwd(), 'src/components/ui');
const destFile = path.join(destDir, `${component}.vue`);

console.log(`Looking for component in: ${srcFile}`);

if (!fs.existsSync(srcFile)) {
  console.error(`Component ${component} not found in ${framework} library.`);
  process.exit(1);
}

fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(srcFile, destFile);

console.log(`Copied ${component}.vue from ${framework} library to ${destDir}`);
