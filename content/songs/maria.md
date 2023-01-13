---
slug: "maria"
name: "MARIA (I believe...)"
artist: "NAOKI feat. PAULA TERRY"
from: "beatmania IIDX 9th style"
bpm: 158
series:
  "ext2":
    slug: "ext2"
    title: "Dance Dance Revolution EXTREME 2"
    color: "seagreen"
  "strike":
    slug: "strike"
    title: "DanceDanceRevolution STRIKE"
    color: "dodgerblue"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="ext2" level=1} :level{slug="strike" level=1}|96/5||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="ext2" level=4} :level{slug="strike" level=4}|132/28||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext2" level=6} :level{slug="strike" level=6}|202/12||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="ext2" level=7} :level{slug="strike" level=7}|277/10||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="ext2" level=4} :level{slug="strike" level=4}|131/28||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext2" level=6} :level{slug="strike" level=6}|202/14||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="ext2" level=7} :level{slug="strike" level=7}|278/14||
