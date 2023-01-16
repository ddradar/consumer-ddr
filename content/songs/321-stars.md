---
slug: "321-stars"
name: "321 STARS"
artist: "DJ SIMON"
from: "beatmania completeMIX 2"
bpm: 192
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-jp']" level=2} :level{:slug="series['ext-us']" level=2}|95/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-jp']" level=4} :level{:slug="series['ext-us']" level=4}|146/5||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-jp']" level=6} :level{:slug="series['ext-us']" level=6}|239/15||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-jp']" level=8} :level{:slug="series['ext-us']" level=8}|308/7||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-jp']" level=4} :level{:slug="series['ext-us']" level=4}|147/5||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-jp']" level=7} :level{:slug="series['ext-us']" level=7}|241/7||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-jp']" level=8} :level{:slug="series['ext-us']" level=8}|307/7||
