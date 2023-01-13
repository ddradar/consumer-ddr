---
slug: "waiting-for-tonight"
name: "WAITING FOR TONIGHT"
artist: "P.A.T"
from: "On the 6"
bpm: 125
series:
  "ext-us":
    slug: "ext-us"
    title: "Dance Dance Revolution EXTREME"
    color: "seagreen"
  "festival":
    slug: "festival"
    title: "DDR FESTIVAL Dance Dance Revolution"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="ext-us" level=1} :level{slug="festival" level=1}|83/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="ext-us" level=4} :level{slug="festival" level=4}|131/8||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-us" level=5} :level{slug="festival" level=5}|185/10||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-us" level=7} :level{slug="festival" level=7}|294/17||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="ext-us" level=3} :level{slug="festival" level=3}|134/1||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-us" level=6} :level{slug="festival" level=6}|210/6||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-us" level=8} :level{slug="festival" level=8}|274/27||
