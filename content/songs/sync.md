---
slug: "sync"
name: "sync (EXTREME version)"
artist: "OutPhase"
from: "DanceDanceRevolution EXTREME"
bpm: 167
series:
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-jp']" level=1} :level{:slug="series['ext2']" level=1}|94/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-jp']" level=4} :level{:slug="series['ext2']" level=4}|180/10||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-jp']" level=7} :level{:slug="series['ext2']" level=7}|257/11||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-jp']" level=8} :level{:slug="series['ext2']" level=8}|304/7||
|SINGLE|[CHALLENGE]{.tag.is-challenge}|:level{:slug="series['ext-jp']" level=9} :level{:slug="series['ext2']" level=9}|328/8||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-jp']" level=3} :level{:slug="series['ext2']" level=3}|190/18||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-jp']" level=7} :level{:slug="series['ext2']" level=7}|255/7||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-jp']" level=8} :level{:slug="series['ext2']" level=8}|283/17||
|DOUBLE|[CHALLENGE]{.tag.is-challenge}|:level{:slug="series['ext-jp']" level=9} :level{:slug="series['ext2']" level=9}|313/8||
