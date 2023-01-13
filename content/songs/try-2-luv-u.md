---
slug: "try-2-luv-u"
name: "Try 2 Luv. U"
artist: "S.F.M.P."
from: "DDRMAX2 -DanceDanceRevolution-"
bpm: 115
series:
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1} :level{:slug="series['ext-jp']" level=1} :level{:slug="series['party']" level=1}|66/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-us']" level=3} :level{:slug="series['ext-jp']" level=3} :level{:slug="series['party']" level=3}|73/17||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-us']" level=4} :level{:slug="series['ext-jp']" level=4} :level{:slug="series['party']" level=4}125/16||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-us']" level=5} :level{:slug="series['ext-jp']" level=5} :level{:slug="series['party']" level=5}|150/30||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-us']" level=2} :level{:slug="series['ext-jp']" level=2} :level{:slug="series['party']" level=2}|88/7||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-us']" level=4} :level{:slug="series['ext-jp']" level=4} :level{:slug="series['party']" level=4}|127/10||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-us']" level=6} :level{:slug="series['ext-jp']" level=6} :level{:slug="series['party']" level=6}|169/12||
