import { load } from 'js-yaml'
import { readFile, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

// ,/windows/grand-prix" level="(.+?)(,.+?)*,(.+?)"\} " level="$1"} :levels{links="/windows/grand-prix" level="$3"}
const srcFolder = './content/.songs/nova2-us'
const destFolder = './content/playstation2-us/supernova2'
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
  convertedText = convertedText.replaceAll(':series-list{:series="series"}', fileText.match(/series:\n(.+?)-{3}/ms)[1])
  convertedText = convertedText.replace(/^-{3}(.+?)-{3}\n\n/ms, '')

  await writeFile(join(destFolder, file), convertedText, { encoding: 'utf-8' })
}
