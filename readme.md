<h1>Excel Vue i18n</h1>

You can create [Vue i18n](https://kazupon.github.io/vue-i18n/guide/formatting.html#named-formatting) locale files from Excel via this CLI application

<h2>Installation</h2>

```bash
$ npm i -g excel-vue-i18n
```

<h2>Examples</h2>


This line will generate json locale files depend on their key values that exist in the excel file. The JSON file will be generated under the root <code>/locale</code> as default.

```bash
$ excelVueI18n -p myLangFile.xlxs
```

If you want to specify path, you can.
```bash
$ excelVueI18n -p file/myLangFile.xlxs
```

If you want to generate one single file that contains all locales information you can use `-s` option.
```bash
$ excelVueI18n -p file/myLangFile.xlxs -s true
```

If you use `-s` option you can also specify genetared file name like this
```bash
$ excelVueI18n -p file/myLangFile.xlxs -s true -o myLocaleFile
```
then your genetared file name will be named as `myLocaleFile.json `under the root of `/locale`

> Note When `-s` option used `-o` option will be ignored because file names will be their lang codes

Specifying the folder path for the generated file(s) you can use `-f` option.
```bash
$ excelVueI18n -p myLangFile.xlxs -f langFolder
```
then your genetared file name will be named as `myLocaleFile.json `under the root of `/langFolder`  

<h2>Reference</h2>

```
Usage: -p <name>
Usage: -f <name>
Usage: -s <name>
Usage: -o <name>

Options:
  --help                Show help                                      [boolean]
  --version             Show version number                            [boolean]
  -p, --path            Source excel file path               [string] [required]
  -f, --folder          The folder that the files will be created into it
                                                                        [string]
  -s, --singleFile      When entered as true just one locale file will be
                        created                                        [boolean]
  -o, --outputFileName  Output file name that will be named when single param
                        sent as true                                    [string]
```