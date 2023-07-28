---
slug: "will"
name: "will"
artist: "NAOKI"
from: "DanceDanceRevolution HOTTEST PARTY"
bpm: 145
series:
  - "hottest-us"
  - "hottest-jp"
  - "grand-prix-vol2"
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
|SINGLE| :badge[BEGINNER]{type="info"}| :levels{links="/hottest-us" level="1"} :levels{links="/hottest-jp" level="1"} :levels{links="/grand-prix-vol2" level="1"}|56/0||
|SINGLE| :badge[BASIC]{type="warning"}| :levels{links="/hottest-us" level="3"} :levels{links="/hottest-jp" level="3"} :levels{links="/grand-prix-vol2" level="4"}|86/10||
|SINGLE| :badge[DIFFICULT]{type="danger"}| :levels{links="/hottest-us" level="5"} :levels{links="/hottest-jp" level="5"} :levels{links="/grand-prix-vol2" level="7"}|158/30||
|SINGLE| :badge[EXPERT]{type="success"}| :levels{links="/hottest-us" level="7"} :levels{links="/hottest-jp" level="7"} :levels{links="/grand-prix-vol2" level="11"}|283/15||
|DOUBLE| :badge[BASIC]{type="warning"}| :levels{links="/grand-prix-vol2" level="5"}|145/5||
|DOUBLE| :badge[DIFFICULT]{type="danger"}| :levels{links="/grand-prix-vol2" level="7"}|197/15||
|DOUBLE| :badge[EXPERT]{type="success"}| :levels{links="/grand-prix-vol2" level="11"}|281/19||
