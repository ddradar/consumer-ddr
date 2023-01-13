---
slug: "twilight-zone"
name: "Twilight Zone"
artist: "Zodiac"
from: "Tokyo Disneyland: Club Disney Super Dancin' Mania -Mega Beat-"
bpm: 129
series:
  "disney-jp":
    slug: "disney-jp"
    title: "Dance Dance Revolution Disney's RAVE"
    color: "dimgray"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['disney-jp']" level=3}|117/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['disney-jp']" level=5}|198/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['disney-jp']" level=9}|328/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['disney-jp']" level=3}|135/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['disney-jp']" level=10}|302/0||
