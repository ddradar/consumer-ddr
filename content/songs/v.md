---
slug: "v"
name: "V (for EXTREME)"
artist: "TAKA"
from: "DanceDanceRevolution EXTREME"
bpm: 150
series:
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-jp']" level=1} :level{:slug="series['ext-us']" level=1}|123/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-jp']" level=4} :level{:slug="series['ext-us']" level=4}|153/12||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-jp']" level=6} :level{:slug="series['ext-us']" level=6}|265/16||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-jp']" level=8} :level{:slug="series['ext-us']" level=8}|365/12||
|SINGLE|[CHALLENGE]{.tag.is-challenge}|:level{:slug="series['ext-jp']" level=9} :level{:slug="series['ext-us']" level=9}|448/4||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-jp']" level=3} :level{:slug="series['ext-us']" level=3}|156/10||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-jp']" level=5} :level{:slug="series['ext-us']" level=5}|237/14||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-jp']" level=8} :level{:slug="series['ext-us']" level=8}|331/4||
|DOUBLE|[CHALLENGE]{.tag.is-challenge}|:level{:slug="series['ext-jp']" level=9} :level{:slug="series['ext-us']" level=9}|425/4||
