---
slug: "firefly"
name: "Firefly"
artist: "BeForU"
from: "DDRMAX -DanceDanceRevolution 6thMIX-"
bpm: 150
series:
  "max-jp":
    slug: "max-jp"
    title: "DDRMAX -DanceDanceRevolution 6thMIX-"
    color: "blue"
  "ext-us":
    slug: "ext-us"
    title: "Dance Dance Revolution EXTREME"
    color: "seagreen"
  "festival":
    slug: "festival"
    title: "DDR FESTIVAL Dance Dance Revolution"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-us']" level=1} :level{:slug="series['festival']" level=1}|102/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['ext-us']" level=1} :level{:slug="series['festival']" level=1}|98/9||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['ext-us']" level=5} :level{:slug="series['festival']" level=5}|227/43||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['ext-us']" level=7} :level{:slug="series['festival']" level=7}|301/38||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['ext-us']" level=2} :level{:slug="series['festival']" level=2}|75/12||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['ext-us']" level=5} :level{:slug="series['festival']" level=5}|197/33||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['ext-us']" level=8} :level{:slug="series['festival']" level=8}|359/25||
