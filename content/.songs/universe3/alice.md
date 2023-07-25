---
slug: "alice"
name: "Alice"
artist: "Moby"
from: "Last Night"
bpm: 95
series:
  - "universe3"
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
|SINGLE| :badge[BEGINNER]{type="info"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe3" level="?"}</div>|39/0||
|SINGLE| :badge[BASIC]{type="warning"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe3" level=2}</div>|75/0||
|SINGLE| :badge[DIFFICULT]{type="danger"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe3" level=4}</div>|160/2||
|SINGLE| :badge[EXPERT]{type="success"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe3" level=6}</div>|208/12||
|DOUBLE| :badge[BEGINNER]{type="info"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe3" level="?"}</div>|||
|DOUBLE| :badge[BASIC]{type="warning"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe3" level=2}</div>|69/2||
|DOUBLE| :badge[DIFFICULT]{type="danger"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe3" level=4}</div>|160/2||
|DOUBLE| :badge[EXPERT]{type="success"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe3" level=6}</div>|205/12||
