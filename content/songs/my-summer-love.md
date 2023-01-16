---
slug: "my-summer-love"
name: "MY SUMMER LOVE"
artist: "mitsu-O! with GEILA"
from: "DanceDanceRevolution 4thMIX"
bpm: 100
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
  "max-us":
    slug: "max-us"
    title: "DDRMAX Dance Dance Revolution"
    color: "darkorchid"
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-jp']" level=1} :level{:slug="series['party']" level=1}|65/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['4th']" level=3} :level{:slug="series['gb3']" level=3} :level{:slug="series['disney-us']" level=3} :level{:slug="series['max-us']" level=3} :level{:slug="series['ext-jp']" level=3} :level{:slug="series['party']" level=3}|117/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['4th']" level=6} :level{:slug="series['gb3']" level=6} :level{:slug="series['disney-us']" level=6} :level{:slug="series['max-us']" level=6} :level{:slug="series['ext-jp']" level=6} :level{:slug="series['party']" level=6}|189/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['4th']" level=9} :level{:slug="series['gb3']" level=9} :level{:slug="series['disney-us']" level=9} :level{:slug="series['max-us']" level=9} :level{:slug="series['ext-jp']" level=9} :level{:slug="series['party']" level=9}|260/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['4th']" level=3} :level{:slug="series['disney-us']" level=3} :level{:slug="series['max-us']" level=3} :level{:slug="series['ext-jp']" level=3} :level{:slug="series['party']" level=3}|119/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['4th']" level=5} :level{:slug="series['disney-us']" level=5} :level{:slug="series['max-us']" level=5} :level{:slug="series['ext-jp']" level=5} :level{:slug="series['party']" level=5}|186/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['4th']" level=8} :level{:slug="series['max-us']" level=8} :level{:slug="series['ext-jp']" level=8} :level{:slug="series['party']" level=8}|244/0||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{:slug="series['4th']" level=4}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{:slug="series['4th']" level=3}|119/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['4th']" level=5}|186/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{:slug="series['4th']" level=7}|246/0||
