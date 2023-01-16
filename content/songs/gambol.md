---
slug: "gambol"
name: "GAMBOL"
artist: "SLAKE"
from: "beatmania IIDX"
bpm: 102
series:
  "club-1":
    slug: "club-1"
    title: "Dance Dance Revolution 2nd ReMIX APPEND CLUB VERSION vol.1"
    color: "deepskyblue"
  "club-dc":
    slug: "club-dc"
    title: "Dance Dance Revolution CLUB VERSION Dreamcast Edition"
    color: "royalblue"
  "max-us":
    slug: "max-us"
    title: "DDRMAX Dance Dance Revolution"
    color: "darkorchid"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['club-1']" level=1} :level{:slug="series['club-dc']" level=1} :level{:slug="series['max-us']" level=1}|71/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['club-1']" level=5} :level{:slug="series['club-dc']" level=5} :level{:slug="series['max-us']" level=5}|118/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['club-1']" level=8} :level{:slug="series['club-dc']" level=8} :level{:slug="series['max-us']" level=8}|151/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['club-1']" level=4} :level{:slug="series['club-dc']" level=4} :level{:slug="series['max-us']" level=4}|123/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['club-1']" level=7} :level{:slug="series['club-dc']" level=7} :level{:slug="series['max-us']" level=7}|138/0||

## メモ

- [DDRMAX (US)](/series/max-us)の[DOUBLE/EXPERT]{.tag.is-expert}譜面は[DOUBLE/DIFFICULT]{.tag.is-difficult}と同一。
