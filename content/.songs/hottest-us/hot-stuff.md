---
slug: "hot-stuff"
name: "Hot Stuff"
artist: "DISCO QUEEN"
from: "Bad Girls"
bpm: 145
series:
  - "hottest-us"
  - "hottest-jp"
---

# {{ $doc.name }} / {{ $doc.artist }}

|Artist|BPM|From|
|------|---|----|
|{{ $doc.artist }}|{{ $doc.bpm }}|{{ $doc.from }}|

## 収録タイトル

:series-list{:series="series"}

## 譜面一覧

|PlayStyle|Difficulty|Levels|Notes|Movie|
|---------|----------|------|-----|-----|
|SINGLE| :badge[BEGINNER]{type="info"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=1} :level{slug="hottest-jp" level=1}</div>|91/8||
|SINGLE| :badge[BASIC]{type="warning"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=4} :level{slug="hottest-jp" level=4}</div>|147/5||
|SINGLE| :badge[DIFFICULT]{type="danger"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=7} :level{slug="hottest-jp" level=7}</div>|248/18||
|SINGLE| :badge[EXPERT]{type="success"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=9} :level{slug="hottest-jp" level=9}</div>|339/25||
