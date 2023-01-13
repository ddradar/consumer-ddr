---
slug: "do-the-bus-stop"
name: "(Are You Ready) Do The Bus Stop"
artist: ""
from: "Tokyo Disneyland: Club Disney Super Dancin' Mania -Mega Beat-"
bpm: 109
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['disney-jp']" level=4} :level{:slug="series['disney-us']" level=4}|111/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['disney-jp']" level=5} :level{:slug="series['disney-us']" level=5}|173/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['disney-jp']" level=6} :level{:slug="series['disney-us']" level=6}|221/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['disney-jp']" level=4} :level{:slug="series['disney-us']" level=4}|129/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['disney-jp']" level=6} :level{:slug="series['disney-us']" level=6}|177/0||
