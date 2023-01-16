---
slug: "colors"
name: "Colors (for EXTREME)"
artist: "dj TAKA"
from: "DanceDanceRevolution EXTREME"
bpm: 150
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-jp']" level=1} :level{:slug="series['ext2']" level=1}|118/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-jp']" level=3} :level{:slug="series['ext2']" level=3}|181/12||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-jp']" level=5} :level{:slug="series['ext2']" level=5}|268/9||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-jp']" level=7} :level{:slug="series['ext2']" level=7}|310/9||
|SINGLE|[CHALLENGE]{.tag.is-challenge}|:level{:slug="series['ext-jp']" level=9} :level{:slug="series['ext2']" level=9}|430/7||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-jp']" level=3} :level{:slug="series['ext2']" level=3}|172/6||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-jp']" level=5} :level{:slug="series['ext2']" level=5}|265/5||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-jp']" level=7} :level{:slug="series['ext2']" level=7}|322/9||
|DOUBLE|[CHALLENGE]{.tag.is-challenge}|:level{:slug="series['ext-jp']" level=9} :level{:slug="series['ext2']" level=9}|400/7||
