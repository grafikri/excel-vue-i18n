import * as XLSX from 'xlsx'
import { uniq } from 'lodash'
import * as fs from 'fs'
import * as path from 'path'

const rootPath = path.join("..")

export interface Config {
  path: string
  singleFile: boolean
  folder: string
  outputFileName: string
}

interface JsonSheet {
  [key: string]: string
}

export const config: Config = {
  path: 'lang.xlsx',
  outputFileName: 'locales',
  singleFile: false,
  folder: 'locale',
}


/**
 * Get all data from sheets as JSON
 * 
 * @param workbook 
 */
const getAllSheetValues = (workbook: XLSX.WorkBook) => {
  return workbook.SheetNames.map(item => XLSX.utils.sheet_to_json(workbook.Sheets[item])) as JsonSheet[][]
}


/**
 * Detect different language
 */
const getAllDifferentLang = (data: JsonSheet[][]) => {
  const langs = data.map(item => item.map(item => Object.keys(item as Object))).flat().map(item => { item.shift(); return item }).flat()
  return uniq(langs)
}

/**
 * Parse excel to vue i18n format
 * 
 * @param langs 
 * @param workbook 
 * @param data 
 */
const getJson = (langs: string[], workbook: XLSX.WorkBook, data: JsonSheet[][]) => {
  const arr: any = {}
  langs.flat().forEach((lang) => {
    arr[lang] = {}
    workbook.SheetNames.map((sheet: string, index) => {
      arr[lang][sheet] = {}
      data[index].forEach(item => {
        const mItem = item as any
        const attr = Object.values(mItem)[0] as string
        arr[lang][sheet][attr] = mItem[lang]
      });
    })
  })

  return arr
}


const exportFile = (config: Config) => {
  const workbook = XLSX.readFile(`${config.path}`);
  const data = getAllSheetValues(workbook)
  const langs = getAllDifferentLang(data)
  const json = getJson(langs, workbook, data)
  
  if (config.singleFile) {
    const fileName = `${config.outputFileName}.json`
    fs.mkdirSync(`${config.folder}`, { recursive: true })
    fs.writeFileSync(`${config.folder}/${fileName}`, JSON.stringify(json, null, 2))
  } else {
    langs.forEach(item => {
      const fileName = `${item}.json`
      fs.mkdirSync(`${config.folder}`, { recursive: true })
      fs.writeFileSync(`${config.folder}/${fileName}`, JSON.stringify(json[item], null, 2))
    })
  }
  
}



export default exportFile