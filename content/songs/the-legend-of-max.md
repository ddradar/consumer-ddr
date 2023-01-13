---
slug: "the-legend-of-max"
name: "The legend of MAX"
artist: "ZZ"
from: "DanceDanceRevolution EXTREME"
bpm: "83-333"
series:
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
  "ext-us":
    slug: "ext-us"
    title: "Dance Dance Revolution EXTREME"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="ext-jp" level=3} :level{slug="ext-us" level=3}|174/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="ext-jp" level=6} :level{slug="ext-us" level=6}|255/3||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-jp" level=9} :level{slug="ext-us" level=9}|357/29||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-jp" jpvel="10+"} :level{slug="ext-us" level="10+"}|500/3||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="ext-jp" level=6} :level{slug="ext-us" level=6}|242/3||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-jp" level=9} :level{slug="ext-us" level=9}|366/3||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-jp" jpvel="10+"} :level{slug="ext-us" level="10+"}|484/3||
