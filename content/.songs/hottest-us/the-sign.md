---
slug: "the-sign"
name: "The Sign"
artist: "Honey Sweets"
from: "Happy Nation"
bpm: 100
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
|SINGLE| :badge[BEGINNER]{type="info"}| :levels{links="/hottest-us" level="1"} :levels{links="/hottest-jp" level="1"}|70/3||
|SINGLE| :badge[BASIC]{type="warning"}| :levels{links="/hottest-us" level="3"} :levels{links="/hottest-jp" level="3"}|109/1||
|SINGLE| :badge[DIFFICULT]{type="danger"}| :levels{links="/hottest-us" level="5"} :levels{links="/hottest-jp" level="5"}|162/19||
|SINGLE| :badge[EXPERT]{type="success"}| :levels{links="/hottest-us" level="7"} :levels{links="/hottest-jp" level="7"}|261/8||
