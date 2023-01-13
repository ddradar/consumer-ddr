---
slug: "dxy"
name: "DXY!"
artist: "TaQ"
from: "beatmania IIDX 4th style"
bpm: 148
series:
  "5th":
    slug: "5th"
    title: "Dance Dance Revolution 5thMIX"
    color: "orange"
  "konamix":
    slug: "konamix"
    title: "Dance Dance Revolution KONAMIX"
    color: "orange"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['5th']" level=4} :level{:slug="series['konamix']" level=4}|108/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['5th']" level=6} :level{:slug="series['konamix']" level=6}|157/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['5th']" level=8} :level{:slug="series['konamix']" level=8}|269/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['5th']" level=4} :level{:slug="series['konamix']" level=4}|355/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['5th']" level=6} :level{:slug="series['konamix']" level=6}|205/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['5th']" level=8} :level{:slug="series['konamix']" level=8}|334/0||

## メモ

- [Dance Dance Revolution KONAMIX](/series/konamix)において、下記譜面は別の譜面で代用されている。
  - 6-PANELSの各譜面 → SINGLEの各譜面
  - BATTLE譜面 → [SINGLE/BASIC]{.tag.is-basic}譜面(=すべて1P/2Pが両方踏む緑色の矢印)
