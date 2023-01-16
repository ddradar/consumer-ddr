---
slug: "bad-routine"
name: "Bad Routine"
artist: "D.J. Spugna"
from: "beatmania IIDX 7th style"
bpm: 130
series:
  "max2-us":
    slug: "max2-us"
    title: "DDRMAX2 Dance Dance Revolution"
    color: "orange"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1} :level{:slug="series['ext-jp']" level=1} :level{:slug="series['ext-us']" level=1}|103/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-us']" level=4} :level{:slug="series['ext-jp']" level=4} :level{:slug="series['ext-us']" level=4}|127/4||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-us']" level=5} :level{:slug="series['ext-jp']" level=5} :level{:slug="series['ext-us']" level=5}|189/7||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-us']" level=6} :level{:slug="series['ext-jp']" level=6} :level{:slug="series['ext-us']" level=6}|207/30||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-us']" level=3} :level{:slug="series['ext-jp']" level=3} :level{:slug="series['ext-us']" level=3}|117/7||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-us']" level=6} :level{:slug="series['ext-jp']" level=6} :level{:slug="series['ext-us']" level=6}|187/4||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-us']" level=7} :level{:slug="series['ext-jp']" level=7} :level{:slug="series['ext-us']" level=7}|226/12||
