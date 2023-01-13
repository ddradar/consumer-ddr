---
slug: "like-a-virgin"
name: "Like A Virgin"
artist: "tama_happytone"
from: "Like a Virgin"
bpm: 126
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="ext-us" level=1} :level{slug="festival" level=1}|102/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="ext-us" level=3} :level{slug="festival" level=3}|123/2||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-us" level=5} :level{slug="festival" level=5}|190/14||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-us" level=8} :level{slug="festival" level=8}|326/3||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="ext-us" level=3} :level{slug="festival" level=3}|123/8||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-us" level=5} :level{slug="festival" level=5}|169/9||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-us" level=8} :level{slug="festival" level=8}|270/13||
