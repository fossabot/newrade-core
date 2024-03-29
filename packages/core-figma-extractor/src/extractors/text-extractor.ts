import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import chalk from 'chalk';
import debug from 'debug';
import { FileNodesResponse, FileStylesResponse, FullStyleMetadata } from 'figma-js';
import * as prettier from 'prettier';

import { pascal } from '@newrade/core-iso-utils';

import { FILES_TYPE_TEXT, regexName } from '../constants/figma-texts.constants.js';
import {
  FigmaTextHeading,
  FigmaTextLabel,
  FigmaTextParagraphe,
  TextTokens,
} from '../models/figma-texts.model.js';
import { fetchObjectById } from '../service/figma-api.service.js';

const log = debug('nr:core-cli');
const ___filename = fileURLToPath(import.meta.url);
const ___dirname = dirname(___filename);

export function parseFigmaTexts(data: FileStylesResponse['meta']['styles']) {
  const project = JSON.parse(fs.readFileSync(path.join(___dirname, '../../package.json'), 'utf-8'));

  fs.mkdirSync(path.join(___dirname, '../../figma'), { recursive: true });

  /**
   * Writing all export files
   */
  Object.keys(FILES_TYPE_TEXT).forEach((fileType: string) => {
    fs.writeFileSync(
      //@ts-ignore
      path.join(___dirname, FILES_TYPE_TEXT[fileType]),
      `/** auto-generated by ${project.name} v${project.version} - ${new Date()
        .toLocaleDateString()
        .split('/')
        .join('-')} */\n`
    );
  });

  const dataToken: TextTokens = {};

  const requests = data.map(async (key: FullStyleMetadata, index) => {
    try {
      if (key.style_type === 'TEXT' && regexName.test(key.name)) {
        const result = await fetchObjectById(key.node_id);
        const textStyle: FileNodesResponse = (await result.json()) as FileNodesResponse;

        const newText = getFigmaText(textStyle, key.node_id);
        dataToken[
          `${newText.textType + newText.mediaQuery + newText.textSize + newText.textVariant}`
        ] = newText;
        return dataToken;
      }
    } catch (error: any) {
      log(chalk.red(`${error}`));
    }
  });

  /**
   * Export all text to CSS - JSON - SCSS - TS
   */
  Promise.all(requests)
    .then((result) => {
      createTextVariantTS(dataToken);
    })
    .catch((error) => {
      log(chalk.red(`${error}`));
    });
}

export function getFigmaText(rawText: any, key: string | number): any {
  const nameNode: string[] = rawText.nodes[key].document.name.split('/');

  if (nameNode[0] === 'Label') {
    const newFigmaLabel: FigmaTextLabel = {
      id: `${key}`,
      textType: pascal(nameNode[0]),
      mediaQuery: pascal(nameNode[1]),
      textSize: pascal(nameNode[2]),
      textVariant: pascal(nameNode[3]),
      fontFamily: rawText.nodes[key].document.style['fontFamily'],
      fontPostScriptName: rawText.nodes[key].document.style['fontPostScriptName'],
      fontWeight: rawText.nodes[key].document.style['fontWeight'],
      paragraphSpacing: rawText.nodes[key].document.style['paragraphSpacing'],
      fontSize: rawText.nodes[key].document.style['fontSize'],
      letterSpacing: rawText.nodes[key].document.style['letterSpacing'],
      lineHeightPx: rawText.nodes[key].document.style['lineHeightPx'],
      lineHeightPercent: rawText.nodes[key].document.style['lineHeightPercent'],
    };
    return newFigmaLabel;
  }

  if (nameNode[0] === 'Paragraphe') {
    const newFigmaParagraphe: FigmaTextParagraphe = {
      id: `${key}`,
      textType: pascal(nameNode[0]),
      mediaQuery: pascal(nameNode[1]),
      textSize: pascal(nameNode[2]),
      textVariant: pascal(nameNode[3]),
      fontFamily: rawText.nodes[key].document.style['fontFamily'],
      fontPostScriptName: rawText.nodes[key].document.style['fontPostScriptName'],
      fontWeight: rawText.nodes[key].document.style['fontWeight'],
      paragraphSpacing: rawText.nodes[key].document.style['paragraphSpacing'],
      fontSize: rawText.nodes[key].document.style['fontSize'],
      letterSpacing: rawText.nodes[key].document.style['letterSpacing'],
      lineHeightPx: rawText.nodes[key].document.style['lineHeightPx'],
      lineHeightPercent: rawText.nodes[key].document.style['lineHeightPercent'],
    };

    return newFigmaParagraphe;
  }

  if (nameNode[0] === 'Heading') {
    const newFigmaHeading: FigmaTextHeading = {
      id: `${key}`,
      textType: pascal(nameNode[0]),
      mediaQuery: pascal(nameNode[1]),
      textSize: pascal(nameNode[2]),
      textVariant: pascal(nameNode[3]),
      fontFamily: rawText.nodes[key].document.style['fontFamily'],
      fontPostScriptName: rawText.nodes[key].document.style['fontPostScriptName'],
      fontWeight: rawText.nodes[key].document.style['fontWeight'],
      paragraphSpacing: rawText.nodes[key].document.style['paragraphSpacing'],
      fontSize: rawText.nodes[key].document.style['fontSize'],
      letterSpacing: rawText.nodes[key].document.style['letterSpacing'],
      lineHeightPx: rawText.nodes[key].document.style['lineHeightPx'],
      lineHeightPercent: rawText.nodes[key].document.style['lineHeightPercent'],
    };
    return newFigmaHeading;
  }
}

const createTextVariantTS = (textObject: TextTokens) => {
  const TextKeys = Object.keys(textObject).map((text) => {
    return `'${text}': {
      id: '${textObject[text].id}',
      textType: '${textObject[text].textType}',
      mediaQuery: '${textObject[text].mediaQuery}',
      textSize: '${textObject[text].textSize}',
      textVariant?: '${textObject[text].textVariant}',
      fontFamily: '${textObject[text].fontFamily}',
      fontPostScriptName: '${textObject[text].fontPostScriptName}',
      fontWeight: ${textObject[text].fontWeight},
      paragraphSpacing: ${textObject[text].paragraphSpacing},
      fontSize: ${textObject[text].fontSize},
      letterSpacing: ${textObject[text].letterSpacing},
      lineHeightPx: ${textObject[text].lineHeightPx},
      lineHeightPercent: ${textObject[text].lineHeightPercent},
    }`;
  });

  const texts = `export const colors: TextTokens = { ${TextKeys} }`;

  fs.appendFile(
    path.join(___dirname, FILES_TYPE_TEXT.TS),
    `import { TextTokens } from '@newrade/core-figma-extractor';\n ${texts}`,
    (err) => {
      if (err) throw err;
      log(chalk.green(`New colors TS added`));
    }
  );
  const fileContent = fs.readFileSync(path.join(___dirname, FILES_TYPE_TEXT.TS), 'utf-8');

  fs.writeFileSync(
    path.join(___dirname, FILES_TYPE_TEXT.TS),
    `${prettier.format(fileContent, {
      parser: 'typescript',
      singleQuote: true,
      tabWidth: 2,
    })}`
  );
};
