---
slug: "fire-combined"
name: "Fire"
artist: "Combined"
from: "Forever Club Disney Super Dancin' Mania-The Perfect Best"
bpm: 142
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['disney-jp']" level=3} :level{:slug="series['disney-us']" level=3}|124/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['disney-jp']" level=5} :level{:slug="series['disney-us']" level=5}|190/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['disney-jp']" level=7} :level{:slug="series['disney-us']" level=7}|230/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['disney-jp']" level=5} :level{:slug="series['disney-us']" level=5}|180/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['disney-jp']" level=8} :level{:slug="series['disney-us']" level=8}|229/0||
