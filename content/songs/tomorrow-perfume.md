---
slug: "tomorrow-perfume"
name: "Tomorrow Perfume"
artist: "dj TAKA"
from: "beatmania IIDX 7th style"
bpm: 144
series:
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1} :level{:slug="series['ext-jp']" level=1}|92/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-us']" level=3} :level{:slug="series['ext-jp']" level=3}|126/15||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-us']" level=5} :level{:slug="series['ext-jp']" level=5}|201/18||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-us']" level=7} :level{:slug="series['ext-jp']" level=7}|258/33||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-us']" level=3} :level{:slug="series['ext-jp']" level=3}|118/12||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-us']" level=6} :level{:slug="series['ext-jp']" level=6}|195/8||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-us']" level=7} :level{:slug="series['ext-jp']" level=7}|228/12||
