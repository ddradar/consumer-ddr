---
slug: "do-it-right"
name: "Do It Right"
artist: "SOTA feat. Ebony Fay"
from: "DanceDanceRevolution 5thMIX CS"
bpm: 135
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
  "max2-us":
    slug: "max2-us"
    title: "DDRMAX2 Dance Dance Revolution"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="max2-us" level=1}|92/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="5th" level=4} :level{slug="konamix" level=4} :level{slug="max-jp" level="?"} :level{slug="max2-us" level=4}|154/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="5th" level=5} :level{slug="konamix" level=5} :level{slug="max-jp" level="?"} :level{slug="max2-us" level=5}|200/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="5th" level=7} :level{slug="konamix" level=7} :level{slug="max-jp" level="?"} :level{slug="max2-us" level=7}|285/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="5th" level=4} :level{slug="konamix" level=4} :level{slug="max-jp" level="?"} :level{slug="max2-us" level=4}|159/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="5th" level=5} :level{slug="konamix" level=5} :level{slug="max-jp" level="?"} :level{slug="max2-us" level=5}|202/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="5th" level=8} :level{slug="konamix" level=8} :level{slug="max-jp" level="?"} :level{slug="max2-us" level=8}|284/0||

## メモ

- [Dance Dance Revolution KONAMIX](/series/konamix)において、下記譜面は別の譜面で代用されている。
  - 6-PANELSの各譜面 → SINGLEの各譜面
  - BATTLE譜面 → [SINGLE/BASIC]{.tag.is-basic}譜面(=すべて1P/2Pが両方踏む緑色の矢印)
