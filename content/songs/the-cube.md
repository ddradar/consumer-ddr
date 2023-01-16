---
slug: "the-cube"
name: "THE CUBE"
artist: "DJ SUWAMI"
from: "beatmania IIDX 5th style"
bpm: 178
series:
  "5th":
    slug: "5th"
    title: "Dance Dance Revolution 5thMIX"
    color: "orange"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['5th']" level=4} :level{:slug="series['max-us']" level=4}|135/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['5th']" level=6} :level{:slug="series['max-us']" level=6}|215/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['5th']" level=7} :level{:slug="series['max-us']" level=7}|282/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['5th']" level=4} :level{:slug="series['max-us']" level=4}|152/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['5th']" level=6} :level{:slug="series['max-us']" level=6}|236/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['5th']" level=7} :level{:slug="series['max-us']" level=7}|323/0||
