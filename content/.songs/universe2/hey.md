---
slug: "hey"
name: "Hey!"
artist: "Tipsy"
from: "Uh-Oh!"
bpm: 200
series:
  - "universe2"
---

# {{ $doc.name }} / {{ $doc.artist }}

|Artist|BPM|From|
|------|---|----|
|{{ $doc.artist }}|{{ $doc.bpm }}|{{ $doc.from }}|

## 収録タイトル

:series-list{:series="series"}

|PlayStyle|Difficulty|Levels|Notes|Movie|
|---------|----------|------|-----|-----|
|SINGLE|[BEGINNER]{.tag.is-beginner}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe2" level="?"}</div>|89/0||
|SINGLE|[BASIC]{.tag.is-basic}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe2" level=4}</div>|174/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe2" level=7}</div>|314/8||
|SINGLE|[EXPERT]{.tag.is-expert}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe2" level=8}</div>|335/26||
|DOUBLE|[BEGINNER]{.tag.is-beginner}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe2" level="?"}</div>|||
|DOUBLE|[BASIC]{.tag.is-basic}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe2" level=5}</div>|171/9||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe2" level=7}</div>|303/7||
|DOUBLE|[EXPERT]{.tag.is-expert}|<div class="field is-grouped is-grouped-multiline"> :level{slug="universe2" level=8}</div>|309/20||
