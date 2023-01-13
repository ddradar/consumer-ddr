---
slug: "absolute"
name: "ABSOLUTE"
artist: "dj TAKA"
from: "beatmania IIDX 4th style"
bpm: 144
series:
  "5th":
    slug: "5th"
    title: "Dance Dance Revolution 5thMIX"
    color: "orange"
  "konamix":
    slug: "konamix"
    title: "Dance Dance Revolution KONAMIX"
    color: "orange"
  "party":
    slug: "party"
    title: "Dance Dance Revolution Party Collection"
    color: "hotpink"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="party" level=1} :level{slug="ext-us" level=1}|123/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="5th" level=3} :level{slug="konamix" level=3} :level{slug="party" level=3} :level{slug="ext-us" level=3}|142/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="5th" level=5} :level{slug="konamix" level=5} :level{slug="party" level=5} :level{slug="ext-us" level=5}|252/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="5th" level=8} :level{slug="konamix" level=8} :level{slug="party" level=8} :level{slug="ext-us" level=8}|311/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="5th" level=3} :level{slug="konamix" level=3} :level{slug="party" level=3} :level{slug="ext-us" level=3}|135/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="5th" level=5} :level{slug="konamix" level=5} :level{slug="party" level=5} :level{slug="ext-us" level=5}|215/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="5th" level=8} :level{slug="konamix" level=8} :level{slug="party" level=8} :level{slug="ext-us" level=8}|303/0||

## メモ

- [Dance Dance Revolution KONAMIX](/series/konamix)において、下記譜面は別の譜面で代用されている。
  - 6-PANELSの各譜面 → SINGLEの各譜面
  - BATTLE譜面 → [SINGLE/BASIC]{.tag.is-basic}譜面(=すべて1P/2Pが両方踏む緑色の矢印)
