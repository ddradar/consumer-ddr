---
slug: "spin-the-disc"
name: "Spin the disc"
artist: "good-cool"
from: "beatmania IIDX 5th style"
bpm: 130
series:
  "max-us":
    slug: "max-us"
    title: "DDRMAX Dance Dance Revolution"
    color: "darkorchid"
  "max2-jp":
    slug: "max2-jp"
    title: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
    color: "black"
  "max2-us":
    slug: "max2-us"
    title: "DDRMAX2 Dance Dance Revolution"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1}|69/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-us']" level=2} :level{:slug="series['max2-jp']" level=2} :level{:slug="series['max2-us']" level=2}|70/11||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-us']" level=5} :level{:slug="series['max2-jp']" level=5} :level{:slug="series['max2-us']" level=5}|194/3||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-us']" level=8} :level{:slug="series['max2-jp']" level=8} :level{:slug="series['max2-us']" level=8}|304/12||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-us']" level=2} :level{:slug="series['max2-jp']" level=2} :level{:slug="series['max2-us']" level=2}|102/4||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-us']" level=5} :level{:slug="series['max2-jp']" level=5} :level{:slug="series['max2-us']" level=5}|194/5||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-us']" level=8} :level{:slug="series['max2-jp']" level=8} :level{:slug="series['max2-us']" level=8}|264/7||
