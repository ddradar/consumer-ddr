---
slug: "i-believe-in-miracles"
name: "I believe in miracles"
artist: "HI-RISE"
from: "Dancemania X1"
bpm: 126
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
|SINGLE|[BEGINNER (old)]{.tag.is-beginner}|:level{:slug="series['best']" level=1} :level{:slug="series['us']" level=1}|87/0||
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['party']" level=1}|84/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['1st-jp']" level=5} :level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5} :level{:slug="series['gb']" level=5} :level{:slug="series['best']" level=5} :level{:slug="series['us']" level=5} :level{:slug="series['party']" level=5}|174/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['1st-jp']" level=6} :level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6} :level{:slug="series['gb']" level=6} :level{:slug="series['best']" level=6} :level{:slug="series['us']" level=6} :level{:slug="series['party']" level=6}|188/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['1st-jp']" level=8} :level{:slug="series['2nd']" level=8} :level{:slug="series['2nd-dc']" level=8} :level{:slug="series['gb']" level=8} :level{:slug="series['best']" level=8} :level{:slug="series['us']" level=8} :level{:slug="series['party']" level=8}|246/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['1st-jp']" level=6} :level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6} :level{:slug="series['best']" level=6} :level{:slug="series['us']" level=6} :level{:slug="series['party']" level=6}|177/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['1st-jp']" level=7} :level{:slug="series['2nd']" level=7} :level{:slug="series['2nd-dc']" level=7} :level{:slug="series['best']" level=7} :level{:slug="series['us']" level=7} :level{:slug="series['party']" level=7}|182/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['best']" level=8} :level{:slug="series['us']" level=8} :level{:slug="series['party']" level=8}|263/0||
|COUPLE|[BASIC]{.tag.is-basic}|:level{:slug="series['1st-jp']" level=5} :level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5} :level{:slug="series['gb']" level=5}|1P:165/0 2P:166/0|
|COUPLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['1st-jp']" level=6} :level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6} :level{:slug="series['gb']" level=6}|1P:183/0 2P:184/0|
|COUPLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['1st-jp']" level=8} :level{:slug="series['2nd']" level=8} :level{:slug="series['2nd-dc']" level=8} :level{:slug="series['gb']" level=8}|246/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{:slug="series['best']" level=5} :level{:slug="series['us']" level=5}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['best']" level=6} :level{:slug="series['us']" level=6}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{:slug="series['best']" level=8} :level{:slug="series['us']" level=8}|||
