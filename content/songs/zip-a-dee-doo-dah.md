---
slug: "zip-a-dee-doo-dah"
name: "Zip-A-Dee-Doo-Dah"
artist: "Domino"
from: "EUROBEAT DISNEY"
bpm: 150
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="disney-jp" level=2} :level{slug="gb-disney" level=2} :level{slug="disney-us" level=2}|68/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="disney-jp" level=4} :level{slug="gb-disney" level=4} :level{slug="disney-us" level=4}|144/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="disney-jp" level=8} :level{slug="disney-us" level=8}|280/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="disney-jp" level=2} :level{slug="disney-us" level=2}|84/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="disney-jp" level=7} :level{slug="disney-us" level=7}|205/0||
