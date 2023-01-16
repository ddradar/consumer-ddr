---
slug: "music-bostik"
name: "Music (Bostik Radio Edit)"
artist: "Darude"
from: "Music"
bpm: 138
series:
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-us']" level=1}|99/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-us']" level=4}|160/28||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-us']" level=6}|227/29||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-us']" level=8}|331/19||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-us']" level=2}|106/5||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-us']" level=6}|188/10||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-us']" level=7}|278/4||
