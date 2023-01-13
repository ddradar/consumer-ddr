---
slug: "higher"
name: "HIGHER"
artist: "NM feat. SUNNY"
from: "DanceDanceRevolution 4thMIX"
bpm: 132
series:
  "4th":
    slug: "4th"
    title: "Dance Dance Revolution 4thMIX"
    color: "midnightblue"
  "gb3":
    slug: "gb3"
    title: "Dance Dance Revolution GB3"
    color: "goldenrod"
  "disney-us":
    slug: "disney-us"
    title: "Dance Dance Revolution Disney MIX"
    color: "gold"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-jp']" level=1} :level{:slug="series['party']" level=1} :level{:slug="series['ext-us']" level=1}|106/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['4th']" level=3} :level{:slug="series['gb3']" level=3} :level{:slug="series['disney-us']" level=3} :level{:slug="series['konamix']" level=3} :level{:slug="series['ext-jp']" level=3} :level{:slug="series['party']" level=3} :level{:slug="series['ext-us']" level=3}|140/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['4th']" level=5} :level{:slug="series['gb3']" level=5} :level{:slug="series['disney-us']" level=5} :level{:slug="series['konamix']" level=5} :level{:slug="series['ext-jp']" level=5} :level{:slug="series['party']" level=5} :level{:slug="series['ext-us']" level=5}|214/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['4th']" level=6} :level{:slug="series['gb3']" level=6} :level{:slug="series['disney-us']" level=6} :level{:slug="series['konamix']" level=6} :level{:slug="series['ext-jp']" level=6} :level{:slug="series['party']" level=6} :level{:slug="series['ext-us']" level=6}|246/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['4th']" level=3} :level{:slug="series['disney-us']" level=3} :level{:slug="series['konamix']" level=3} :level{:slug="series['ext-jp']" level=3} :level{:slug="series['party']" level=3} :level{:slug="series['ext-us']" level=3}|159/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['4th']" level=5} :level{:slug="series['disney-us']" level=5} :level{:slug="series['konamix']" level=5} :level{:slug="series['ext-jp']" level=5} :level{:slug="series['party']" level=5} :level{:slug="series['ext-us']" level=5}|230/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['4th']" level=7} :level{:slug="series['konamix']" level=7} :level{:slug="series['ext-jp']" level=7} :level{:slug="series['party']" level=7} :level{:slug="series['ext-us']" level=7}|279/0||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{:slug="series['4th']" level=7} :level{:slug="series['konamix']" level=7}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{:slug="series['4th']" level=3} :level{:slug="series['konamix']" level=3}|141/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['4th']" level=5} :level{:slug="series['konamix']" level=5}|214/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{:slug="series['4th']" level=7} :level{:slug="series['konamix']" level=7}|246/0||
