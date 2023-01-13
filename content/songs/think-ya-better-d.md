---
slug: "think-ya-better-d"
name: "think ya better D"
artist: "sAmi"
from: "DanceDanceRevolution CS"
bpm: 136
series:
  "2nd":
    slug: "2nd"
    title: "Dance Dance Revolution 2nd ReMIX"
    color: "mediumblue"
  "2nd-dc":
    slug: "2nd-dc"
    title: "Dance Dance Revolution 2nd MIX Dreamcast Edition"
    color: "darkorange"
  "3rd":
    slug: "3rd"
    title: "Dance Dance Revolution 3rd MIX"
    color: "crimson"
  "konamix":
    slug: "konamix"
    title: "Dance Dance Revolution KONAMIX"
    color: "orange"
  "max2-us":
    slug: "max2-us"
    title: "DDRMAX2 Dance Dance Revolution"
    color: "orange"
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="max2-us" level=1} :level{slug="ext-jp" level=1}|84/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="2nd" level=3} :level{slug="2nd-dc" level=3} :level{slug="3rd" level=3} :level{slug="konamix" level=3} :level{slug="max2-us" level=3} :level{slug="ext-jp" level=3}|148/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="2nd" level=4} :level{slug="2nd-dc" level=4} :level{slug="3rd" level=4} :level{slug="konamix" level=4} :level{slug="max2-us" level=4} :level{slug="ext-jp" level=4}|177/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="2nd" level=5} :level{slug="2nd-dc" level=5} :level{slug="3rd" level=5} :level{slug="konamix" level=5} :level{slug="max2-us" level=5} :level{slug="ext-jp" level=5}|237/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="2nd" level=3} :level{slug="2nd-dc" level=3} :level{slug="3rd" level=3} :level{slug="konamix" level=3} :level{slug="max2-us" level=3} :level{slug="ext-jp" level=3}|172/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="2nd" level=4} :level{slug="2nd-dc" level=4} :level{slug="3rd" level=4} :level{slug="konamix" level=4} :level{slug="max2-us" level=4} :level{slug="ext-jp" level=4}|194/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="konamix" level=7} :level{slug="max2-us" level=7} :level{slug="ext-jp" level=7}|274/0||
|COUPLE|[BASIC]{.tag.is-basic}|:level{slug="2nd" level=3} :level{slug="2nd-dc" level=3}|145/0||
|COUPLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="2nd" level=4} :level{slug="2nd-dc" level=4}|162/0||
|COUPLE|[EXPERT]{.tag.is-expert}|:level{slug="2nd" level=5} :level{slug="2nd-dc" level=5}|231/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{slug="3rd" level=3}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{slug="3rd" level=4}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{slug="3rd" level=5}|||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{slug="konamix" level=4}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{slug="konamix" level=3}|143/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{slug="konamix" level=4}|194/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{slug="konamix" level=6}|251/0||
