---
slug: "air"
name: "air"
artist: "DJ SIMON"
from: "beatmania 6thMIX -THE UK UNDERGROUND MUSIC-"
bpm: 130
series:
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
  "ext2":
    slug: "ext2"
    title: "Dance Dance Revolution EXTREME 2"
    color: "seagreen"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="ext-jp" level=1} :level{slug="ext2" level=1}|88/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="ext-jp" level=3} :level{slug="ext2" level=3}|152/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-jp" level=5} :level{slug="ext2" level=5}|177/2||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-jp" level=7} :level{slug="ext2" level=7}|219/10||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="ext-jp" level=2} :level{slug="ext2" level=2}|170/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-jp" level=5} :level{slug="ext2" level=5}|185/4||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-jp" level=8} :level{slug="ext2" level=8}|217/8||
