---
slug: "sakura"
name: "桜"
artist: "RevenG"
from: "beatmania IIDX 8th style"
bpm: "14-320"
series:
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-jp']" level=3} :level{:slug="series['festival']" level=3} :level{:slug="series['ext2']" level=3}|160/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-jp']" level=5} :level{:slug="series['festival']" level=5} :level{:slug="series['ext2']" level=5}|228/7||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-jp']" level=8} :level{:slug="series['festival']" level=8} :level{:slug="series['ext2']" level=8}|345/3||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-jp']" level=10} :level{:slug="series['festival']" level="10+"} :level{:slug="series['ext2']" level=10}|446/1||
|SINGLE|[CHALLENGE]{.tag.is-challenge}|:level{:slug="series['ext-jp']" level=9} :level{:slug="series['festival']" level=9} :level{:slug="series['ext2']" level=9}|356/1||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-jp']" level=6} :level{:slug="series['festival']" level=6} :level{:slug="series['ext2']" level=6}|226/9||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-jp']" level=8} :level{:slug="series['festival']" level=8} :level{:slug="series['ext2']" level=8}|317/6||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-jp']" level=10} :level{:slug="series['festival']" level="10+"} :level{:slug="series['ext2']" level=10}|438/1||
|DOUBLE|[CHALLENGE]{.tag.is-challenge}|:level{:slug="series['ext-jp']" level=9} :level{:slug="series['festival']" level=9} :level{:slug="series['ext2']" level=9}|352/1||
