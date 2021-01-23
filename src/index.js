import glob from 'glob';

import { rmSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { exec } from 'child_process';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const cloneDir = `${__dirname.replace('/src', '')}/clone`;
const outDir = `${__dirname.replace('/src', '')}/modules`;

const resetDir = (dir) => {
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir);
};

resetDir(cloneDir);
resetDir(outDir);

await new Promise((res) => exec(`git clone https://github.com/GooseMod/Modules.git ${cloneDir}`, res));

const modules = glob.sync(`${cloneDir}/modules/**/*.js`);

for (const fullPath of modules) {
  const modulePath = fullPath.replace(`${cloneDir}/modules/`, '');
  console.log(modulePath);

  const category = modulePath.split('/')[0];
  const rawName = modulePath.split('/')[1].split('.')[0];

  const fileContent = readFileSync(fullPath, 'utf8');

  const { name, description, version, author } = eval(`
const goosemodScope = {
  patcher: {
    inject: () => {},
    uninject: () => {},
    patch: () => {}
  },
  webpackModules: {
    findByProps: () => {}
  }
};

${fileContent}`);

  const manifestJson = {
    name,
    description,
    version,
    author,

    tags: [ category ],
    main: 'index.js'
  };

  const baseDir = `${outDir}/${rawName}`;
  resetDir(baseDir);

  writeFileSync(`${baseDir}/goosemodModule.json`, JSON.stringify(manifestJson, null, 2));

  let jsCode = readFileSync(fullPath, 'utf8');

  jsCode = jsCode.replace(/let obj = (.*);.*obj/gs, (_, obj) => `export default ${obj.replace('{', '{\ngooseModHandlers: {').replace(/}$/, '}\n}')};`); // Change old eval returning -> export default

  jsCode = jsCode.replace(/^[ \t]*(name|description|author|version).*(\n{2,})?/gm, ''); // Remove metadata keys (and any extra newlines after them)

  jsCode = jsCode.replace('remove:', 'onRemove:');

  writeFileSync(`${baseDir}/index.js`, jsCode);

  console.log(jsCode);
}