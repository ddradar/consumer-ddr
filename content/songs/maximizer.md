---
slug: "maximizer"
name: "MAXIMIZER"
artist: "CLI-MAX S."
from: "DanceDanceRevolution EXTREME CS (US)"
bpm: 190
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="ext-us" level=2} :level{slug="festival" level=2}|148/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="ext-us" level=6} :level{slug="festival" level=6}|201/29||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-us" level=7} :level{slug="festival" level=7}|264/16||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-us" level=8} :level{slug="festival" level=8}|360/9||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="ext-us" level=5} :level{slug="festival" level=5}|192/4||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-us" level=7} :level{slug="festival" level=7}|279/7||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-us" level=8} :level{slug="festival" level=8}|331/14||
