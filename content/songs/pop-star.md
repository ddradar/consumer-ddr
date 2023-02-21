---
slug: "pop-star"
name: "POP STAR"
artist: ""
from: "(POP STAR)"
bpm: 140
series:
  - "grand-prix"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|<div class="field is-grouped is-grouped-multiline"> :level{slug="grand-prix" level=1}</div>|53/0||
|SINGLE|[BASIC]{.tag.is-basic}|<div class="field is-grouped is-grouped-multiline"> :level{slug="grand-prix" level=3}</div>|96/1||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|<div class="field is-grouped is-grouped-multiline"> :level{slug="grand-prix" level=6}</div>|207/9||
|SINGLE|[EXPERT]{.tag.is-expert}|<div class="field is-grouped is-grouped-multiline"> :level{slug="grand-prix" level=11}</div>|366/9||
|DOUBLE|[BASIC]{.tag.is-basic}|<div class="field is-grouped is-grouped-multiline"> :level{slug="grand-prix" level=3}</div>|96/1||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|<div class="field is-grouped is-grouped-multiline"> :level{slug="grand-prix" level=6}</div>|207/9||
|DOUBLE|[EXPERT]{.tag.is-expert}|<div class="field is-grouped is-grouped-multiline"> :level{slug="grand-prix" level=11}</div>|366/9||
