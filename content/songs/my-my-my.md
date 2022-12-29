---
slug: "my-my-my"
name: "My My My"
artist: "Armand Van Helden"
from: "Nympho"
bpm: 128
series:
  - "ext2"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="ext2" level=1}|74/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="ext2" level=3}|113/11||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext2" level=5}|213/8||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="ext2" level=7}|308/3||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="ext2" level=3}|110/11||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext2" level=6}|215/8||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="ext2" level=7}|275/21||
