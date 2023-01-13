---
slug: "superstition"
name: "Superstition"
artist: ""
from: "Tokyo Disneyland: Club Disney Super Dancin' Mania -Mega Beat-"
bpm: 99
series:
  "disney-jp":
    slug: "disney-jp"
    title: "Dance Dance Revolution Disney's RAVE"
    color: "dimgray"
  "gb-disney":
    slug: "gb-disney"
    title: "Dance Dance Revolution GB Disney mix"
    color: "orchid"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="disney-jp" level=3} :level{slug="gb-disney" level=3}|91/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="disney-jp" level=4} :level{slug="gb-disney" level=4}|124/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="disney-jp" level=6}|186/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="disney-jp" level=4}|146/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="disney-jp" level=6}|187/0||
