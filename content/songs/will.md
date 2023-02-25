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
|SINGLE|[BEGINNER]{.tag.is-beginner}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=1} :level{slug="hottest-jp" level=1} :level{slug="grand-prix-vol2" level=1}</div>|56/0||
|SINGLE|[BASIC]{.tag.is-basic}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=3} :level{slug="hottest-jp" level=3} :level{slug="grand-prix-vol2" level=4}</div>|86/10||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=5} :level{slug="hottest-jp" level=5} :level{slug="grand-prix-vol2" level=7}</div>|158/30||
|SINGLE|[EXPERT]{.tag.is-expert}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=7} :level{slug="hottest-jp" level=7} :level{slug="grand-prix-vol2" level=11}</div>|283/15||
|DOUBLE|[BASIC]{.tag.is-basic}|<div class="field is-grouped is-grouped-multiline"> :level{slug="grand-prix-vol2" level=5}</div>|145/5||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|<div class="field is-grouped is-grouped-multiline"> :level{slug="grand-prix-vol2" level=7}</div>|197/15||
|DOUBLE|[EXPERT]{.tag.is-expert}|<div class="field is-grouped is-grouped-multiline"> :level{slug="grand-prix-vol2" level=11}</div>|281/19||
