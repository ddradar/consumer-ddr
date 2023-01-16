---
slug: "healing-vision"
name: "Healing Vision"
artist: "DE-SIRE"
from: "DanceDanceRevolution 5thMIX"
bpm: "49-196"
series:
  "5th":
    slug: "5th"
    title: "Dance Dance Revolution 5thMIX"
    color: "orange"
  "konamix":
    slug: "konamix"
    title: "Dance Dance Revolution KONAMIX"
    color: "orange"
  "max-us":
    slug: "max-us"
    title: "DDRMAX Dance Dance Revolution"
    color: "darkorchid"
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-jp']" level=2}|107/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['5th']" level=3} :level{:slug="series['konamix']" level=3} :level{:slug="series['max-us']" level=3} :level{:slug="series['ext-jp']" level=3}|128/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['5th']" level=6} :level{:slug="series['konamix']" level=6} :level{:slug="series['max-us']" level=6} :level{:slug="series['ext-jp']" level=6}|272/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['5th']" level=8} :level{:slug="series['konamix']" level=8} :level{:slug="series['max-us']" level=8} :level{:slug="series['ext-jp']" level=8}|353/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['5th']" level=3} :level{:slug="series['konamix']" level=3} :level{:slug="series['max-us']" level=3} :level{:slug="series['ext-jp']" level=3}|136/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['5th']" level=6} :level{:slug="series['konamix']" level=6} :level{:slug="series['max-us']" level=6} :level{:slug="series['ext-jp']" level=6}|275/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['5th']" level=9} :level{:slug="series['konamix']" level=9} :level{:slug="series['max-us']" level=9} :level{:slug="series['ext-jp']" level=9}|358/0||

## メモ

- [Dance Dance Revolution KONAMIX](/series/konamix)において、下記譜面は別の譜面で代用されている。
  - 6-PANELSの各譜面 → SINGLEの各譜面
  - BATTLE譜面 → [SINGLE/BASIC]{.tag.is-basic}譜面(=すべて1P/2Pが両方踏む緑色の矢印)
