---
slug: "d2r"
name: "D2R"
artist: "NAOKI"
from: "beatmania IIDX 7th style / DDRMAX2 -DanceDanceRevolution 7thMIX-"
bpm: 160
series:
  "max2-jp":
    slug: "max2-jp"
    title: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
    color: "black"
  "max2-us":
    slug: "max2-us"
    title: "DDRMAX2 Dance Dance Revolution"
    color: "orange"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1} :level{:slug="series['festival']" level=1}|124/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-jp']" level=3} :level{:slug="series['max2-us']" level=3} :level{:slug="series['festival']" level=3}|147/5||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-jp']" level=5} :level{:slug="series['max2-us']" level=5} :level{:slug="series['festival']" level=5}|236/29||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=7} :level{:slug="series['max2-us']" level=7} :level{:slug="series['festival']" level=7}|327/7||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-jp']" level=3} :level{:slug="series['max2-us']" level=3} :level{:slug="series['festival']" level=3}|138/4||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-jp']" level=5} :level{:slug="series['max2-us']" level=5} :level{:slug="series['festival']" level=5}|238/10||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=7} :level{:slug="series['max2-us']" level=7} :level{:slug="series['festival']" level=7}|332/0||
