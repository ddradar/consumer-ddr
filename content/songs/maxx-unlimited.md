---
slug: "maxx-unlimited"
name: "MAXX UNLIMITED"
artist: "Z"
from: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
bpm: "140-320"
series:
  "max2-jp":
    slug: "max2-jp"
    title: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
    color: "black"
  "max2-us":
    slug: "max2-us"
    title: "DDRMAX2 Dance Dance Revolution"
    color: "orange"
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="max2-us" level=3} :level{slug="ext-jp" level=3}|94/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="max2-jp" level=6} :level{slug="max2-us" level=6} :level{slug="ext-jp" level=6}|222/49||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="max2-jp" level=8} :level{slug="max2-us" level=8} :level{slug="ext-jp" level=8}|333/62||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="max2-jp" level=10} :level{slug="max2-us" level=10} :level{slug="ext-jp" level=10}|555/56||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="max2-jp" level=6} :level{slug="max2-us" level=6} :level{slug="ext-jp" level=6}|150/69||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="max2-jp" level=8} :level{slug="max2-us" level=8} :level{slug="ext-jp" level=8}|300/55||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="max2-jp" level=10} :level{slug="max2-us" level=10} :level{slug="ext-jp" level=10}|500/23||
