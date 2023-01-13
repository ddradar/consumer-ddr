---
slug: "drop-the-bomb"
name: "DROP THE BOMB"
artist: "Scotty D."
from: "DanceDanceRevolution 3rdMIX CS"
bpm: 150
series:
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
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
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
|SINGLE|[BEGINNER (best)]{.tag.is-beginner}|:level{:slug="series['best']" level=1}|83/0||
|SINGLE|[BEGINNER (us)]{.tag.is-beginner}|:level{:slug="series['us']" level=1}|84/0||
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-jp']" level=1} :level{:slug="series['party']" level=1} :level{:slug="series['ext-us']" level=1}|122/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=4} :level{:slug="series['best']" level=4} :level{:slug="series['us']" level=4} :level{:slug="series['konamix']" level=4} :level{:slug="series['ext-jp']" level=4} :level{:slug="series['party']" level=4} :level{:slug="series['ext-us']" level=4}|199/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=5} :level{:slug="series['best']" level=5} :level{:slug="series['us']" level=5} :level{:slug="series['konamix']" level=5} :level{:slug="series['ext-jp']" level=5} :level{:slug="series['party']" level=5} :level{:slug="series['ext-us']" level=5}|238/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=6} :level{:slug="series['best']" level=6} :level{:slug="series['us']" level=6} :level{:slug="series['konamix']" level=6} :level{:slug="series['ext-jp']" level=6} :level{:slug="series['party']" level=6} :level{:slug="series['ext-us']" level=6}|304/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=4} :level{:slug="series['best']" level=4} :level{:slug="series['us']" level=4} :level{:slug="series['konamix']" level=4} :level{:slug="series['ext-jp']" level=4} :level{:slug="series['party']" level=4} :level{:slug="series['ext-us']" level=4}|199/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=5} :level{:slug="series['best']" level=5} :level{:slug="series['us']" level=5} :level{:slug="series['konamix']" level=5} :level{:slug="series['ext-jp']" level=5} :level{:slug="series['party']" level=5} :level{:slug="series['ext-us']" level=5}|237/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=6} :level{:slug="series['best']" level=6} :level{:slug="series['us']" level=6} :level{:slug="series['konamix']" level=6} :level{:slug="series['ext-jp']" level=6} :level{:slug="series['party']" level=6} :level{:slug="series['ext-us']" level=6}|299/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=4} :level{:slug="series['best']" level=4} :level{:slug="series['us']" level=4}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=5} :level{:slug="series['best']" level=5} :level{:slug="series['us']" level=5}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=6} :level{:slug="series['best']" level=6} :level{:slug="series['us']" level=6}|||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{:slug="series['konamix']" level=7}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{:slug="series['konamix']" level=4}|205/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['konamix']" level=5}|206/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{:slug="series['konamix']" level=7}|256/0||
