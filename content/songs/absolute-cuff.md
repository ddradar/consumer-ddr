---
slug: "absolute-cuff"
name: "ABSOLUTE (Cuff -N- Stuff it Mix)"
artist: "Thuggie D."
from: "DanceDanceRevolution ULTRAMIX"
bpm: 144
series:
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext2']" level=1}|112/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=3} :level{:slug="series['ext2']" level=3}|132/25||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=6} :level{:slug="series['ext2']" level=6}|236/39||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=6} :level{:slug="series['ext2']" level=6}|281/40||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=4} :level{:slug="series['ext2']" level=4}|133/25||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=7} :level{:slug="series['ext2']" level=7}|236/39||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=7} :level{:slug="series['ext2']" level=7}|280/43||
