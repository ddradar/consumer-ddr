---
slug: "dive"
name: "DIVE"
artist: "Be For U"
from: "DanceDanceRevolution 5thMIX"
bpm: 
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="festival" level=1} :level{slug="ext2" level=1}|122/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="extra" level=4} :level{slug="5th" level=4} :level{slug="konamix" level=4} :level{slug="festival" level=4} :level{slug="ext2" level=4}|204/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="extra" level=5} :level{slug="5th" level=5} :level{slug="konamix" level=5} :level{slug="festival" level=5} :level{slug="ext2" level=5}|272/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="extra" level=8} :level{slug="5th" level=8} :level{slug="konamix" level=8} :level{slug="festival" level=8} :level{slug="ext2" level=8}|354/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="extra" level=4} :level{slug="5th" level=4} :level{slug="konamix" level=4} :level{slug="festival" level=4} :level{slug="ext2" level=4}|191/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="extra" level=6} :level{slug="5th" level=6} :level{slug="konamix" level=6} :level{slug="festival" level=6} :level{slug="ext2" level=6}|268/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="extra" level=7} :level{slug="5th" level=7} :level{slug="konamix" level=7} :level{slug="festival" level=7} :level{slug="ext2" level=7}|322/0||

## メモ

- [Dance Dance Revolution EXTRA MIX](/series/extra), [Dance Dance Revolution KONAMIX](/series/konamix)において、下記譜面は別の譜面で代用されている。
  - 6-PANELSの各譜面 → SINGLEの各譜面
  - BATTLE譜面 → [SINGLE/BASIC]{.tag.is-basic}譜面(=すべて1P/2Pが両方踏む緑色の矢印)
