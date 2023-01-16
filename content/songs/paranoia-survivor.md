---
slug: "paranoia-survivor"
name: "PARANOIA survivor"
artist: "270"
from: "DanceDanceRevolution EXTREME"
bpm: "135-270"
series:
  "max2-jp":
    slug: "max2-jp"
    title: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
    color: "black"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-jp']" level=3} :level{:slug="series['ext2']" level=3}|103/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-jp']" level=5} :level{:slug="series['ext-jp']" level=5} :level{:slug="series['ext2']" level=5}|233/2||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-jp']" level=8} :level{:slug="series['ext-jp']" level=8} :level{:slug="series['ext2']" level=8}|340/2||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=10} :level{:slug="series['ext-jp']" level=10} :level{:slug="series['ext2']" level="10+"}|509/4||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-jp']" level=6} :level{:slug="series['ext-jp']" level=6} :level{:slug="series['ext2']" level=6}|233/2||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-jp']" level=8} :level{:slug="series['ext-jp']" level=8} :level{:slug="series['ext2']" level=8}|338/3||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=10} :level{:slug="series['ext-jp']" level=10} :level{:slug="series['ext2']" level="10+"}|475/2||
