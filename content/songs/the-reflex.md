---
slug: "the-reflex"
name: "THE REFLEX"
artist: "DURAN DURAN"
from: "Seven and the Ragged Tiger"
bpm: 126
series:
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-us']" level=1}|97/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-jp']" level=2} :level{:slug="series['ext-us']" level=2}|92/9||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-jp']" level=5} :level{:slug="series['ext-us']" level=5}|196/2||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=8} :level{:slug="series['ext-us']" level=8}|292/12||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-jp']" level=2} :level{:slug="series['ext-us']" level=2}|112/3||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-jp']" level=5} :level{:slug="series['ext-us']" level=5}|176/12||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=7} :level{:slug="series['ext-us']" level=7}|267/8||
