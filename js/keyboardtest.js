import { exportFile } from 'fs-browsers';

const onExportClick = (textToExport) => {
  // Export to js file called 'file.js'
  exportFile(textToExport, { fileName: 'file.txt' });
}

module.exports(onExportClick)