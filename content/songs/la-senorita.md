---
slug: "la-senorita"
name: "La Senorita"
artist: "CAPTAIN. T"
from: "Dance Dance Revolution 3rdMIX"
bpm: 182
series:
  "3rd":
    slug: "3rd"
    title: "Dance Dance Revolution 3rd MIX"
    color: "crimson"
  "gb":
    slug: "gb"
    title: "Dance Dance Revolution GB"
    color: "tomato"
  "gb2":
    slug: "gb2"
    title: "Dance Dance Revolution GB2"
    color: "darkgreen"
  "best":
    slug: "best"
    title: "Dance Dance Revolution BEST HITS"
    color: "goldenrod"
  "us":
    slug: "us"
    title: "Dance Dance Revolution"
    color: "mediumvioletred"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['best']" level=1} :level{:slug="series['us']" level=1} :level{:slug="series['ext-jp']" level=2} :level{:slug="series['party']" level=2} :level{:slug="series['ext-us']" level=2}|125/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=4} :level{:slug="series['gb']" level="?"} :level{:slug="series['gb2']" level=4} :level{:slug="series['best']" level=4} :level{:slug="series['us']" level=4} :level{:slug="series['ext-jp']" level=4} :level{:slug="series['party']" level=4} :level{:slug="series['ext-us']" level=4}|241/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=6} :level{:slug="series['gb']" level="?"} :level{:slug="series['gb2']" level=6} :level{:slug="series['best']" level=6} :level{:slug="series['us']" level=6} :level{:slug="series['ext-jp']" level=6} :level{:slug="series['party']" level=6} :level{:slug="series['ext-us']" level=6}|255/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=7} :level{:slug="series['gb']" level="?"} :level{:slug="series['gb2']" level=7} :level{:slug="series['best']" level=7} :level{:slug="series['us']" level=7} :level{:slug="series['ext-jp']" level=7} :level{:slug="series['party']" level=7} :level{:slug="series['ext-us']" level=7}|294/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=4} :level{:slug="series['best']" level=4} :level{:slug="series['us']" level=4} :level{:slug="series['ext-jp']" level=4} :level{:slug="series['party']" level=4} :level{:slug="series['ext-us']" level=4}|181/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=6} :level{:slug="series['best']" level=6} :level{:slug="series['us']" level=6} :level{:slug="series['ext-jp']" level=6} :level{:slug="series['party']" level=6} :level{:slug="series['ext-us']" level=6}|293/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=9} :level{:slug="series['best']" level=9} :level{:slug="series['us']" level=9} :level{:slug="series['ext-jp']" level=9} :level{:slug="series['party']" level=9} :level{:slug="series['ext-us']" level=9}|420/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=4} :level{:slug="series['best']" level=4} :level{:slug="series['us']" level=4}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=6} :level{:slug="series['best']" level=6} :level{:slug="series['us']" level=6}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=7} :level{:slug="series['best']" level=7} :level{:slug="series['us']" level=7}|||

## メモ

- [Dance Dance Revolution GB](/series/gb/)はFREE MODEでのみ選曲可能。
