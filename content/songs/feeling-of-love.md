---
slug: "feeling-of-love"
name: "feeling of love"
artist: "youhei shimizu"
from: "beatmania III"
bpm: 136
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1} :level{:slug="series['ext-jp']" level=1}|100/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-us']" level=4} :level{:slug="series['ext-jp']" level=4}|169/9||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-us']" level=5} :level{:slug="series['ext-jp']" level=5}|216/11||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-us']" level=7} :level{:slug="series['ext-jp']" level=7}|307/14||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-us']" level=4} :level{:slug="series['ext-jp']" level=4}|133/14||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-us']" level=5} :level{:slug="series['ext-jp']" level=5}|217/12||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-us']" level=7} :level{:slug="series['ext-jp']" level=7}|296/6||
