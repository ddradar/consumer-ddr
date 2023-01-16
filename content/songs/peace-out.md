---
slug: "peace-out"
name: "PEACE-OUT"
artist: "dj nagureo"
from: "beatmania 4thMIX -the beat goes on-"
bpm: 133
series:
  "max-us":
    slug: "max-us"
    title: "DDRMAX Dance Dance Revolution"
    color: "darkorchid"
  "max2-jp":
    slug: "max2-jp"
    title: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
    color: "black"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-us']" level=1}|57/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-us']" level=2} :level{:slug="series['max2-jp']" level=2} :level{:slug="series['ext-us']" level=2}|57/4||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-us']" level=4} :level{:slug="series['max2-jp']" level=4} :level{:slug="series['ext-us']" level=4}|115/8||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-us']" level=7} :level{:slug="series['max2-jp']" level=7} :level{:slug="series['ext-us']" level=7}|170/27||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-us']" level=3} :level{:slug="series['max2-jp']" level=3} :level{:slug="series['ext-us']" level=3}|79/17||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-us']" level=5} :level{:slug="series['max2-jp']" level=5} :level{:slug="series['ext-us']" level=5}|107/7||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-us']" level=7} :level{:slug="series['max2-jp']" level=7} :level{:slug="series['ext-us']" level=7}|164/11||
