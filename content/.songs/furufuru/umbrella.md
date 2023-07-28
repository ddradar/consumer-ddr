---
slug: "umbrella"
name: "Umbrella"
artist: "Haley Hunt"
from: "Umbrella"
bpm: 127
series:
  - "furufuru"
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
|SINGLE| :badge[BEGINNER]{type="info"}| :levels{links="/furufuru" level="1"}|40/0||
|SINGLE| :badge[BASIC]{type="warning"}| :levels{links="/furufuru" level="3"}|99/0||
|SINGLE| :badge[DIFFICULT]{type="danger"}| :levels{links="/furufuru" level="5"}|190/0||
|SINGLE| :badge[EXPERT]{type="success"}| :levels{links="/furufuru" level="7"}|263/0||
