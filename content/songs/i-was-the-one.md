---
slug: "i-was-the-one"
name: "I Was The One"
artist: "good-cool"
from: "beatmania IIDX 2nd style"
bpm: 125
series:
  "5th":
    slug: "5th"
    title: "Dance Dance Revolution 5thMIX"
    color: "orange"
  "max-us":
    slug: "max-us"
    title: "DDRMAX Dance Dance Revolution"
    color: "darkorchid"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1} :level{:slug="series['festival']" level=1}|91/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['5th']" level=3} :level{:slug="series['max-us']" level=3} :level{:slug="series['max2-us']" level=3} :level{:slug="series['festival']" level=3}|145/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['5th']" level=5} :level{:slug="series['max-us']" level=5} :level{:slug="series['max2-us']" level=5} :level{:slug="series['festival']" level=5}|217/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['5th']" level=7} :level{:slug="series['max-us']" level=7} :level{:slug="series['max2-us']" level=7} :level{:slug="series['festival']" level=7}|291/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['5th']" level=3} :level{:slug="series['max-us']" level=3} :level{:slug="series['max2-us']" level=3} :level{:slug="series['festival']" level=3}|141/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['5th']" level=5} :level{:slug="series['max-us']" level=5} :level{:slug="series['max2-us']" level=5} :level{:slug="series['festival']" level=5}|236/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['5th']" level=6} :level{:slug="series['max-us']" level=6} :level{:slug="series['max2-us']" level=6} :level{:slug="series['festival']" level=6}|277/0||
