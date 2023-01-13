---
slug: "you-gotta-move-it"
name: "You gotta move it (feat. Julie Rugaard)"
artist: "Yuzo Koshiro"
from: "DanceDanceRevolution EXTREME2"
bpm: 134
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext2']" level=1} :level{:slug="series['strike']" level=1}|83/1||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext2']" level=4} :level{:slug="series['strike']" level=4}|134/20||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext2']" level=5} :level{:slug="series['strike']" level=5}|192/25||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext2']" level=7} :level{:slug="series['strike']" level=7}|253/12||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext2']" level=4} :level{:slug="series['strike']" level=4}|128/22||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext2']" level=5} :level{:slug="series['strike']" level=5}|182/21||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext2']" level=7} :level{:slug="series['strike']" level=7}|257/17||
