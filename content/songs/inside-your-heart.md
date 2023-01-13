---
slug: "inside-your-heart"
name: "INSIDE YOUR HEART"
artist: "AKIRA YAMAOKA"
from: "DanceDanceRevolution EXTREME2"
bpm: 107
series:
  "ext2":
    slug: "ext2"
    title: "Dance Dance Revolution EXTREME 2"
    color: "seagreen"
  "strike":
    slug: "strike"
    title: "DanceDanceRevolution STRIKE"
    color: "dodgerblue"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext2']" level=1} :level{:slug="series['strike']" level=1}|76/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext2']" level=3} :level{:slug="series['strike']" level=3}|117/8||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext2']" level=5} :level{:slug="series['strike']" level=5}|185/4||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext2']" level=6} :level{:slug="series['strike']" level=6}|241/4||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext2']" level=3} :level{:slug="series['strike']" level=3}|118/9||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext2']" level=5} :level{:slug="series['strike']" level=5}|187/4||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext2']" level=7} :level{:slug="series['strike']" level=7}|242/4||
