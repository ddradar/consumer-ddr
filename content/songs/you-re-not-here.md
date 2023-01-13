---
slug: "you-re-not-here"
name: "You're Not Here"
artist: "Heather"
from: "DanceDanceRevolution EXTREME CS (US)"
bpm: "70-138"
series:
  "ext-us":
    slug: "ext-us"
    title: "Dance Dance Revolution EXTREME"
    color: "seagreen"
  "festival":
    slug: "festival"
    title: "DDR FESTIVAL Dance Dance Revolution"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="ext-us" level=1} :level{slug="festival" level=1}|119/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="ext-us" level=4} :level{slug="festival" level=4}|169/9||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-us" level=6} :level{slug="festival" level=6}|246/16||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-us" level=8} :level{slug="festival" level=8}|331/28||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="ext-us" level=4} :level{slug="festival" level=4}|163/7||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-us" level=6} :level{slug="festival" level=6}|213/4||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-us" level=8} :level{slug="festival" level=8}|329/11||
