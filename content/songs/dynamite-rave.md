---
slug: "dynamite-rave"
name: "DYNAMITE RAVE"
artist: "NAOKI"
from: "DanceDanceRevolution 3rdMIX"
bpm: 150
series:
  "2nd-dc":
    slug: "2nd-dc"
    title: "Dance Dance Revolution 2nd MIX Dreamcast Edition"
    color: "darkorange"
  "3rd":
    slug: "3rd"
    title: "Dance Dance Revolution 3rd MIX"
    color: "crimson"
  "best":
    slug: "best"
    title: "Dance Dance Revolution BEST HITS"
    color: "goldenrod"
  "us":
    slug: "us"
    title: "Dance Dance Revolution"
    color: "mediumvioletred"
  "konamix":
    slug: "konamix"
    title: "Dance Dance Revolution KONAMIX"
    color: "orange"
  "max2-jp":
    slug: "max2-jp"
    title: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
    color: "black"
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="best" level=1} :level{slug="us" level=1} :level{slug="ext-jp" level=1} :level{slug="ext2" level=1}|110/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="2nd-dc" level=5} :level{slug="3rd" level=5} :level{slug="best" level=5} :level{slug="us" level=5} :level{slug="konamix" level=5} :level{slug="max2-jp" level=5} :level{slug="ext-jp" level=5} :level{slug="ext2" level=5}|188/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="2nd-dc" level=7} :level{slug="3rd" level=7} :level{slug="best" level=7} :level{slug="us" level=7} :level{slug="konamix" level=7} :level{slug="max2-jp" level=7} :level{slug="ext-jp" level=7} :level{slug="ext2" level=7}|269/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="2nd-dc" level=9} :level{slug="3rd" level=9} :level{slug="best" level=9} :level{slug="us" level=9} :level{slug="konamix" level=9} :level{slug="max2-jp" level=9} :level{slug="ext-jp" level=9} :level{slug="ext2" level=9}|398/0||
|SINGLE|[CHALLENGE]{.tag.is-challenge}|:level{slug="ext-jp" level=9} :level{slug="ext2" level=9}|362/6||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="2nd-dc" level=5} :level{slug="3rd" level=5} :level{slug="best" level=5} :level{slug="us" level=5} :level{slug="konamix" level=5} :level{slug="max2-jp" level=5} :level{slug="ext-jp" level=5} :level{slug="ext2" level=5}|217/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="2nd-dc" level=6} :level{slug="3rd" level=6} :level{slug="best" level=6} :level{slug="us" level=6} :level{slug="konamix" level=6} :level{slug="max2-jp" level=6} :level{slug="ext-jp" level=6} :level{slug="ext2" level=6}|250/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="2nd-dc" level=8} :level{slug="3rd" level=8} :level{slug="best" level=8} :level{slug="us" level=8} :level{slug="konamix" level=8} :level{slug="max2-jp" level=8} :level{slug="ext-jp" level=8} :level{slug="ext2" level=8}|331/0||
|DOUBLE|[CHALLENGE]{.tag.is-challenge}|:level{slug="ext-jp" level=8} :level{slug="ext2" level=8}|327/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{slug="3rd" level=5} :level{slug="best" level=5} :level{slug="us" level=5}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{slug="3rd" level=7} :level{slug="best" level=7} :level{slug="us" level=7}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{slug="3rd" level=9} :level{slug="best" level=9} :level{slug="us" level=9}|||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{slug="konamix" level=6}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{slug="konamix" level=4}|188/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{slug="konamix" level=7}|262/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{slug="konamix" level=9}|395/0||
