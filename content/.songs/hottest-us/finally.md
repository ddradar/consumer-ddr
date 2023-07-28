---
slug: "finally"
name: "Finally"
artist: "CLUB 90's"
from: "Finally"
bpm: 130
series:
  - "hottest-us"
  - "hottest-jp"
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
|SINGLE| :badge[BEGINNER]{type="info"}| :levels{links="/hottest-us" level="1"} :levels{links="/hottest-jp" level="1"}|93/8||
|SINGLE| :badge[BASIC]{type="warning"}| :levels{links="/hottest-us" level="4"} :levels{links="/hottest-jp" level="4"}|129/11||
|SINGLE| :badge[DIFFICULT]{type="danger"}| :levels{links="/hottest-us" level="5"} :levels{links="/hottest-jp" level="5"}|170/30||
|SINGLE| :badge[EXPERT]{type="success"}| :levels{links="/hottest-us" level="8"} :levels{links="/hottest-jp" level="8"}|274/25||
