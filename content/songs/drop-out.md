---
slug: "drop-out"
name: "DROP OUT"
artist: "NW260"
from: "DanceDanceRevolution Solo 2000"
bpm: 260
series:
  "extra":
    slug: "extra"
    title: "Dance Dance Revolution EXTRA MIX"
    color: "deeppink"
  "konamix":
    slug: "konamix"
    title: "Dance Dance Revolution KONAMIX"
    color: "orange"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-us']" level=3}|0/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=5} :level{:slug="series['konamix']" level=5} :level{:slug="series['max2-jp']" level=5} :level{:slug="series['ext-us']" level=5}|0/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=7} :level{:slug="series['konamix']" level=7} :level{:slug="series['max2-jp']" level=7} :level{:slug="series['ext-us']" level=7}|0/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=8} :level{:slug="series['konamix']" level=8} :level{:slug="series['max2-jp']" level=9} :level{:slug="series['ext-us']" level=9}|0/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=5} :level{:slug="series['konamix']" level=5} :level{:slug="series['max2-jp']" level=5} :level{:slug="series['ext-us']" level=5}|0/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=7} :level{:slug="series['konamix']" level=7} :level{:slug="series['max2-jp']" level=7} :level{:slug="series['ext-us']" level=7}|0/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=9} :level{:slug="series['konamix']" level=9} :level{:slug="series['max2-jp']" level=9} :level{:slug="series['ext-us']" level=9}|0/0||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{:slug="series['konamix']" level=9}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=6} :level{:slug="series['konamix']" level=6}|0/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=7} :level{:slug="series['konamix']" level=7}|0/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=8} :level{:slug="series['konamix']" level=8}|0/0||
