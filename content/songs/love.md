---
slug: "love"
name: "LOVE"
artist: "SONIC DREAM"
from: "Dancemania X1"
bpm: 129
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=3} :level{:slug="series['2nd-dc']" level=3} :level{:slug="series['gb']" level=3}|104/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5} :level{:slug="series['gb']" level=5}|128/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['2nd']" level=7} :level{:slug="series['2nd-dc']" level=7} :level{:slug="series['gb']" level=7}|162/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=3} :level{:slug="series['2nd-dc']" level=3}|104/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5}|128/0||
|COUPLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=3} :level{:slug="series['2nd-dc']" level=3} :level{:slug="series['gb']" level=3}|83/0||
|COUPLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5} :level{:slug="series['gb']" level=5}|115/0||
|COUPLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['2nd']" level=7} :level{:slug="series['2nd-dc']" level=7} :level{:slug="series['gb']" level=7}|141/0||
