---
slug: "paranoia-eternal"
name: "PARANOiA ETERNAL"
artist: "STM 200"
from: "DanceDanceRevolution 5thMIX"
bpm: 200
series:
  "5th":
    slug: "5th"
    title: "Dance Dance Revolution 5thMIX"
    color: "orange"
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-jp']" level=2} :level{:slug="series['ext-us']" level=2}|115/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['5th']" level=5}|237/0||
|SINGLE|[DIFFICULT (Old)]{.tag.is-difficult}|:level{:slug="series['5th']" level=6}|298/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-jp']" level=6} :level{:slug="series['ext-us']" level=6}|300/2||
|SINGLE|[EXPERT (Old)]{.tag.is-expert}|:level{:slug="series['5th']" level=9}|352/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-jp']" level=9} :level{:slug="series['ext-us']" level=9}|381/5||
|DOUBLE|[BASIC (Old)]{.tag.is-basic}|:level{:slug="series['5th']" level=5}|256/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-jp']" level=5} :level{:slug="series['ext-us']" level=5}|261/0||
|DOUBLE|[DIFFICULT (Old)]{.tag.is-difficult}|:level{:slug="series['5th']" level=6}|289/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-jp']" level=6} :level{:slug="series['ext-us']" level=6}|309/8||
|DOUBLE|[EXPERT (Old)]{.tag.is-expert}|:level{:slug="series['5th']" level=9}|367/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-jp']" level=9} :level{:slug="series['ext-us']" level=9}|373/8||
