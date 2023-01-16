---
slug: "r3-another"
name: "R3 (CLUB ANOTHER)"
artist: "tiger YAMATO"
from: "beatmania IIDX"
bpm: 157
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['club-2']" level=5} :level{:slug="series['club-dc']" level=5}|161/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['club-2']" level=6} :level{:slug="series['club-dc']" level=6}|180/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['club-2']" level=7} :level{:slug="series['club-dc']" level=7}|271/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['club-2']" level=6} :level{:slug="series['club-dc']" level=6}|172/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['club-2']" level=8} :level{:slug="series['club-dc']" level=8}|271/0||
