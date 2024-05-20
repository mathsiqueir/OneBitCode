import fs from 'node:fs';
import { filename } from './create.js';

const updateText = "modified content";

export function updateFile() {
	fs.writeFileSync(filename, updateText, 'utf-8');
	console.log(`O conteúdo do ${filename} foi modificado com sucesso`);
}