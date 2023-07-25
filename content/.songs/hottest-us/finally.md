---
slug: "finally"
name: "Finally"
artist: "CLUB 90's"
from: "Finally"
bpm: 130
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
|SINGLE| :badge[BEGINNER]{type="info"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=1} :level{slug="hottest-jp" level=1}</div>|93/8||
|SINGLE| :badge[BASIC]{type="warning"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=4} :level{slug="hottest-jp" level=4}</div>|129/11||
|SINGLE| :badge[DIFFICULT]{type="danger"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=5} :level{slug="hottest-jp" level=5}</div>|170/30||
|SINGLE| :badge[EXPERT]{type="success"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=8} :level{slug="hottest-jp" level=8}</div>|274/25||
