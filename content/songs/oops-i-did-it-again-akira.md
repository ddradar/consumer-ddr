---
slug: "oops-i-did-it-again-akira"
name: "Oops!... I Did It Again"
artist: "AKIRA feat. Susan Z"
from: "DanceDanceRevolution EXTREME2"
bpm: 96
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="ext2" level=1} :level{slug="strike" level=1}|62/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="ext2" level=3} :level{slug="strike" level=3}|86/2||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext2" level=4} :level{slug="strike" level=4}|156/1||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="ext2" level=6} :level{slug="strike" level=6}|200/3||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="ext2" level=3} :level{slug="strike" level=3}|98/2||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext2" level=4} :level{slug="strike" level=4}|160/1||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="ext2" level=6} :level{slug="strike" level=6}|201/4||
