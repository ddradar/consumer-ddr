---
slug: "red-room"
name: "Red Room"
artist: "Jesper Kyd"
from: ""
bpm: 120
series:
  - "max-jp"
  - "max-us"
  - "max2-jp"
  - "max2-us"
  - "ext-jp"
  - "party"
  - "ext-us"
  - "festival"
  - "ext2"
  - "strike"
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
<!-- strike -->
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="strike" level=1}|0/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="strike" level=4}|0/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="strike" level=5}|0/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="strike" level=8}|0/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="strike" level=4}|0/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="strike" level=5}|0/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="strike" level=8}|0/0||
