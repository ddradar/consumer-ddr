---
slug: "dont-stop"
name: "Don't Stop! ~AMD 2nd MIX~"
artist: "Dr. VIBE feat. JP Miles"
from: "DanceDanceRevolution 4thMIX"
bpm: 130
series:
  "4th":
    slug: "4th"
    title: "Dance Dance Revolution 4thMIX"
    color: "midnightblue"
  "gb3":
    slug: "gb3"
    title: "Dance Dance Revolution GB3"
    color: "goldenrod"
  "konamix":
    slug: "konamix"
    title: "Dance Dance Revolution KONAMIX"
    color: "orange"
  "max2-us":
    slug: "max2-us"
    title: "DDRMAX2 Dance Dance Revolution"
    color: "orange"
  "festival":
    slug: "festival"
    title: "DDR FESTIVAL Dance Dance Revolution"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1} :level{:slug="series['festival']" level=1}|92/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['4th']" level=3} :level{:slug="series['gb3']" level=4} :level{:slug="series['konamix']" level=3} :level{:slug="series['max2-us']" level=4} :level{:slug="series['festival']" level=4}|156/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['4th']" level=5} :level{:slug="series['gb3']" level=5} :level{:slug="series['konamix']" level=5} :level{:slug="series['max2-us']" level=5} :level{:slug="series['festival']" level=5}|189/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['4th']" level=7} :level{:slug="series['gb3']" level=7} :level{:slug="series['konamix']" level=7} :level{:slug="series['max2-us']" level=7} :level{:slug="series['festival']" level=7}|214/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['4th']" level=4} :level{:slug="series['konamix']" level=4} :level{:slug="series['max2-us']" level=3} :level{:slug="series['festival']" level=3}|113/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['4th']" level=5} :level{:slug="series['konamix']" level=5} :level{:slug="series['max2-us']" level=4} :level{:slug="series['festival']" level=4}|174/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['4th']" level=7} :level{:slug="series['konamix']" level=7} :level{:slug="series['max2-us']" level=6} :level{:slug="series['festival']" level=6}|221/0||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{:slug="series['4th']" level=7} :level{:slug="series['konamix']" level=7}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{:slug="series['4th']" level=3} :level{:slug="series['konamix']" level=3}|113/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['4th']" level=4} :level{:slug="series['konamix']" level=5}|174/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{:slug="series['4th']" level=7} :level{:slug="series['konamix']" level=6}|221/0||
