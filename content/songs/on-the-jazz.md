---
slug: "on-the-jazz"
name: "ON THE JAZZ"
artist: "Jonny Dynamite!"
from: "DanceDanceRevolution 5thMIX CS"
bpm: 130
series:
  "5th":
    slug: "5th"
    title: "Dance Dance Revolution 5thMIX"
    color: "orange"
  "konamix":
    slug: "konamix"
    title: "Dance Dance Revolution KONAMIX"
    color: "orange"
  "max-jp":
    slug: "max-jp"
    title: "DDRMAX -DanceDanceRevolution 6thMIX-"
    color: "blue"
  "ext-us":
    slug: "ext-us"
    title: "Dance Dance Revolution EXTREME"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-us']" level=1}|57/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['5th']" level=2} :level{:slug="series['konamix']" level=2} :level{:slug="series['max-jp']" level="?"} :level{:slug="series['ext-us']" level=2}|108/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['5th']" level=4} :level{:slug="series['konamix']" level=4} :level{:slug="series['max-jp']" level="?"} :level{:slug="series['ext-us']" level=4}|220/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['5th']" level=7} :level{:slug="series['konamix']" level=7} :level{:slug="series['max-jp']" level="?"} :level{:slug="series['ext-us']" level=7}|331/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['5th']" level=3} :level{:slug="series['konamix']" level=3} :level{:slug="series['max-jp']" level="?"} :level{:slug="series['ext-us']" level=3}|121/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['5th']" level=5} :level{:slug="series['konamix']" level=5} :level{:slug="series['max-jp']" level="?"} :level{:slug="series['ext-us']" level=5}|220/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['5th']" level=7} :level{:slug="series['konamix']" level=7} :level{:slug="series['max-jp']" level="?"} :level{:slug="series['ext-us']" level=7}|329/0||

## メモ

- [Dance Dance Revolution KONAMIX](/series/konamix)において、下記譜面は別の譜面で代用されている。
  - 6-PANELSの各譜面 → SINGLEの各譜面
  - BATTLE譜面 → [SINGLE/BASIC]{.tag.is-basic}譜面(=すべて1P/2Pが両方踏む緑色の矢印)
