#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs-extra');
const path = require('path');

// Random color changer
const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    return colors[Math.floor(Math.random() * colors.length)];
};

// Date Formatting
const getFormattedDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
};

// Page Creator
const createPageContent = (name, author, date) => `
/**
 * @file page.tsx
 * @description Please enter the description
 * @date ${date}
 * @author ${author}
 */

import React from 'react';
import styles from "./page.module.css";

export default function Page() {
    return (<div className={styles["main"]}>${name} pages</div>);
}
`;

const createErrorContent = (name, author, date) => `
"use client"
/**
 * @file error.tsx
 * @description Error page for ${name}
 * @date ${date}
 * @author ${author}
 */

import React from 'react';
import styles from "./page.module.css";

export default function Error() {
    return (<div className={styles["main"]}>ERROR for ${name}</div>);
}
`;

const createLoadingContent = (name, author, date) => `
/**
 * @file loading.tsx
 * @description Loading page for ${name}
 * @date ${date}
 * @author ${author}
 */

import React from 'react';
import styles from "./page.module.css";

export default function Loading() {
    return (<div className={styles["main"]}>${name} pages is Loading</div>);
}
`;

const createCSSContent = () => `
.main {
    height: 100vh;
    background-color: ${getRandomColor()};
}
`;
// Component içeriği oluşturma fonksiyonları
const createComponentContent = (name, author, date) => `
/**
 * @file ${name}.tsx
 * @description This is the ${name} component
 * @date ${date}
 * @author ${author}
 */

import React from 'react';
import styles from './${name}.module.css';
import { ${name}Props } from './${name}.type';

const ${name}: React.FC<${name}Props> = ({ FirstProp }) => {
    return (
        <div className={styles.main}>
            This is the ${name} component: {FirstProp}
        </div>
    );
}

export default ${name};
`;

const createComponentTypeContent = (name, author, date) => `
/**
 * @file ${name}.type.ts
 * @description Types for ${name} component
 * @date ${date}
 * @author ${author}
 */

export type ${name}Props = {
    FirstProp: string;
};
`;

const createComponentCSSContent = () => `
.main {
    height: 100px;
    background-color: ${getRandomColor()};
}
`;

const createIndexContent = (name) => `
import  ${name}  from './${name}';
export default  ${name};
`;

program
    .version('1.0.0')
    .description('Next.js otomatik klasör ve dosya oluşturucu');

program
    .command('cp <name>')
    .description('Yeni bir sayfa ve bileşen oluştur')
    .option('-a, --author <author>', 'Yaratıcı ismi')
    .option('-g, --group <group>', 'Grup ismi')
    .option('-d, --dir <dir>', 'Dizin ismi')
    .option('-p, --parallel', 'Is it parallel ?')
    .action((name, options) => {
        const author = options.author || 'Bilinmeyen';
        const date = getFormattedDate();
        const targetDir = process.cwd();
        const baseDir = options.dir ? path.join(targetDir, 'app', '(pages)', options.dir) : path.join(targetDir, 'app', '(pages)');
        const groupDir = options.group ? path.join(baseDir, "("+options.group+")") : baseDir;
        const pageDir = options.parallel ? path.join(groupDir, '@'+name) : path.join(groupDir, name);
    

        fs.ensureDirSync(pageDir);

        // Dosyaların içeriğini oluşturma
        const pageContent = createPageContent(name, author, date);
        const errorContent = createErrorContent(name, author, date);
        const loadingContent = createLoadingContent(name, author, date);
        const cssContent = createCSSContent();

        // Dosyaları oluşturma ve yazma
        fs.writeFileSync(path.join(pageDir, `page.tsx`), pageContent, 'utf8');
        fs.writeFileSync(path.join(pageDir, `error.tsx`), errorContent, 'utf8');
        fs.writeFileSync(path.join(pageDir, `loading.tsx`), loadingContent, 'utf8');
        fs.writeFileSync(path.join(pageDir, `page.module.css`), cssContent, 'utf8');

        console.log(`Page Created: ${path.join(pageDir, `page.tsx`)}`);
        console.log(`Error Page Created: ${path.join(pageDir, `error.tsx`)}`);
        console.log(`Loading Page Created: ${path.join(pageDir, `loading.tsx`)}`);
        console.log(`Module.css File Created: ${path.join(pageDir, `page.module.css`)}`);
    });

    program
    .command('cc <name>')
    .description('Yeni bir bileşen oluştur')
    .option('-a, --author <author>', 'Yaratıcı ismi')
    .option('-d, --dir <dir>', 'Dizin ismi')
    .action((name, options) => {
        const author = options.author || 'Bilinmeyen';
        const date = getFormattedDate();
        const targetDir = process.cwd();
        const baseDir = options.dir ? path.join(targetDir, 'components', options.dir) : path.join(targetDir, 'components');
        const componentDir = path.join(baseDir, name);

        fs.ensureDirSync(componentDir);

        
        const componentContent = createComponentContent(name, author, date);
        const componentTypeContent = createComponentTypeContent(name, author, date);
        const componentCSSContent = createComponentCSSContent();
        const indexContent = createIndexContent(name);

        
        fs.writeFileSync(path.join(componentDir, `${name}.tsx`), componentContent, 'utf8');
        fs.writeFileSync(path.join(componentDir, `${name}.type.ts`), componentTypeContent, 'utf8');
        fs.writeFileSync(path.join(componentDir, `${name}.module.css`), componentCSSContent, 'utf8');
        fs.writeFileSync(path.join(componentDir, `index.ts`), indexContent, 'utf8');

        console.log(`Component Created: ${path.join(componentDir, `${name}.tsx`)}`);
        console.log(`Type File Created: ${path.join(componentDir, `${name}.type.ts`)}`);
        console.log(`CSS Module Created: ${path.join(componentDir, `${name}.module.css`)}`);
        console.log(`Index File Created: ${path.join(componentDir, `index.ts`)}`);
    });

program.parse(process.argv);
