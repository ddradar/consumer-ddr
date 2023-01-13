---
slug: "tsugaru"
name: "TSUGARU"
artist: "RevenG vs DE-SIRE"
from: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
bpm: "95-165"
series:
  "max2-jp":
    slug: "max2-jp"
    title: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
    color: "black"
  "max2-us":
    slug: "max2-us"
    title: "DDRMAX2 Dance Dance Revolution"
    color: "orange"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="max2-us" level=1} :level{slug="ext-us" level=1}|92/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="max2-jp" level=3} :level{slug="max2-us" level=3} :level{slug="ext-us" level=3}|107/18||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="max2-jp" level=6} :level{slug="max2-us" level=6} :level{slug="ext-us" level=6}|232/8||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="max2-jp" level=9} :level{slug="max2-us" level=9} :level{slug="ext-us" level=9}|366/8||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="max2-jp" level=4} :level{slug="max2-us" level=4} :level{slug="ext-us" level=4}|158/4||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="max2-jp" level=7} :level{slug="max2-us" level=7} :level{slug="ext-us" level=7}|236/5||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="max2-jp" level=9} :level{slug="max2-us" level=9} :level{slug="ext-us" level=9}|360/3||
