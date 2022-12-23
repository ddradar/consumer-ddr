---
slug: "analyze"
name: "ANALYZE"
artist: "B. BANDJ"
from: ""
bpm: 93
series:
  - "max-jp"
  - "max-us"
  - "max2-jp"
  - "max2-us"
  - "ext-jp"
  - "party"
  - "ext-us"
  - "festival"
  - "ext2"
  - "strike"
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
<!-- festival -->
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="festival" level=4}|0/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="festival" level=5}|0/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="festival" level=7}|0/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="festival" level=4}|0/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="festival" level=5}|0/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="festival" level=7}|0/0||