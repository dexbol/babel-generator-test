import fs from 'fs/promises';
import util from 'util';
import childProcess from 'child_process';
import { parse } from '@babel/parser';
import _generate from '@babel/generator';

const generate = _generate.default;

var sourceCode = await fs.readFile('./input.js', { encoding: 'utf-8' });
var ast = parse(sourceCode, {
    sourceType: 'module',
    plugins: ['jsx'],
});
var code = generate(ast, {
    retainLines: process.argv.indexOf('--retainLines') > -1 ? true : false,
    compact: true,
}).code;

await fs.writeFile('./output.js', code);

if (process.argv.indexOf('--prettier') > -1) {
    await util.promisify(childProcess.exec)('npx prettier --write ./output.js');
}
