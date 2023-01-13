---
slug: "can-be-real"
name: "Can Be Real"
artist: "Vision F"
from: "DanceDanceRevolution Party Collection"
bpm: 132
series:
  "party":
    slug: "party"
    title: "Dance Dance Revolution Party Collection"
    color: "hotpink"
  "ext2":
    slug: "ext2"
    title: "Dance Dance Revolution EXTREME 2"
    color: "seagreen"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="party" level=1} :level{slug="ext2" level=1}|104/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="party" level=4} :level{slug="ext2" level=4}|129/12||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="party" level=5} :level{slug="ext2" level=5}|204/8||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="party" level=7} :level{slug="ext2" level=7}|257/27||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="party" level=3} :level{slug="ext2" level=3}|105/4||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="party" level=6} :level{slug="ext2" level=6}|183/7||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="party" level=7} :level{slug="ext2" level=7}|228/12||
