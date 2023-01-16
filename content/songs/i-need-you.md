---
slug: "i-need-you"
name: "I Need You"
artist: "Supa Fova feat. Jenny F."
from: "DDRMAX2 -DanceDanceRevolution-"
bpm: 114
series:
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1} :level{:slug="series['ext-jp']" level=1}|100/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-us']" level=3} :level{:slug="series['ext-jp']" level=3}|105/11||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-us']" level=4} :level{:slug="series['ext-jp']" level=4}|161/15||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-us']" level=5} :level{:slug="series['ext-jp']" level=5}|186/22||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max2-us']" level=3} :level{:slug="series['ext-jp']" level=3}|107/3||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-us']" level=5} :level{:slug="series['ext-jp']" level=5}|163/9||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-us']" level=6} :level{:slug="series['ext-jp']" level=6}|207/4||
