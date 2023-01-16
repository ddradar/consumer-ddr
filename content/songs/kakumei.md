---
slug: "kakumei"
name: "革命"
artist: "dj TAKA with NAOKI"
from: "beatmania IIDX 7th style / DDRMAX2 -DanceDanceRevolution 7thMIX-"
bpm: "83-148"
series:
  "max2-jp":
    slug: "max2-jp"
    title: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
    color: "black"
  "max2-us":
    slug: "max2-us"
    title: "DDRMAX2 Dance Dance Revolution"
    color: "orange"
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1} :level{:slug="series['ext-jp']" level=1}|103/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-jp']" level=4} :level{:slug="series['max2-us']" level=4} :level{:slug="series['ext-jp']" level=4}|128/32||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-jp']" level=6} :level{:slug="series['max2-us']" level=6} :level{:slug="series['ext-jp']" level=6}|237/15||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=9} :level{:slug="series['max2-us']" level=9} :level{:slug="series['ext-jp']" level=9}|371/7||
|SINGLE|[CHALLENGE]{.tag.is-challenge}|:level{:slug="series['max2-jp']" level=8} :level{:slug="series['max2-us']" level=8} :level{:slug="series['ext-jp']" level=8}|317/7||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-jp']" level=3} :level{:slug="series['max2-us']" level=3} :level{:slug="series['ext-jp']" level=3}|109/34||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-jp']" level=5} :level{:slug="series['max2-us']" level=5} :level{:slug="series['ext-jp']" level=5}|193/26||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=9} :level{:slug="series['max2-us']" level=9} :level{:slug="series['ext-jp']" level=9}|365/2||
|DOUBLE|[CHALLENGE]{.tag.is-challenge}|:level{:slug="series['max2-jp']" level=8} :level{:slug="series['max2-us']" level=8} :level{:slug="series['ext-jp']" level=8}|305/2||
