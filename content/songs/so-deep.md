---
slug: "so-deep"
name: "SO DEEP (PERFECT SPHERE REMIX)"
artist: "SILVERTEAR"
from: "The Best Of World Trance FantasiA"
bpm: 140
series:
  "max-jp":
    slug: "max-jp"
    title: "DDRMAX -DanceDanceRevolution 6thMIX-"
    color: "blue"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1}|93/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max2-us']" level=3}|107/21||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max2-us']" level=5}|191/22||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max2-us']" level=9}|498/1||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max2-us']" level=2}|88/4||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max2-us']" level=6}|203/7||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['max2-us']" level=9}|383/1||
