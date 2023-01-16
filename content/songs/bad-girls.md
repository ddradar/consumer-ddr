---
slug: "bad-girls"
name: "BAD GIRLS"
artist: "Juliet Roberts"
from: "ZIPmania II"
bpm: 122
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=2} :level{:slug="series['2nd-dc']" level=2} :level{:slug="series['gb']" level=2}|96/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=4} :level{:slug="series['2nd-dc']" level=4} :level{:slug="series['gb']" level=4}|144/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5} :level{:slug="series['gb']" level=5}|194/0||
|DOUBLE|[BASIC]{.tag.is-basic}|level{slug="2nd" level=3} :level{:slug="series['2nd-dc']" level=3}|116/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=4} :level{:slug="series['2nd-dc']" level=4}|150/0||
|COUPLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=2} :level{:slug="series['2nd-dc']" level=2} :level{:slug="series['gb']" level=2}|97/0||
|COUPLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=4} :level{:slug="series['2nd-dc']" level=4} :level{:slug="series['gb']" level=4}|140/0||
|COUPLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5} :level{:slug="series['gb']" level=5}|1P:190/0 2P:193/0||
