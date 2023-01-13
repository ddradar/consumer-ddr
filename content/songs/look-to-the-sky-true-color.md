---
slug: "look-to-the-sky-true-color"
name: "Look To The Sky (True Color Mix)"
artist: "System S.F. feat. Anna"
from: "DDRMAX -DanceDanceRevolution-"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext2']" level=1}|96/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-us']" level=4} :level{:slug="series['max2-jp']" level=4} :level{:slug="series['ext2']" level=4}|154/23||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-us']" level=5} :level{:slug="series['max2-jp']" level=6} :level{:slug="series['ext2']" level=6}|213/16||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-us']" level=7} :level{:slug="series['max2-jp']" level=7} :level{:slug="series['ext2']" level=7}|218/31||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-us']" level=3} :level{:slug="series['max2-jp']" level=3} :level{:slug="series['ext2']" level=3}|140/8||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-us']" level=5} :level{:slug="series['max2-jp']" level=5} :level{:slug="series['ext2']" level=5}|187/22||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-us']" level=7} :level{:slug="series['max2-jp']" level=7} :level{:slug="series['ext2']" level=7}|238/10||
