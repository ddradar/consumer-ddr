---
slug: "the-beat"
name: "the beat"
artist: "Sparky"
from: "DanceDanceRevolution HOTTEST PARTY"
bpm: 140
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=2} :level{slug="hottest-jp" level=2}</div>|90/3||
|SINGLE|[BASIC]{.tag.is-basic}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=4} :level{slug="hottest-jp" level=4}</div>|155/18||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=6} :level{slug="hottest-jp" level=6}</div>|230/30||
|SINGLE|[EXPERT]{.tag.is-expert}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=9} :level{slug="hottest-jp" level=9}</div>|414/7||
