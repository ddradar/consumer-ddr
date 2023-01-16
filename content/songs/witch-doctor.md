---
slug: "witch-doctor"
name: "WITCH DOCTOR (GIANTS TOONS VERSION)"
artist: "CARTOONS"
from: "TOONTASTIC!"
bpm: 150
series:
  "max-jp":
    slug: "max-jp"
    title: "DDRMAX -DanceDanceRevolution 6thMIX-"
    color: "blue"
  "party":
    slug: "party"
    title: "Dance Dance Revolution Party Collection"
    color: "hotpink"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['party']" level=1}|100/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['party']" level=3}|129/1||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['party']" level=4}|188/32||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['party']" level=8}|437/2||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['party']" level=2}|113/1||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['party']" level=6}|219/4||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max-jp']" level="?"} :level{:slug="series['party']" level=8}|316/14||
