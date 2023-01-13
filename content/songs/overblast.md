---
slug: "overblast"
name: "OVERBLAST!!"
artist: "L.E.D. LIGHT"
from: "beatmania APPEND 5thMIX -Time to get down-"
bpm: 147
series:
  "max-us":
    slug: "max-us"
    title: "DDRMAX Dance Dance Revolution"
    color: "darkorchid"
  "max2-jp":
    slug: "max2-jp"
    title: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
    color: "black"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-us']" level=3} :level{:slug="series['max2-jp']" level=3}|69/10||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-us']" level=6} :level{:slug="series['max2-jp']" level=6}|143/20||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-us']" level=7} :level{:slug="series['max2-jp']" level=7}|212/14||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-us']" level=3} :level{:slug="series['max2-jp']" level=3}|92/12||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-us']" level=5} :level{:slug="series['max2-jp']" level=5}|126/6||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-us']" level=8} :level{:slug="series['max2-jp']" level=8}|181/7||
