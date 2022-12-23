---
slug: "bag"
name: "bag"
artist: "RevenG"
from: ""
bpm: 65
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
<!-- ext-jp -->
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="ext-jp" level=1}|0/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="ext-jp" level=4}|0/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-jp" level=7}|0/0||
|SINGLE|[undefined]{.tag.is-undefined}|:level{slug="ext-jp" level=10}|0/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="ext-jp" level=4}|0/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-jp" level=8}|0/0||
|DOUBLE|[undefined]{.tag.is-undefined}|:level{slug="ext-jp" level=10}|0/0||
