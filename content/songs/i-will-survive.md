---
slug: "i-will-survive"
name: "I will Survive"
artist: "AKIRA feat. Daline"
from: "DanceDanceRevolution EXTREME2"
bpm: 132
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="ext2" level=1} :level{slug="strike" level=1}|88/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="ext2" level=3} :level{slug="strike" level=3}|113/14||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext2" level=6} :level{slug="strike" level=6}|200/21||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="ext2" level=7} :level{slug="strike" level=7}|287/6||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="ext2" level=3} :level{slug="strike" level=3}|108/4||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext2" level=5} :level{slug="strike" level=5}|191/11||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="ext2" level=7} :level{slug="strike" level=7}|272/4||
