#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const [framework, component] = args;

const baseDir = path.resolve(__dirname, '..');
const srcDir = path.join(baseDir, `packages/${framework}-library/src/components/ui/${component}`);
const destDir = path.resolve(process.cwd(), 'components/ui', component);

if (!fs.existsSync(srcDir)) {
  console.error(`Component ${component} not found in ${framework} library.`);
  process.exit(1);
}

fs.mkdirSync(destDir, { recursive: true });
fs.readdirSync(srcDir).forEach(file => {
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
});

console.log(`Copied ${component} from ${framework}-library to ${destDir}`);
