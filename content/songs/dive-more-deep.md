---
slug: "dive-more-deep"
name: "DIVE ~more deep & deeper style~"
artist: "Be For U"
from: "DanceDanceRevolution 5thMIX CS"
bpm: 155
series:
  "5th":
    slug: "5th"
    title: "Dance Dance Revolution 5thMIX"
    color: "orange"
  "max-jp":
    slug: "max-jp"
    title: "DDRMAX -DanceDanceRevolution 6thMIX-"
    color: "blue"
  "max2-us":
    slug: "max2-us"
    title: "DDRMAX2 Dance Dance Revolution"
    color: "orange"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1}|103/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['5th']" level=3} :level{:slug="series['max-jp']" level="?"} :level{:slug="series['max2-us']" level=3}|154/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['5th']" level=5} :level{:slug="series['max-jp']" level="?"} :level{:slug="series['max2-us']" level=5}|230/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['5th']" level=7} :level{:slug="series['max-jp']" level="?"} :level{:slug="series['max2-us']" level=7}|322/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['5th']" level=2} :level{:slug="series['max-jp']" level="?"} :level{:slug="series['max2-us']" level=2}|137/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['5th']" level=5} :level{:slug="series['max-jp']" level="?"} :level{:slug="series['max2-us']" level=5}|228/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['5th']" level=6} :level{:slug="series['max-jp']" level="?"} :level{:slug="series['max2-us']" level=6}|293/0||
