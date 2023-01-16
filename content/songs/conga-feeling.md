---
slug: "conga-feeling"
name: "CONGA FEELING"
artist: "VIVIAN"
from: "Dancemania SUMMERS 3"
bpm: 130
series:
  "extra":
    slug: "extra"
    title: "Dance Dance Revolution EXTRA MIX"
    color: "deeppink"
  "max2-us":
    slug: "max2-us"
    title: "DDRMAX2 Dance Dance Revolution"
    color: "orange"
  "party":
    slug: "party"
    title: "Dance Dance Revolution Party Collection"
    color: "hotpink"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1} :level{:slug="series['party']" level=1}|0/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=3} :level{:slug="series['max2-us']" level=3} :level{:slug="series['party']" level=3}|0/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=5} :level{:slug="series['max2-us']" level=5} :level{:slug="series['party']" level=5}|0/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=8} :level{:slug="series['max2-us']" level=8} :level{:slug="series['party']" level=8}|0/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=4} :level{:slug="series['max2-us']" level=4} :level{:slug="series['party']" level=4}|0/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=7} :level{:slug="series['max2-us']" level=7} :level{:slug="series['party']" level=7}|0/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=8} :level{:slug="series['max2-us']" level=8} :level{:slug="series['party']" level=8}|0/0||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=4}|0/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=6}|0/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=8}|0/0||
