---
slug: "will"
name: "will"
artist: "NAOKI"
from: "DanceDanceRevolution HOTTEST PARTY"
bpm: 145
series:
  - "hottest-us"
  - "hottest-jp"
  - "grand-prix-vol2"
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
|SINGLE| :badge[BEGINNER]{type="info"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=1} :level{slug="hottest-jp" level=1} :level{slug="grand-prix-vol2" level=1}</div>|56/0||
|SINGLE| :badge[BASIC]{type="warning"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=3} :level{slug="hottest-jp" level=3} :level{slug="grand-prix-vol2" level=4}</div>|86/10||
|SINGLE| :badge[DIFFICULT]{type="danger"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=5} :level{slug="hottest-jp" level=5} :level{slug="grand-prix-vol2" level=7}</div>|158/30||
|SINGLE| :badge[EXPERT]{type="success"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=7} :level{slug="hottest-jp" level=7} :level{slug="grand-prix-vol2" level=11}</div>|283/15||
|DOUBLE| :badge[BASIC]{type="warning"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="grand-prix-vol2" level=5}</div>|145/5||
|DOUBLE| :badge[DIFFICULT]{type="danger"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="grand-prix-vol2" level=7}</div>|197/15||
|DOUBLE| :badge[EXPERT]{type="success"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="grand-prix-vol2" level=11}</div>|281/19||
