---
slug: "a-stupid-barber"
name: "A Stupid Barber"
artist: "Sho-T"
from: "DanceDanceRevolution EXTREME CS"
bpm: 132
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="ext-jp" level=1} :level{slug="ext-us" level=1}|108/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="ext-jp" level=4} :level{slug="ext-us" level=4}|152/16||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-jp" level=6} :level{slug="ext-us" level=6}|215/14||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-jp" level=7} :level{slug="ext-us" level=7}|271/25||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="ext-jp" level=3} :level{slug="ext-us" level=3}|126/3||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-jp" level=7} :level{slug="ext-us" level=7}|225/9||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-jp" level=8} :level{slug="ext-us" level=8}|271/6||
