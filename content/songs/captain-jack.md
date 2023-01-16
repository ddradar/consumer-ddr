---
slug: "captain-jack"
name: "CAPTAIN JACK (GRANDALE REMIX)"
artist: "CAPTAIN JACK"
from: "Dancemania SPEED 2"
bpm: 170
series:
  "2nd-dc":
    slug: "2nd-dc"
    title: "Dance Dance Revolution 2nd MIX Dreamcast Edition"
    color: "darkorange"
  "3rd":
    slug: "3rd"
    title: "Dance Dance Revolution 3rd MIX"
    color: "crimson"
  "best":
    slug: "best"
    title: "Dance Dance Revolution BEST HITS"
    color: "goldenrod"
  "party":
    slug: "party"
    title: "Dance Dance Revolution Party Collection"
    color: "hotpink"
  "ext2":
    slug: "ext2"
    title: "Dance Dance Revolution EXTREME 2"
    color: "seagreen"
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
|SINGLE|[BEGINNER (old)]{.tag.is-beginner}|:level{:slug="series['best']" level=1}|99/0||
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['party']" level=1} :level{:slug="series['ext2']" level=1}|108/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd-dc']" level=4} :level{:slug="series['3rd']" level=4} :level{:slug="series['best']" level=4} :level{:slug="series['party']" level=4} :level{:slug="series['ext2']" level=4}|217/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd-dc']" level=7} :level{:slug="series['3rd']" level=7} :level{:slug="series['best']" level=7} :level{:slug="series['party']" level=7} :level{:slug="series['ext2']" level=7}|299/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['2nd-dc']" level=9} :level{:slug="series['3rd']" level=9} :level{:slug="series['best']" level=9} :level{:slug="series['party']" level=9} :level{:slug="series['ext2']" level=9}|360/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd-dc']" level=5} :level{:slug="series['3rd']" level=5} :level{:slug="series['best']" level=5} :level{:slug="series['party']" level=5} :level{:slug="series['ext2']" level=5}|179/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd-dc']" level=7} :level{:slug="series['3rd']" level=7} :level{:slug="series['best']" level=7} :level{:slug="series['party']" level=7} :level{:slug="series['ext2']" level=7}|239/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['2nd-dc']" level=9} :level{:slug="series['3rd']" level=9} :level{:slug="series['best']" level=9} :level{:slug="series['party']" level=9} :level{:slug="series['ext2']" level=9}|360/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=4} :level{:slug="series['best']" level=4}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=7} :level{:slug="series['best']" level=7}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=9} :level{:slug="series['best']" level=9}|||
