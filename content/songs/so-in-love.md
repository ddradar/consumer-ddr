---
slug: "so-in-love"
name: "SO IN LOVE"
artist: "Caramel.S"
from: "DDRMAX -DanceDanceRevolution 6thMIX- CS"
bpm: 112
series:
  "max-jp":
    slug: "max-jp"
    title: "DDRMAX -DanceDanceRevolution 6thMIX-"
    color: "blue"
  "max-us":
    slug: "max-us"
    title: "DDRMAX Dance Dance Revolution"
    color: "darkorchid"
  "max2-jp":
    slug: "max2-jp"
    title: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
    color: "black"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-us']" level=1}|66/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max-us']" level=3} :level{:slug="series['max2-jp']" level=3} :level{:slug="series['ext-us']" level=3}|102/27||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max-us']" level=6} :level{:slug="series['max2-jp']" level=6} :level{:slug="series['ext-us']" level=6}|147/33||
|SINGLE|[EXPERT (Old)]{.tag.is-expert}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max-us']" level=7}|193/26||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=7} :level{:slug="series['ext-us']" level=7}|191/26||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max-us']" level=4} :level{:slug="series['max2-jp']" level=4} :level{:slug="series['ext-us']" level=4}|86/7||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max-us']" level=6} :level{:slug="series['max2-jp']" level=6} :level{:slug="series['ext-us']" level=6}|139/14||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max-us']" level=7} :level{:slug="series['max2-jp']" level=7} :level{:slug="series['ext-us']" level=7}|186/24||
