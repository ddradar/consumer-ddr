---
slug: "hero"
name: "HERO"
artist: "PAPAYA"
from: "Dancemania EXTRA"
bpm: 138
series:
  "2nd":
    slug: "2nd"
    title: "Dance Dance Revolution 2nd ReMIX"
    color: "mediumblue"
  "2nd-dc":
    slug: "2nd-dc"
    title: "Dance Dance Revolution 2nd MIX Dreamcast Edition"
    color: "darkorange"
  "gb":
    slug: "gb"
    title: "Dance Dance Revolution GB"
    color: "tomato"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=4} :level{:slug="series['2nd-dc']" level=4} :level{:slug="series['gb']" level=4}|124/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5} :level{:slug="series['gb']" level=5}|151/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6} :level{:slug="series['gb']" level=6}|181/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5}|126/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6}|155/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=4} :level{:slug="series['2nd-dc']" level=4} :level{:slug="series['gb']" level=4}|116/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5} :level{:slug="series['gb']" level=5}|140/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6} :level{:slug="series['gb']" level=6}|181/0||
