---
slug: "sweet-sweet-love-magic"
name: "Sweet Sweet ♥ Magic"
artist: "jun"
from: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
bpm: 180
series:
  "max2-jp":
    slug: "max2-jp"
    title: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
    color: "black"
  "party":
    slug: "party"
    title: "Dance Dance Revolution Party Collection"
    color: "hotpink"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['party']" level=2} :level{:slug="series['ext2']" level=2}|128/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-jp']" level=3} :level{:slug="series['party']" level=3} :level{:slug="series['ext2']" level=3}|139/2||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-jp']" level=6} :level{:slug="series['party']" level=6} :level{:slug="series['ext2']" level=6}|276/19||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=9} :level{:slug="series['party']" level=9} :level{:slug="series['ext2']" level=9}|372/33||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-jp']" level=3} :level{:slug="series['party']" level=3} :level{:slug="series['ext2']" level=3}|131/3||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-jp']" level=6} :level{:slug="series['party']" level=6} :level{:slug="series['ext2']" level=6}|235/2||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=9} :level{:slug="series['party']" level=9} :level{:slug="series['ext2']" level=9}|330/3||
