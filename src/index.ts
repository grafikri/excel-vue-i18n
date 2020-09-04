import * as XLSX from 'xlsx'
import { uniq } from 'lodash'

/**
 * Reading file
 */
const workbook = XLSX.readFile(__dirname + '/../files/lang.xlsx');

/**
 * Get all data from sheets as JSON
 */
const data = workbook.SheetNames.map(item => XLSX.utils.sheet_to_json(workbook.Sheets[item]))

/**
 * Detect different language
 */
const langs = data.map(item => item.map(item => Object.keys(item as Object))).flat().map(item => { item.shift(); return item }).flat()
const plainLangs = uniq(langs)


/**
 * Parse excel to vue i18n format
 */
const arr: any = {}
plainLangs.flat().forEach((lang) => {
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


console.log('data: ', arr);