---
slug: "b4u"
name: "B4U"
artist: "NAOKI"
from: "DanceDanceRevolution 4thMIX"
bpm: 155
series:
  "4th":
    slug: "4th"
    title: "Dance Dance Revolution 4thMIX"
    color: "midnightblue"
  "disney-us":
    slug: "disney-us"
    title: "Dance Dance Revolution Disney MIX"
    color: "gold"
  "konamix":
    slug: "konamix"
    title: "Dance Dance Revolution KONAMIX"
    color: "orange"
  "max2-jp":
    slug: "max2-jp"
    title: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
    color: "black"
  "party":
    slug: "party"
    title: "Dance Dance Revolution Party Collection"
    color: "hotpink"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="party" level=1} :level{slug="ext-us" level=1}|104/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="4th" level=4} :level{slug="disney-us" level=4} :level{slug="konamix" level=4} :level{slug="max2-jp" level=4} :level{slug="party" level=4} :level{slug="ext-us" level=4}|188/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="4th" level=5} :level{slug="disney-us" level=5} :level{slug="konamix" level=5} :level{slug="max2-jp" level=5} :level{slug="party" level=5} :level{slug="ext-us" level=5}|238/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="4th" level=8} :level{slug="disney-us" level=8} :level{slug="konamix" level=8} :level{slug="max2-jp" level=8} :level{slug="party" level=8} :level{slug="ext-us" level=8}|325/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="4th" level=4} :level{slug="disney-us" level=4} :level{slug="konamix" level=4} :level{slug="max2-jp" level=4} :level{slug="party" level=4} :level{slug="ext-us" level=4}|191/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="4th" level=6} :level{slug="disney-us" level=6} :level{slug="konamix" level=6} :level{slug="max2-jp" level=6} :level{slug="party" level=6} :level{slug="ext-us" level=6}|225/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="4th" level=7} :level{slug="konamix" level=7} :level{slug="max2-jp" level=7} :level{slug="party" level=7} :level{slug="ext-us" level=7}|301/0||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{slug="4th" level=6} :level{slug="konamix" level=6}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{slug="4th" level=4} :level{slug="konamix" level=4}|191/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{slug="4th" level=5} :level{slug="konamix" level=5}|225/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{slug="4th" level=8} :level{slug="konamix" level=8}|318/0||
