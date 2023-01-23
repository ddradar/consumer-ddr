---
slug: "wannabe"
name: "Wannabe"
artist: "Spice Girls"
from: "Wannabe"
bpm: 110
series:
  - "party"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="party" level=1}|76/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="party" level=3}|96/2||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="party" level=5}|169/2||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="party" level=7}|226/9||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="party" level=3}|102/2||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="party" level=6}|182/14||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="party" level=7}|214/9||
