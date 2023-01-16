---
slug: "macho-gang"
name: "Macho Gang"
artist: "ANAL SPYDER"
from: "beatmania IIDX substream"
bpm: 125
series:
  "club-2":
    slug: "club-2"
    title: "Dance Dance Revolution 2nd ReMIX APPEND CLUB VERSION vol.2"
    color: "fuchsia"
  "club-dc":
    slug: "club-dc"
    title: "Dance Dance Revolution CLUB VERSION Dreamcast Edition"
    color: "royalblue"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['club-2']" level=5} :level{:slug="series['club-dc']" level=5}|167/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['club-2']" level=7} :level{:slug="series['club-dc']" level=7}|237/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['club-2']" level=8} :level{:slug="series['club-dc']" level=8}|261/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['club-2']" level=7} :level{:slug="series['club-dc']" level=7}|178/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['club-2']" level=8} :level{:slug="series['club-dc']" level=8}|261/0||
