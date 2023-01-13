---
slug: "dancing-all-alone"
name: "DANCING ALL ALONE"
artist: "SMiLE.dk"
from: "Dancemania X8"
bpm: 140
series:
  "4th":
    slug: "4th"
    title: "Dance Dance Revolution 4thMIX"
    color: "midnightblue"
  "5th":
    slug: "5th"
    title: "Dance Dance Revolution 5thMIX"
    color: "orange"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['4th']" level=2} :level{:slug="series['5th']" level=2}|116/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['5th']" level=5}|170/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['5th']" level=7}|214/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['4th']" level=2} :level{:slug="series['5th']" level=2}|89/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['5th']" level=5}|201/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['5th']" level=7}|241/0||
