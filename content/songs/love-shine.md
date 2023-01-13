---
slug: "love-shine"
name: "LOVE ♥ SHINE"
artist: "小坂りゆ"
from: "DanceDanceRevolution EXTREME"
bpm: 177
series:
  "max2-jp":
    slug: "max2-jp"
    title: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
    color: "black"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-jp']" level=1}|130/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-jp']" level=4} :level{:slug="series['ext-jp']" level=4}|195/8||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-jp']" level=4} :level{:slug="series['ext-jp']" level=4}|209/12||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=7} :level{:slug="series['ext-jp']" level=7}|312/21||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-jp']" level=3} :level{:slug="series['ext-jp']" level=3}|161/20||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-jp']" level=4} :level{:slug="series['ext-jp']" level=4}|219/4||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=8} :level{:slug="series['ext-jp']" level=8}|337/7||
