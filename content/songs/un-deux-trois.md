---
slug: "un-deux-trois"
name: "un deux trois"
artist: "SDMS"
from: "DanceDanceRevolution EXTREME CS"
bpm: 140
series:
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
  "festival":
    slug: "festival"
    title: "DDR FESTIVAL Dance Dance Revolution"
    color: "seagreen"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="ext-jp" level=1} :level{slug="festival" level=1} :level{slug="ext2" level=1}|102/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="ext-jp" level=4} :level{slug="festival" level=4} :level{slug="ext2" level=4}|121/25||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-jp" level=6} :level{slug="festival" level=6} :level{slug="ext2" level=6}|187/34||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-jp" level=7} :level{slug="festival" level=7} :level{slug="ext2" level=7}|267/11||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="ext-jp" level=3} :level{slug="festival" level=3} :level{slug="ext2" level=3}|113/4||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-jp" level=6} :level{slug="festival" level=6} :level{slug="ext2" level=6}|160/13||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-jp" level=7} :level{slug="festival" level=7} :level{slug="ext2" level=7}|225/13||
