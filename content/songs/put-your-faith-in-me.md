---
slug: "put-your-faith-in-me"
name: "PUT YOUR FAITH IN ME"
artist: "UZI-LAY"
from: "DanceDanceRevolution 2ndMIX"
bpm: 119
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
  "best":
    slug: "best"
    title: "Dance Dance Revolution BEST HITS"
    color: "goldenrod"
  "us":
    slug: "us"
    title: "Dance Dance Revolution"
    color: "mediumvioletred"
  "max2-us":
    slug: "max2-us"
    title: "DDRMAX2 Dance Dance Revolution"
    color: "orange"
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
  "party":
    slug: "party"
    title: "Dance Dance Revolution Party Collection"
    color: "hotpink"
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
|SINGLE|[BEGINNER (old)]{.tag.is-beginner}|:level{slug="best" level=1} :level{slug="us" level=1}|65/0||
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="max2-us" level=1} :level{slug="ext-jp" level=1} :level{slug="party" level=1}|70/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="2nd" level=3} :level{slug="2nd-dc" level=3} :level{slug="3rd" level=3} :level{slug="best" level=3} :level{slug="us" level=3} :level{slug="max2-us" level=3} :level{slug="ext-jp" level=3} :level{slug="party" level=3}|128/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="2nd" level=4} :level{slug="2nd-dc" level=4} :level{slug="3rd" level=4} :level{slug="best" level=4} :level{slug="us" level=4} :level{slug="max2-us" level=4} :level{slug="ext-jp" level=4} :level{slug="party" level=4}|145/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="2nd" level=6} :level{slug="2nd-dc" level=6} :level{slug="3rd" level=6} :level{slug="best" level=6} :level{slug="us" level=6} :level{slug="max2-us" level=6} :level{slug="ext-jp" level=6} :level{slug="party" level=6}|203/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="2nd" level=4} :level{slug="2nd-dc" level=4} :level{slug="3rd" level=4} :level{slug="best" level=4} :level{slug="us" level=4} :level{slug="max2-us" level=4} :level{slug="ext-jp" level=4} :level{slug="party" level=4}|135/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="2nd" level=5} :level{slug="2nd-dc" level=5} :level{slug="3rd" level=5} :level{slug="best" level=5} :level{slug="us" level=5} :level{slug="max2-us" level=5} :level{slug="ext-jp" level=5} :level{slug="party" level=5}|147/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="best" level=6} :level{slug="us" level=6} :level{slug="max2-us" level=6} :level{slug="ext-jp" level=6} :level{slug="party" level=6}|170/0||
|COUPLE|[BASIC]{.tag.is-basic}|:level{slug="2nd" level=3} :level{slug="2nd-dc" level=3}|112/0||
|COUPLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="2nd" level=4} :level{slug="2nd-dc" level=4}|128/0||
|COUPLE|[EXPERT]{.tag.is-expert}|:level{slug="2nd" level=6} :level{slug="2nd-dc" level=6}|195/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{slug="3rd" level=3} :level{slug="best" level=3} :level{slug="us" level=3}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{slug="3rd" level=4} :level{slug="best" level=4} :level{slug="us" level=4}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{slug="3rd" level=6} :level{slug="best" level=6} :level{slug="us" level=6}|||
