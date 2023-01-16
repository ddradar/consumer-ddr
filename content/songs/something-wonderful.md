---
slug: "something-wonderful"
name: "SOMETHING WONDERFUL"
artist: "L.E.D."
from: "beatmania IIDX 5th style -new songs collection-"
bpm: 150
series:
  "festival":
    slug: "festival"
    title: "DDR FESTIVAL Dance Dance Revolution"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=3}|195/86||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=5}|276/98||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=8}|422/44||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=4}|195/86||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=5}|276/82||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=8}|354/137||
