export function replaceMethodLogger(originalCall: string, replacementCall: string, lineNumber?: number): void {
  console.log(
    `${
      typeof lineNumber === 'undefined' || lineNumber === null ? '' : `At line ${lineNumber}, `
    } original method call ${originalCall} was replaced with ${replacementCall} `,
  );
}

export function deleteImportLogger(originalImport: string, lineNumber?: number): void {
  console.log(
    `${
      typeof lineNumber === 'undefined' || lineNumber === null ? '' : `At line ${lineNumber}, `
    } import statement from Team JavaScript SDK: ${originalImport} is removed `,
  );
}

export function addImportLogger(replacementImport: string): void {
  console.log(`import statement from teamsjs SDK: ${replacementImport} is added `);
}

export function docLinkLogger(): void {
  console.log('For more details of teamsjs SDK, please refer to the link: _____________');
}