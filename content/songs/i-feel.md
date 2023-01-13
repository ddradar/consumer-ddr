---
slug: "i-feel"
name: "i feel..."
artist: "AKIRA YAMAOKA"
from: "beatmania IIDX 7th style / DDRMAX2 -DanceDanceRevolution 7thMIX-"
bpm: 141
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1} :level{:slug="series['ext-us']" level=1}|92/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-jp']" level=3} :level{:slug="series['max2-us']" level=3} :level{:slug="series['ext-us']" level=3}|132/4||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-jp']" level=6} :level{:slug="series['max2-us']" level=6} :level{:slug="series['ext-us']" level=6}|202/30||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=9} :level{:slug="series['max2-us']" level=9} :level{:slug="series['ext-us']" level=9}|331/2||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-jp']" level=2} :level{:slug="series['max2-us']" level=2} :level{:slug="series['ext-us']" level=2}|84/20||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-jp']" level=5} :level{:slug="series['max2-us']" level=5} :level{:slug="series['ext-us']" level=5}|196/6||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=9} :level{:slug="series['max2-us']" level=9} :level{:slug="series['ext-us']" level=9}|329/3||
