---
slug: "supercalifragilisticexpialidocious"
name: "Supercalifragilisticexpialidocious"
artist: "Go Go Girls"
from: "EUROBEAT DISNEY"
bpm: "114-200"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="disney-jp" level=5} :level{slug="gb-disney" level=5} :level{slug="disney-us" level=5}|238/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="disney-jp" level=8} :level{slug="gb-disney" level=8} :level{slug="disney-us" level=8}|286/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="disney-jp" level=10} :level{slug="disney-us" level=10}|359/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="disney-jp" level=6} :level{slug="disney-us" level=6}|237/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="disney-jp" level=10} :level{slug="disney-us" level=10}|340/0||
