import {  load } from 'js-yaml'
import { readFile, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const srcFolder = './content/.songs/disney-jp'
const destFolder = './content/playstation-jp/disney'
const files = await readdir(srcFolder)
for (const file of files) {
  const fileText = await readFile(join(srcFolder, file), { encoding: 'utf-8' })
  const mdcContent = load(
    fileText.match(/^-{3}(.+?)series/ms)[1]
  )

  let convertedText = fileText
  for (const [key, value] of Object.entries(mdcContent)) {
    convertedText = convertedText.replaceAll(`{{ $doc.${key} }}`, value)
  }

  await writeFile(join(destFolder, file), convertedText, { encoding: 'utf-8' })
}
