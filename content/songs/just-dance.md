---
slug: "just-dance"
name: "Just Dance"
artist: "Lady Gaga"
from: "The Fame"
bpm: 119
series:
  - "x2"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|<div class="field is-grouped is-grouped-multiline"> :level{slug="x2" level=1}</div>|62/0||
|SINGLE|[BASIC]{.tag.is-basic}|<div class="field is-grouped is-grouped-multiline"> :level{slug="x2" level=3}</div>|106/16||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|<div class="field is-grouped is-grouped-multiline"> :level{slug="x2" level=6}</div>|162/16||
|SINGLE|[EXPERT]{.tag.is-expert}|<div class="field is-grouped is-grouped-multiline"> :level{slug="x2" level=8}</div>|210/26||
|DOUBLE|[BASIC]{.tag.is-basic}|<div class="field is-grouped is-grouped-multiline"> :level{slug="x2" level=4}</div>|112/16||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|<div class="field is-grouped is-grouped-multiline"> :level{slug="x2" level=6}</div>|166/26||
|DOUBLE|[EXPERT]{.tag.is-expert}|<div class="field is-grouped is-grouped-multiline"> :level{slug="x2" level=8}</div>|217/30||
