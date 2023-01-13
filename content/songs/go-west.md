---
slug: "go-west"
name: "Go West"
artist: "PET SHOP BOYS"
from: "Very"
bpm: 120
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-us']" level=1}|82/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-us']" level=4}|129/8||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-us']" level=5}|177/6||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-us']" level=6}|211/13||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-us']" level=3}|102/16||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-us']" level=5}|162/14||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-us']" level=7}|207/36||
