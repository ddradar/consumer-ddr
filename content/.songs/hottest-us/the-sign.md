---
slug: "the-sign"
name: "The Sign"
artist: "Honey Sweets"
from: "Happy Nation"
bpm: 100
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
|SINGLE| :badge[BEGINNER]{type="info"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=1} :level{slug="hottest-jp" level=1}</div>|70/3||
|SINGLE| :badge[BASIC]{type="warning"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=3} :level{slug="hottest-jp" level=3}</div>|109/1||
|SINGLE| :badge[DIFFICULT]{type="danger"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=5} :level{slug="hottest-jp" level=5}</div>|162/19||
|SINGLE| :badge[EXPERT]{type="success"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="hottest-us" level=7} :level{slug="hottest-jp" level=7}</div>|261/8||
