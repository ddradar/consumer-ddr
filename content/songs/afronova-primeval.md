---
slug: "afronova-primeval"
name: "AFRONOVA PRIMEVAL"
artist: "8 bit"
from: "Dance Maniax"
bpm: 200
series:
  "extra":
    slug: "extra"
    title: "Dance Dance Revolution EXTRA MIX"
    color: "deeppink"
  "5th":
    slug: "5th"
    title: "Dance Dance Revolution 5thMIX"
    color: "orange"
  "konamix":
    slug: "konamix"
    title: "Dance Dance Revolution KONAMIX"
    color: "orange"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext2']" level=2}|158/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=4} :level{:slug="series['5th']" level=4} :level{:slug="series['konamix']" level=4} :level{:slug="series['ext2']" level=4}|272/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=6} :level{:slug="series['5th']" level=6} :level{:slug="series['konamix']" level=6} :level{:slug="series['ext2']" level=6}|322/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=9} :level{:slug="series['5th']" level=9} :level{:slug="series['konamix']" level=9} :level{:slug="series['ext2']" level=9}|423/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=4} :level{:slug="series['5th']" level=4} :level{:slug="series['konamix']" level=4} :level{:slug="series['ext2']" level=4}|287/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=6} :level{:slug="series['5th']" level=6} :level{:slug="series['konamix']" level=6} :level{:slug="series['ext2']" level=6}|332/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=9} :level{:slug="series['5th']" level=9} :level{:slug="series['konamix']" level=9} :level{:slug="series['ext2']" level=9}|437/0||

## メモ

- [Dance Dance Revolution EXTRA MIX](/series/extra), [Dance Dance Revolution KONAMIX](/series/konamix)において、下記譜面は別の譜面で代用されている。
  - 6-PANELSの各譜面 → SINGLEの各譜面
  - BATTLE譜面 → [SINGLE/BASIC]{.tag.is-basic}譜面(=すべて1P/2Pが両方踏む緑色の矢印)
