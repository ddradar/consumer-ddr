---
slug: "jam-jam-reggae"
name: "Jam Jam Reggae"
artist: "jam master '73"
from: "beatmania"
bpm: 90
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['club-1']" level=2} :level{:slug="series['club-dc']" level=2}|76/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['club-1']" level=4} :level{:slug="series['club-dc']" level=4}|105/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['club-1']" level=8} :level{:slug="series['club-dc']" level=8}|180/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['club-1']" level=3} :level{:slug="series['club-dc']" level=3}|114/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['club-1']" level=7} :level{:slug="series['club-dc']" level=7}|157/0||
