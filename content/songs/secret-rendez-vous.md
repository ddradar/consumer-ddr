---
slug: "secret-rendez-vous"
name: "Secret Rendez-vous"
artist: "DIVAS"
from: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
bpm: 98
series:
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1}|71/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-us']" level=2} :level{:slug="series['max2-jp']" level=2} :level{:slug="series['max2-us']" level=2}|94/1||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-us']" level=5} :level{:slug="series['max2-jp']" level=5} :level{:slug="series['max2-us']" level=5}|146/3||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-us']" level=7} :level{:slug="series['max2-jp']" level=7} :level{:slug="series['max2-us']" level=7}|237/12||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-us']" level=2} :level{:slug="series['max2-jp']" level=2} :level{:slug="series['max2-us']" level=2}|101/1||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-us']" level=5} :level{:slug="series['max2-jp']" level=5} :level{:slug="series['max2-us']" level=5}|148/2||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-us']" level=7} :level{:slug="series['max2-jp']" level=7} :level{:slug="series['max2-us']" level=7}|256/8||
