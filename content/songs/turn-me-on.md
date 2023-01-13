---
slug: "turn-me-on"
name: "TURN ME ON (HEAVENLY MIX)"
artist: "E-ROTIC"
from: "Dancemania SPEED 2"
bpm: 170
series:
  "3rd":
    slug: "3rd"
    title: "Dance Dance Revolution 3rd MIX"
    color: "crimson"
  "gb2":
    slug: "gb2"
    title: "Dance Dance Revolution GB2"
    color: "darkgreen"
  "best":
    slug: "best"
    title: "Dance Dance Revolution BEST HITS"
    color: "goldenrod"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['best']" level=1}|80/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=4} :level{:slug="series['gb2']" level=4} :level{:slug="series['best']" level=4}|165/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=6} :level{:slug="series['gb2']" level=6} :level{:slug="series['best']" level=6}|276/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=7} :level{:slug="series['gb2']" level=7} :level{:slug="series['best']" level=7}|299/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=5} :level{:slug="series['best']" level=5}|216/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=7} :level{:slug="series['best']" level=7}|276/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=9} :level{:slug="series['best']" level=9}|325/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=4} :level{:slug="series['best']" level=4}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=6} :level{:slug="series['best']" level=6}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=7} :level{:slug="series['best']" level=7}|||
