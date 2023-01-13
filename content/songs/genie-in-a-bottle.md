---
slug: "genie-in-a-bottle"
name: "Genie In A Bottle"
artist: "nc ft. NRG Factory"
from: "Genie in a Bottle"
bpm: 136
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext2']" level=1} :level{:slug="series['strike']" level=1}|82/8||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext2']" level=4} :level{:slug="series['strike']" level=4}|118/34||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext2']" level=6} :level{:slug="series['strike']" level=6}|188/30||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext2']" level=7} :level{:slug="series['strike']" level=7}|249/34||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext2']" level=4} :level{:slug="series['strike']" level=4}|123/21||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext2']" level=5} :level{:slug="series['strike']" level=5}|188/14||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext2']" level=7} :level{:slug="series['strike']" level=7}|256/29||
