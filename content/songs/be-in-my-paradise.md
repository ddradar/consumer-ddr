---
slug: "be-in-my-paradise"
name: "Be in my paradise"
artist: "JJ COMPANY"
from: "beatmania IIDX"
bpm: 63
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="club-1" level=1} :level{slug="club-dc" level=1}|53/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="club-1" level=3} :level{slug="club-dc" level=3}|85/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="club-1" level=6} :level{slug="club-dc" level=6}|137/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="club-1" level=3} :level{slug="club-dc" level=3}|85/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="club-1" level=7} :level{slug="club-dc" level=7}|137/0||
