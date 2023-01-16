---
slug: "keep-on-movin-dmx"
name: "KEEP ON MOVIN' (DMX Mix)"
artist: "N.M.R.-typeG"
from: "Dance Maniax"
bpm: 132
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
|SINGLE|[BEGINNER (Old)]{.tag.is-beginner}|:level{:slug="series['ext2']" level=1}|85/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=3} :level{:slug="series['ext2']" level=3}|134/12||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=5} :level{:slug="series['ext2']" level=5}|187/13||
|SINGLE|[EXPERT (Old)]{.tag.is-expert}|:level{:slug="series['ext2']" level=7}|231/12||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=8} :level{:slug="series['ext2']" level=8}|307/31||
|DOUBLE|[BASIC (Old)]{.tag.is-basic}|:level{:slug="series['festival']" level=4} :level{:slug="series['ext2']" level=4}|133/8||
|DOUBLE|[DIFFICULT (Old)]{.tag.is-difficult}|:level{:slug="series['festival']" level=5} :level{:slug="series['ext2']" level=5}|171/16||
|DOUBLE|[EXPERT (Old)]{.tag.is-expert}|:level{:slug="series['festival']" level=7} :level{:slug="series['ext2']" level=7}|206/15||

## メモ

- [Dance Dance Revolution EXTREME 2](/series/ext)の[SINGLE/CHALLENGE]{.tag.is-expert}譜面は後のシリーズで登場した[SINGLE/EXPERT]{.tag.is-challenge}と同一。
  - 譜面一覧では[SINGLE/EXPERT]{.tag.is-challenge}に掲載。
