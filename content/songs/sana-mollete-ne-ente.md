---
slug: "sana-mollete-ne-ente"
name: "サナ・モレッテ・ネ・エンテ"
artist: "Togo Project feat. Sana"
from: "beatmania APPEND GOTTAMIX2 ~Going Global~"
bpm: 90
series:
  "5th":
    slug: "5th"
    title: "Dance Dance Revolution 5thMIX"
    color: "orange"
  "max-us":
    slug: "max-us"
    title: "DDRMAX Dance Dance Revolution"
    color: "darkorchid"
  "festival":
    slug: "festival"
    title: "DDR FESTIVAL Dance Dance Revolution"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['festival']" level=1}|73/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['5th']" level=2} :level{:slug="series['max-us']" level=2} :level{:slug="series['festival']" level=2}|128/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['5th']" level=5} :level{:slug="series['max-us']" level=5} :level{:slug="series['festival']" level=5}|190/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['5th']" level=8} :level{:slug="series['max-us']" level=8} :level{:slug="series['festival']" level=8}|294/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['5th']" level=2} :level{:slug="series['max-us']" level=2} :level{:slug="series['festival']" level=2}|128/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['5th']" level=5} :level{:slug="series['max-us']" level=5} :level{:slug="series['festival']" level=5}|225/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['5th']" level=8} :level{:slug="series['max-us']" level=8} :level{:slug="series['festival']" level=8}|269/0||
