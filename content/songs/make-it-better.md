---
slug: "make-it-better"
name: "MAKE IT BETTER"
artist: "mitsu-O!"
from: "DanceDanceRevolution Internet Ranking Version"
bpm: 118
series:
  "1st-jp":
    slug: "1st-jp"
    title: "Dance Dance Revolution"
    color: "darkviolet"
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
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
  "ext-us":
    slug: "ext-us"
    title: "Dance Dance Revolution EXTREME"
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
|SINGLE|[BEGINNER (old)]{.tag.is-beginner}|:level{slug="best" level=1} :level{slug="us" level=1}|64/0||
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="ext-jp" level=1} :level{slug="ext-us" level=1}|67/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="1st-jp" level=5} :level{slug="2nd" level=4} :level{slug="2nd-dc" level=4} :level{slug="3rd" level=4} :level{slug="best" level=4} :level{slug="us" level=4} :level{slug="ext-jp" level=4} :level{slug="ext-us" level=4}|143/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="1st-jp" level=6} :level{slug="2nd" level=5} :level{slug="2nd-dc" level=5} :level{slug="3rd" level=5} :level{slug="best" level=5} :level{slug="us" level=5} :level{slug="ext-jp" level=5} :level{slug="ext-us" level=5}|168/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="1st-jp" level=8} :level{slug="2nd" level=7} :level{slug="2nd-dc" level=7} :level{slug="3rd" level=7} :level{slug="best" level=7} :level{slug="us" level=7} :level{slug="ext-jp" level=7} :level{slug="ext-us" level=7}|212/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="1st-jp" level=5} :level{slug="2nd" level=5} :level{slug="2nd-dc" level=5} :level{slug="3rd" level=5} :level{slug="best" level=5} :level{slug="us" level=5} :level{slug="ext-jp" level=5} :level{slug="ext-us" level=5}|130/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="1st-jp" level=6} :level{slug="2nd" level=7} :level{slug="2nd-dc" level=7} :level{slug="3rd" level=7} :level{slug="best" level=7} :level{slug="us" level=7} :level{slug="ext-jp" level=7} :level{slug="ext-us" level=7}|180/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="best" level=7} :level{slug="us" level=7} :level{slug="ext-jp" level=7} :level{slug="ext-us" level=7}|220/0||
|COUPLE|[BASIC]{.tag.is-basic}|:level{slug="1st-jp" level=5} :level{slug="2nd" level=4} :level{slug="2nd-dc" level=4}|||
|COUPLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="1st-jp" level=6} :level{slug="2nd" level=5} :level{slug="2nd-dc" level=5}|||
|COUPLE|[EXPERT]{.tag.is-expert}|:level{slug="1st-jp" level=8} :level{slug="2nd" level=7} :level{slug="2nd-dc" level=7}|||
|UNISON|[BASIC]{.tag.is-basic}|:level{slug="3rd" level=4} :level{slug="best" level=4} :level{slug="us" level=4}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{slug="3rd" level=5} :level{slug="best" level=5} :level{slug="us" level=5}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{slug="3rd" level=7} :level{slug="best" level=7} :level{slug="us" level=7}|||
