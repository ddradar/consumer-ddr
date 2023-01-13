---
slug: "22dunk-another"
name: "22DUNK (CLUB ANOTHER)"
artist: "SLAKE"
from: "beatmania IIDX"
bpm: 135
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['club-2']" level=5} :level{:slug="series['club-dc']" level=5}|136/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['club-2']" level=7} :level{:slug="series['club-dc']" level=7}|135/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['club-2']" level=8} :level{:slug="series['club-dc']" level=8}|140/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['club-2']" level=5} :level{:slug="series['club-dc']" level=5}|136/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['club-2']" level=8} :level{:slug="series['club-dc']" level=8}|139/0||
