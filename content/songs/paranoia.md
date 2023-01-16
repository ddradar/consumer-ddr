---
slug: "paranoia"
name: "PARANOiA"
artist: "180"
from: "DanceDanceRevolution"
bpm: 180
series:
  "1st-jp":
    slug: "1st-jp"
    title: "Dance Dance Revolution"
    color: "darkviolet"
  "2nd":
    slug: "2nd"
    title: "Dance Dance Revolution 2nd ReMIX"
    color: "mediumblue"
  "2nd-dc":
    slug: "2nd-dc"
    title: "Dance Dance Revolution 2nd MIX Dreamcast Edition"
    color: "darkorange"
  "3rd":
    slug: "3rd"
    title: "Dance Dance Revolution 3rd MIX"
    color: "crimson"
  "gb":
    slug: "gb"
    title: "Dance Dance Revolution GB"
    color: "tomato"
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
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
  "party":
    slug: "party"
    title: "Dance Dance Revolution Party Collection"
    color: "hotpink"
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
|SINGLE|[BEGINNER (old)]{.tag.is-beginner}|:level{:slug="series['best']" level=1} :level{:slug="series['us']" level=1}|106/0||
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-jp']" level=2} :level{:slug="series['party']" level=2} :level{:slug="series['ext2']" level=2}|138/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['1st-jp']" level=6} :level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6} :level{:slug="series['3rd']" level=6} :level{:slug="series['gb']" level=6} :level{:slug="series['best']" level=6} :level{:slug="series['us']" level=6} :level{:slug="series['konamix']" level=6} :level{:slug="series['ext-jp']" level=6} :level{:slug="series['party']" level=6} :level{:slug="series['ext2']" level=6}|264/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['1st-jp']" level=7} :level{:slug="series['2nd']" level=7} :level{:slug="series['2nd-dc']" level=7} :level{:slug="series['3rd']" level=7} :level{:slug="series['gb']" level=7} :level{:slug="series['best']" level=7} :level{:slug="series['us']" level=7} :level{:slug="series['konamix']" level=7} :level{:slug="series['ext-jp']" level=7} :level{:slug="series['party']" level=7} :level{:slug="series['ext2']" level=7}|275/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['1st-jp']" level=8} :level{:slug="series['2nd']" level=8} :level{:slug="series['2nd-dc']" level=8} :level{:slug="series['3rd']" level=8} :level{:slug="series['gb']" level=8} :level{:slug="series['best']" level=8} :level{:slug="series['us']" level=8} :level{:slug="series['konamix']" level=8} :level{:slug="series['ext-jp']" level=8} :level{:slug="series['party']" level=8} :level{:slug="series['ext2']" level=8}|319/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['1st-jp']" level=7} :level{:slug="series['2nd']" level=7} :level{:slug="series['2nd-dc']" level=7} :level{:slug="series['3rd']" level=7} :level{:slug="series['best']" level=7} :level{:slug="series['us']" level=7} :level{:slug="series['konamix']" level=7} :level{:slug="series['ext-jp']" level=7} :level{:slug="series['party']" level=7} :level{:slug="series['ext2']" level=7}|254/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['1st-jp']" level=8} :level{:slug="series['2nd']" level=8} :level{:slug="series['2nd-dc']" level=8} :level{:slug="series['3rd']" level=8} :level{:slug="series['best']" level=8} :level{:slug="series['us']" level=8} :level{:slug="series['konamix']" level=8} :level{:slug="series['ext-jp']" level=8} :level{:slug="series['party']" level=8} :level{:slug="series['ext2']" level=8}|309/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['best']" level=9} :level{:slug="series['us']" level=9} :level{:slug="series['konamix']" level=9} :level{:slug="series['ext-jp']" level=9} :level{:slug="series['party']" level=9} :level{:slug="series['ext2']" level=9}|382/0||
|COUPLE|[BASIC]{.tag.is-basic}|:level{:slug="series['1st-jp']" level=6} :level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6} :level{:slug="series['gb']" level=6}|228/0||
|COUPLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['1st-jp']" level=7} :level{:slug="series['2nd']" level=7} :level{:slug="series['2nd-dc']" level=7} :level{:slug="series['gb']" level=7}|239/0||
|COUPLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['1st-jp']" level=8} :level{:slug="series['2nd']" level=8} :level{:slug="series['2nd-dc']" level=8} :level{:slug="series['gb']" level=8}|1P:275/0 2P:274/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=6} :level{:slug="series['best']" level=6} :level{:slug="series['us']" level=6}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=7} :level{:slug="series['best']" level=7} :level{:slug="series['us']" level=7}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=8} :level{:slug="series['best']" level=8} :level{:slug="series['us']" level=8}|||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{:slug="series['konamix']" level=7}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{:slug="series['konamix']" level=6}|264/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['konamix']" level=7}|275/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{:slug="series['konamix']" level=8}|319/0||
