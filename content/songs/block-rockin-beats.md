---
slug: "block-rockin-beats"
name: "Block Rockin' Beats"
artist: "Chemical Brothers"
from: "Block Rockin' Beats"
bpm: 110
series:
  "ext2":
    slug: "ext2"
    title: "Dance Dance Revolution EXTREME 2"
    color: "seagreen"
  "strike":
    slug: "strike"
    title: "DanceDanceRevolution STRIKE"
    color: "dodgerblue"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext2']" level=1} :level{:slug="series['strike']" level=1}|73/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext2']" level=3} :level{:slug="series['strike']" level=3}|110/22||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext2']" level=6} :level{:slug="series['strike']" level=6}|224/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext2']" level=8} :level{:slug="series['strike']" level=8}|311/3||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext2']" level=3} :level{:slug="series['strike']" level=3}|128/2||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext2']" level=6} :level{:slug="series['strike']" level=6}|223/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext2']" level=8} :level{:slug="series['strike']" level=8}|306/3||
