---
slug: "scorching-moon"
name: "Scorching Moon"
artist: "Shawn the Horny Master"
from: "DanceDanceRevolution EXTREME CS"
bpm: 125
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-jp']" level=1} :level{:slug="series['ext-us']" level=1}|93/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-jp']" level=4} :level{:slug="series['ext-us']" level=4}|163/8||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-jp']" level=6} :level{:slug="series['ext-us']" level=6}|202/8||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-jp']" level=7} :level{:slug="series['ext-us']" level=7}|239/12||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-jp']" level=4} :level{:slug="series['ext-us']" level=4}|154/8||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-jp']" level=6} :level{:slug="series['ext-us']" level=6}|204/8||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-jp']" level=8} :level{:slug="series['ext-us']" level=8}|282/14||
