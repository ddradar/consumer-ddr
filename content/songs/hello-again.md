---
slug: "hello-again"
name: "HELLO AGAIN"
artist: "TRUE KiSS DESTiNATiON"
from: "TRUE KiSS DESTiNATiON"
bpm: 177
series:
  - "tkd"
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
|SINGLE|[FREE]{.tag.is-beginner}|:level{slug="tkd" level="?"}|||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="tkd" level=4}|200/0||
|SINGLE|[TRICK]{.tag.is-difficult}|:level{slug="tkd" level=4.5}|233/0||
|SINGLE|[MANIAC]{.tag.is-expert}|:level{slug="tkd" level=5}|244/0||
|SINGLE|[SUPER MANIAC]{.tag.is-challenge}|:level{slug="tkd" level="?"}|274/0||
|DOUBLE|[FREE]{.tag.is-beginner}|:level{slug="tkd" level="?"}|||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="tkd" level=4.5}|167/0||
|DOUBLE|[TRICK]{.tag.is-difficult}|:level{slug="tkd" level=6.5}|203/0||
|DOUBLE|[MANIAC]{.tag.is-expert}|:level{slug="tkd" level="?"}|252/0||
