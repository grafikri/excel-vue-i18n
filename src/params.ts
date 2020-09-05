import * as yargs from 'yargs';


const options = yargs
  .usage("Usage: -p <name>")
  .option("p", { alias: "path", describe: "Source excel file path", type: "string", demandOption: true })
  .usage("Usage: -f <name>")
  .option("f", { alias: "folder", describe: "The folder that the files will be created into it", type: "string", demandOption: false })
  .usage("Usage: -s <name>")
  .option("s", { alias: "singleFile", describe: "When entered as true just one locale file will be created", type: "boolean", demandOption: false })
  .usage("Usage: -o <name>")
  .option("o", { alias: "outputFileName", describe: "Output file name that will be named when single param sent as true", type: "string", demandOption: false })
  .argv;


export default options

