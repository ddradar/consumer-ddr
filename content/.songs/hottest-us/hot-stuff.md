---
slug: "hot-stuff"
name: "Hot Stuff"
artist: "DISCO QUEEN"
from: "Bad Girls"
bpm: 145
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
|SINGLE| :badge[BEGINNER]{type="info"}| :levels{links="/hottest-us" level="1"} :levels{links="/hottest-jp" level="1"}|91/8||
|SINGLE| :badge[BASIC]{type="warning"}| :levels{links="/hottest-us" level="4"} :levels{links="/hottest-jp" level="4"}|147/5||
|SINGLE| :badge[DIFFICULT]{type="danger"}| :levels{links="/hottest-us" level="7"} :levels{links="/hottest-jp" level="7"}|248/18||
|SINGLE| :badge[EXPERT]{type="success"}| :levels{links="/hottest-us" level="9"} :levels{links="/hottest-jp" level="9"}|339/25||
