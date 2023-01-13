---
slug: "look-to-the-sky"
name: "Look To The Sky"
artist: "System S.F. feat. ANNA"
from: "DanceDanceRevolution 5thMIX CS"
bpm: 140
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
  "max-us":
    slug: "max-us"
    title: "DDRMAX Dance Dance Revolution"
    color: "darkorchid"
  "party":
    slug: "party"
    title: "Dance Dance Revolution Party Collection"
    color: "hotpink"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="party" level=1}|100/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="5th" level=3} :level{slug="konamix" level=3} :level{slug="max-jp" level="?"} :level{slug="max-us" level=3} :level{slug="party" level=3}|153/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="5th" level=4} :level{slug="konamix" level=4} :level{slug="max-jp" level="?"} :level{slug="max-us" level=4} :level{slug="party" level=5}|195/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="5th" level=6} :level{slug="konamix" level=6} :level{slug="max-jp" level="?"} :level{slug="max-us" level=6} :level{slug="party" level=7}|287/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="5th" level=2} :level{slug="konamix" level=2} :level{slug="max-jp" level="?"} :level{slug="max-us" level=2} :level{slug="party" level=2}|136/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="5th" level=5} :level{slug="konamix" level=5} :level{slug="max-jp" level="?"} :level{slug="max-us" level=5} :level{slug="party" level=5}|194/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="5th" level=7} :level{slug="konamix" level=7} :level{slug="max-jp" level="?"} :level{slug="max-us" level=7} :level{slug="party" level=7}|278/0||

## メモ

- [Dance Dance Revolution KONAMIX](/series/konamix)において、下記譜面は別の譜面で代用されている。
  - 6-PANELSの各譜面 → SINGLEの各譜面
  - BATTLE譜面 → [SINGLE/BASIC]{.tag.is-basic}譜面(=すべて1P/2Pが両方踏む緑色の矢印)
