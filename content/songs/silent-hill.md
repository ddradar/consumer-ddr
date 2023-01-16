---
slug: "silent-hill"
name: "Silent Hill"
artist: "THOMAS HOWARD"
from: "DanceDanceRevolution 3rdMIX"
bpm: 125
series:
  "3rd":
    slug: "3rd"
    title: "Dance Dance Revolution 3rd MIX"
    color: "crimson"
  "gb2":
    slug: "gb2"
    title: "Dance Dance Revolution GB2"
    color: "darkgreen"
  "best":
    slug: "best"
    title: "Dance Dance Revolution BEST HITS"
    color: "goldenrod"
  "max-us":
    slug: "max-us"
    title: "DDRMAX Dance Dance Revolution"
    color: "darkorchid"
  "max2-us":
    slug: "max2-us"
    title: "DDRMAX2 Dance Dance Revolution"
    color: "orange"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['best']" level=1} :level{:slug="series['max2-us']" level=1} :level{:slug="series['ext-jp']" level=1} :level{:slug="series['party']" level=1}|85/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=2} :level{:slug="series['gb2']" level=2} :level{:slug="series['best']" level=2} :level{:slug="series['max-us']" level=2} :level{:slug="series['max2-us']" level=2} :level{:slug="series['ext-jp']" level=2} :level{:slug="series['party']" level=2}|117/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=6} :level{:slug="series['gb2']" level=6} :level{:slug="series['best']" level=6} :level{:slug="series['max-us']" level=6} :level{:slug="series['max2-us']" level=6} :level{:slug="series['ext-jp']" level=6} :level{:slug="series['party']" level=6}|202/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=7} :level{:slug="series['gb2']" level=7} :level{:slug="series['best']" level=7} :level{:slug="series['max-us']" level=7} :level{:slug="series['max2-us']" level=7} :level{:slug="series['ext-jp']" level=7} :level{:slug="series['party']" level=7}|265/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=4} :level{:slug="series['best']" level=4} :level{:slug="series['max-us']" level=4} :level{:slug="series['max2-us']" level=4} :level{:slug="series['ext-jp']" level=4} :level{:slug="series['party']" level=4}|165/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=5} :level{:slug="series['best']" level=5} :level{:slug="series['max-us']" level=5} :level{:slug="series['max2-us']" level=5} :level{:slug="series['ext-jp']" level=5} :level{:slug="series['party']" level=5}|206/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=7} :level{:slug="series['best']" level=7} :level{:slug="series['max-us']" level=7} :level{:slug="series['max2-us']" level=7} :level{:slug="series['ext-jp']" level=7} :level{:slug="series['party']" level=7}|268/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=2} :level{:slug="series['best']" level=2}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=6} :level{:slug="series['best']" level=6}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=7} :level{:slug="series['best']" level=7}|||
