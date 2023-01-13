---
slug: "get-it-all"
name: "GET IT ALL"
artist: "BRASS TRICKS"
from: "Dance Maniax"
bpm: 140
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=4}|181/14||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=7}|257/24||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=8}|303/31||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=4}|184/19||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=5}|245/14||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=8}|307/18||
