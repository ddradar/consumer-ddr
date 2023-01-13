---
slug: "candy-heart"
name: "CANDY♥"
artist: "小坂りゆ"
from: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
bpm: 180
series:
  "max2-jp":
    slug: "max2-jp"
    title: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
    color: "black"
  "festival":
    slug: "festival"
    title: "DDR FESTIVAL Dance Dance Revolution"
    color: "seagreen"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['festival']" level=2} :level{:slug="series['ext2']" level=2}|139/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-jp']" level=3} :level{:slug="series['festival']" level=3} :level{:slug="series['ext2']" level=3}|126/4||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-jp']" level=5} :level{:slug="series['festival']" level=5} :level{:slug="series['ext2']" level=5}|230/16||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=7} :level{:slug="series['festival']" level=7} :level{:slug="series['ext2']" level=7}|317/20||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-jp']" level=3} :level{:slug="series['festival']" level=3} :level{:slug="series['ext2']" level=3}|127/12||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-jp']" level=5} :level{:slug="series['festival']" level=5} :level{:slug="series['ext2']" level=5}|211/27||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=7} :level{:slug="series['festival']" level=7} :level{:slug="series['ext2']" level=7}|287/8||
