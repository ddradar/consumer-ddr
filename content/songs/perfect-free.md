---
slug: "perfect-free"
name: "PERFECT FREE"
artist: "nite system"
from: "beatmania IIDX"
bpm: 130
series:
  "club-1":
    slug: "club-1"
    title: "Dance Dance Revolution 2nd ReMIX APPEND CLUB VERSION vol.1"
    color: "deepskyblue"
  "club-dc":
    slug: "club-dc"
    title: "Dance Dance Revolution CLUB VERSION Dreamcast Edition"
    color: "royalblue"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['club-1']" level=5} :level{:slug="series['club-dc']" level=5} :level{:slug="series['konamix']" level=5}|149/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['club-1']" level=6} :level{:slug="series['club-dc']" level=6} :level{:slug="series['konamix']" level=6}|203/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['club-1']" level=7} :level{:slug="series['club-dc']" level=7} :level{:slug="series['konamix']" level=7}|212/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['club-1']" level=6} :level{:slug="series['club-dc']" level=6} :level{:slug="series['konamix']" level=6}|208/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['club-1']" level=7} :level{:slug="series['club-dc']" level=7} :level{:slug="series['konamix']" level=7}|209/0||

## メモ

- [Dance Dance Revolution KONAMIX](/series/konamix)において、下記譜面は別の譜面で代用されている。
  - 6-PANELSの各譜面 → SINGLEの各譜面
  - [DOUBLE/EXPERT]{.tag.is-expert}譜面 → [DOUBLE/DIFFICULT]{.tag.is-difficult}譜面
  - BATTLE譜面 → [SINGLE/BASIC]{.tag.is-basic}譜面(=すべて1P/2Pが両方踏む緑色の矢印)
