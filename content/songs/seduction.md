---
slug: "seduction"
name: "SEDUCTION"
artist: "nc ft. FINALFORCE"
from: "DanceDanceRevolution EXTREME2"
bpm: "95-190"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext2']" level=2} :level{:slug="series['strike']" level=2}|98/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext2']" level=5} :level{:slug="series['strike']" level=5}|151/24||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext2']" level=7} :level{:slug="series['strike']" level=7}|240/7||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext2']" level=8} :level{:slug="series['strike']" level=8}|385/13||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext2']" level=5} :level{:slug="series['strike']" level=5}|159/20||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext2']" level=7} :level{:slug="series['strike']" level=7}|242/7||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext2']" level=8} :level{:slug="series['strike']" level=8}|358/31||
