---
slug: "forever-sunshine"
name: "Forever Sunshine"
artist: "Chel Y."
from: "DDRMAX2 -DanceDanceRevolution-"
bpm: 128
series:
  "max2-us":
    slug: "max2-us"
    title: "DDRMAX2 Dance Dance Revolution"
    color: "orange"
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1} :level{:slug="series['ext-jp']" level=1}|91/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-us']" level=3} :level{:slug="series['ext-jp']" level=3}|93/18||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-us']" level=5} :level{:slug="series['ext-jp']" level=5}|155/24||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-us']" level=5} :level{:slug="series['ext-jp']" level=5}|181/23||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-us']" level=2} :level{:slug="series['ext-jp']" level=2}|95/8||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-us']" level=5} :level{:slug="series['ext-jp']" level=5}|143/17||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-us']" level=6} :level{:slug="series['ext-jp']" level=6}|182/17||
