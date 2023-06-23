---
slug: "dummy"
name: "Dummy"
artist: "RAM"
from: "DanceDanceRevolution UNIVERSE3"
bpm: 175
series:
  - "universe3"
  - "grand-prix-vol12"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe3" level="?"} :level{slug="grand-prix-vol12" level=2}</div>|74/5||
|SINGLE|[BASIC]{.tag.is-basic}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe3" level=2} :level{slug="grand-prix-vol12" level=4}</div>|133/4||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe3" level=4} :level{slug="grand-prix-vol12" level=7}</div>|222/1||
|SINGLE|[EXPERT]{.tag.is-expert}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe3" level=7} :level{slug="grand-prix-vol12" level=10}</div>|299/3||
|DOUBLE|[BEGINNER]{.tag.is-beginner}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe3" level="?"}</div>|||
|DOUBLE|[BASIC]{.tag.is-basic}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe3" level=3} :level{slug="grand-prix-vol12" level=4}</div>|133/4||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe3" level=5} :level{slug="grand-prix-vol12" level=7}</div>|222/1||
|DOUBLE|[EXPERT]{.tag.is-expert}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe3" level=8} :level{slug="grand-prix-vol12" level=11}</div>|322/7||
