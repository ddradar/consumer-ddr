---
slug: "super-star"
name: "SUPER STAR"
artist: "D.J. RICH feat. Tail Bros."
from: "DanceDanceRevolution Solo BASS MIX"
bpm: 128
series:
  "extra":
    slug: "extra"
    title: "Dance Dance Revolution EXTRA MIX"
    color: "deeppink"
  "konamix":
    slug: "konamix"
    title: "Dance Dance Revolution KONAMIX"
    color: "orange"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1} :level{:slug="series['ext-jp']" level=1}|84/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=5} :level{:slug="series['konamix']" level=5} :level{:slug="series['max2-us']" level=5} :level{:slug="series['ext-jp']" level=5}|195/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=6} :level{:slug="series['konamix']" level=6} :level{:slug="series['max2-us']" level=6} :level{:slug="series['ext-jp']" level=6}|229/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=8} :level{:slug="series['konamix']" level=8} :level{:slug="series['max2-us']" level=8} :level{:slug="series['ext-jp']" level=8}|289/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=4} :level{:slug="series['konamix']" level=4} :level{:slug="series['max2-us']" level=4} :level{:slug="series['ext-jp']" level=4}|157/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=6} :level{:slug="series['konamix']" level=6} :level{:slug="series['max2-us']" level=6} :level{:slug="series['ext-jp']" level=6}|195/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=8} :level{:slug="series['konamix']" level=8} :level{:slug="series['max2-us']" level=8} :level{:slug="series['ext-jp']" level=8}|262/0||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{:slug="series['konamix']" level=6}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=6} :level{:slug="series['konamix']" level=6}|195/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=7} :level{:slug="series['konamix']" level=7}|229/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=8} :level{:slug="series['konamix']" level=8}|289/0||
