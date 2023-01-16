---
slug: "kind-lady"
name: "Kind Lady"
artist: "OKUYATOS"
from: "DDRMAX -DanceDanceRevolution 6thMIX- CS"
bpm: 135
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1}|0/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max-us']" level=4} :level{:slug="series['max2-jp']" level=4} :level{:slug="series['max2-us']" level=4}|0/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max-us']" level=6} :level{:slug="series['max2-jp']" level=6} :level{:slug="series['max2-us']" level=6}|0/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max-us']" level=7} :level{:slug="series['max2-jp']" level=7} :level{:slug="series['max2-us']" level=7}|0/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max-us']" level=4} :level{:slug="series['max2-jp']" level=4} :level{:slug="series['max2-us']" level=4}|0/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max-us']" level=5} :level{:slug="series['max2-jp']" level=5} :level{:slug="series['max2-us']" level=5}|0/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max-us']" level=8} :level{:slug="series['max2-jp']" level=8} :level{:slug="series['max2-us']" level=8}|0/0||
