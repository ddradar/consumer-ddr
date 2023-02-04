---
slug: "test-my-best"
name: "TEST MY BEST"
artist: "E-ROTIC"
from: "Dancemania X8"
bpm: 147
series:
  - "5th"
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
|SINGLE|[BASIC]{.tag.is-basic}|<div class="field is-grouped is-grouped-multiline">:level{slug="5th" level=3}</div>|147/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|<div class="field is-grouped is-grouped-multiline">:level{slug="5th" level=4}</div>|189/0||
|SINGLE|[EXPERT]{.tag.is-expert}|<div class="field is-grouped is-grouped-multiline">:level{slug="5th" level=7}</div>|292/0||
|DOUBLE|[BASIC]{.tag.is-basic}|<div class="field is-grouped is-grouped-multiline">:level{slug="5th" level=3}</div>|140/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|<div class="field is-grouped is-grouped-multiline">:level{slug="5th" level=5}</div>|225/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|<div class="field is-grouped is-grouped-multiline">:level{slug="5th" level=7}</div>|285/0||
