---
slug: "alice"
name: "Alice"
artist: "Moby"
from: "Last Night"
bpm: 95
series:
  - "universe3"
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
|SINGLE| :badge[BEGINNER]{type="info"}| :levels{links="/xbox360-us/universe3" level="?"}|39/0||
|SINGLE| :badge[BASIC]{type="warning"}| :levels{links="/xbox360-us/universe3" level="2"}|75/0||
|SINGLE| :badge[DIFFICULT]{type="danger"}| :levels{links="/xbox360-us/universe3" level="4"}|160/2||
|SINGLE| :badge[EXPERT]{type="success"}| :levels{links="/xbox360-us/universe3" level="6"}|208/12||
|DOUBLE| :badge[BEGINNER]{type="info"}| :levels{links="/xbox360-us/universe3" level="?"}|||
|DOUBLE| :badge[BASIC]{type="warning"}| :levels{links="/xbox360-us/universe3" level="2"}|69/2||
|DOUBLE| :badge[DIFFICULT]{type="danger"}| :levels{links="/xbox360-us/universe3" level="4"}|160/2||
|DOUBLE| :badge[EXPERT]{type="success"}| :levels{links="/xbox360-us/universe3" level="6"}|205/12||
