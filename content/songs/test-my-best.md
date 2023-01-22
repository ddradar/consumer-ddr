---
slug: "test-my-best"
name: "TEST MY BEST"
artist: "E-ROTIC"
from: "Dancemania X8"
bpm: 147
series:
  - "5th"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="5th" level=3}|147/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="5th" level=4}|189/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="5th" level=7}|292/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="5th" level=3}|140/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="5th" level=5}|225/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="5th" level=7}|285/0||
