---
slug: "its-a-small-world-ducking"
name: "IT'S A SMALL WORLD (Ducking Hardcore MIX)"
artist: "ABeatC all stars"
from: "THE DISNEY COLLECTION - VOLUME ONE"
bpm: 183
series:
  "disney-jp":
    slug: "disney-jp"
    title: "Dance Dance Revolution Disney's RAVE"
    color: "dimgray"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['disney-jp']" level=5} :level{:slug="series['disney-us']" level=5}|231/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['disney-jp']" level=8} :level{:slug="series['disney-us']" level=8}|282/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['disney-jp']" level=10} :level{:slug="series['disney-us']" level=10}|332/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['disney-jp']" level=6} :level{:slug="series['disney-us']" level=6}|238/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['disney-jp']" level=10} :level{:slug="series['disney-us']" level=10}|303/0||
