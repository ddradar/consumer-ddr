---
slug: "quickening"
name: "Quickening"
artist: "dj TAKA"
from: "Dance Maniax 2ndMIX"
bpm: 150
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext2']" level=1}|0/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=3} :level{:slug="series['ext2']" level=3}|0/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=5} :level{:slug="series['ext2']" level=5}|0/0||
|SINGLE|[EXPERT (Old)]{.tag.is-expert}|:level{:slug="series['ext2']" level=6}|0/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=8} :level{:slug="series['ext2']" level=8}|0/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=3} :level{:slug="series['ext2']" level=3}|0/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=5} :level{:slug="series['ext2']" level=5}|0/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=7} :level{:slug="series['ext2']" level=7}|0/0||

## メモ

- [Dance Dance Revolution EXTREME 2](/series/ext)の[SINGLE/CHALLENGE]{.tag.is-expert}譜面は後のシリーズで登場した[SINGLE/EXPERT]{.tag.is-challenge}と同一。
  - 譜面一覧では[SINGLE/EXPERT]{.tag.is-challenge}に掲載。
