import * as chalk from 'chalk';

export function scriptLog(message: string) {
  console.log(`${chalk.blue(`[scripts]`)} ${message}`);
}

export enum LOG_LEVEL {
  INFO,
  ERROR,
}

export function log(
  message,
  {
    chalkColor = 'yellow',
    toolName,
    noNewline,
    level = LOG_LEVEL.INFO,
  }: { chalkColor?: string; toolName: string; noNewline?: boolean; level?: LOG_LEVEL }
) {
  const errorTemplate = `${chalk[chalkColor](`[${toolName || 'tool'}]`)} ${chalk.red(message)}`;
  const infoTemplate = `${chalk[chalkColor](`[${toolName || 'tool'}]`)} ${message}`;
  const usedTemplate = level === LOG_LEVEL.INFO ? infoTemplate : errorTemplate;

  if (noNewline) {
    process.stdout.write(usedTemplate);
    return;
  }
  console.log(usedTemplate);
}
