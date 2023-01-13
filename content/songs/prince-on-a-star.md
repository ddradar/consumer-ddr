---
slug: "prince-on-a-star"
name: "Prince on a star"
artist: "SPIRITUAL RIDE"
from: "beatmania IIDX"
bpm: 145
series:
  "club-1":
    slug: "club-1"
    title: "Dance Dance Revolution 2nd ReMIX APPEND CLUB VERSION vol.1"
    color: "deepskyblue"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['club-1']" level=5} :level{:slug="series['club-dc']" level=5}|178/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['club-1']" level=6} :level{:slug="series['club-dc']" level=6}|205/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['club-1']" level=7} :level{:slug="series['club-dc']" level=7}|224/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['club-1']" level=6} :level{:slug="series['club-dc']" level=6}|220/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['club-1']" level=7} :level{:slug="series['club-dc']" level=7}|214/0||
