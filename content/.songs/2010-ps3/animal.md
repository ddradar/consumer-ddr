---
slug: "animal"
name: "Animal"
artist: "Ke$ha"
from: "Animal"
bpm: 139
series:
  - "2010-ps3"
  - "2010-360"
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
|SINGLE| :badge[BEGINNER]{type="info"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="2010-ps3" level=1} :level{slug="2010-360" level=1}</div>|71/15||
|SINGLE| :badge[BASIC]{type="warning"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="2010-ps3" level=4} :level{slug="2010-360" level=4}</div>|110/22||
|SINGLE| :badge[DIFFICULT]{type="danger"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="2010-ps3" level=5} :level{slug="2010-360" level=5}</div>|203/15||
|SINGLE| :badge[EXPERT]{type="success"}|<div class="field is-grouped is-grouped-multiline"> :level{slug="2010-ps3" level=7} :level{slug="2010-360" level=7}</div>|246/21||
