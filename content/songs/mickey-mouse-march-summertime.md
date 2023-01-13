---
slug: "mickey-mouse-march-summertime"
name: "Mickey Mouse March (SUMMERTIME EXTENDED Version)"
artist: "Domino"
from: "EUROBEAT DISNEY"
bpm: 152
series:
  "disney-jp":
    slug: "disney-jp"
    title: "Dance Dance Revolution Disney's RAVE"
    color: "dimgray"
  "gb-disney":
    slug: "gb-disney"
    title: "Dance Dance Revolution GB Disney mix"
    color: "orchid"
  "disney-us":
    slug: "disney-us"
    title: "Dance Dance Revolution Disney MIX"
    color: "gold"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['disney-jp']" level=2} :level{:slug="series['gb-disney']" level=2} :level{:slug="series['disney-us']" level=2}|126/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['disney-jp']" level=4} :level{:slug="series['gb-disney']" level=4} :level{:slug="series['disney-us']" level=4}|231/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['disney-jp']" level=9} :level{:slug="series['disney-us']" level=9}|337/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['disney-jp']" level=4} :level{:slug="series['disney-us']" level=4}|186/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['disney-jp']" level=9} :level{:slug="series['disney-us']" level=9}|316/0||
