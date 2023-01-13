---
slug: "share-my-love"
name: "Share My Love"
artist: "Julie Frost"
from: "DanceDanceRevolution 4thMIX CS"
bpm: 125
series:
  "4th":
    slug: "4th"
    title: "Dance Dance Revolution 4thMIX"
    color: "midnightblue"
  "disney-us":
    slug: "disney-us"
    title: "Dance Dance Revolution Disney MIX"
    color: "gold"
  "max-jp":
    slug: "max-jp"
    title: "DDRMAX -DanceDanceRevolution 6thMIX-"
    color: "blue"
  "max-us":
    slug: "max-us"
    title: "DDRMAX Dance Dance Revolution"
    color: "darkorchid"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="4th" level=3} :level{slug="disney-us" level=2} :level{slug="max-jp" level="?"} :level{slug="max-us" level=3}|176/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="4th" level=4} :level{slug="disney-us" level=3} :level{slug="max-jp" level="?"} :level{slug="max-us" level=5}|196/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="4th" level=5} :level{slug="disney-us" level=5} :level{slug="max-jp" level="?"} :level{slug="max-us" level=7}|333/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="4th" level=3} :level{slug="disney-us" level=2} :level{slug="max-jp" level="?"} :level{slug="max-us" level=3}|178/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="4th" level=4} :level{slug="disney-us" level=3} :level{slug="max-jp" level="?"} :level{slug="max-us" level=4}|224/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="4th" level=5} :level{slug="max-jp" level="?"} :level{slug="max-us" level=5}|334/0||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{slug="4th" level=4}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{slug="4th" level=3}|176/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{slug="4th" level=4}|196/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{slug="4th" level=5}|332/0||
