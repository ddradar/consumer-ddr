---
slug: "im-for-real"
name: "I'M FOR REAL"
artist: "SLAKE"
from: "beatmania IIDX 4th style"
bpm: 140
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-us']" level=1}|91/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-us']" level=3} :level{:slug="series['max2-jp']" level=3} :level{:slug="series['ext-us']" level=3}|153/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-us']" level=5} :level{:slug="series['max2-jp']" level=5} :level{:slug="series['ext-us']" level=5}|202/47||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-us']" level=7} :level{:slug="series['max2-jp']" level=7} :level{:slug="series['ext-us']" level=7}|238/40||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-us']" level=3} :level{:slug="series['max2-jp']" level=3} :level{:slug="series['ext-us']" level=3}|121/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-us']" level=4} :level{:slug="series['max2-jp']" level=4} :level{:slug="series['ext-us']" level=4}|183/11||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-us']" level=6} :level{:slug="series['max2-jp']" level=6} :level{:slug="series['ext-us']" level=6}|204/16||
