---
slug: "let-the-beat-hit-em"
name: "Let the beat hit em!"
artist: "Stone Bros."
from: "DanceDanceRevolution Solo BASS MIX"
bpm: 110
series:
  "extra":
    slug: "extra"
    title: "Dance Dance Revolution EXTRA MIX"
    color: "deeppink"
  "disney-us":
    slug: "disney-us"
    title: "Dance Dance Revolution Disney MIX"
    color: "gold"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=3} :level{:slug="series['disney-us']" level=3}|102/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=6} :level{:slug="series['disney-us']" level=6}|151/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=7} :level{:slug="series['disney-us']" level=7}|185/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=3} :level{:slug="series['disney-us']" level=3}|108/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=5} :level{:slug="series['disney-us']" level=5}|144/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=7}|201/0||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=3}|102/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=6}|151/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=7}|185/0||
