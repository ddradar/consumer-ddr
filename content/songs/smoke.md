---
slug: "smoke"
name: "SMOKE"
artist: "MR. ED JUMPS THE GUN"
from: "Dancemania Winters"
bpm: 135
series:
  "2nd":
    slug: "2nd"
    title: "Dance Dance Revolution 2nd ReMIX"
    color: "mediumblue"
  "2nd-dc":
    slug: "2nd-dc"
    title: "Dance Dance Revolution 2nd MIX Dreamcast Edition"
    color: "darkorange"
  "us":
    slug: "us"
    title: "Dance Dance Revolution"
    color: "mediumvioletred"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['us']" level=1}|66/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=3} :level{:slug="series['2nd-dc']" level=3} :level{:slug="series['us']" level=3}|137/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=4} :level{:slug="series['2nd-dc']" level=4} :level{:slug="series['us']" level=4}|155/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6} :level{:slug="series['us']" level=6}|219/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=4} :level{:slug="series['2nd-dc']" level=4} :level{:slug="series['us']" level=4}|140/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5} :level{:slug="series['us']" level=5}|158/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['us']" level=6}|165/0||
|COUPLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=3} :level{:slug="series['2nd-dc']" level=3}|1P:119/0 2P:120/0||
|COUPLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=4} :level{:slug="series['2nd-dc']" level=4}|1P:141/0 2P:140/0||
|COUPLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6}|1P:202/0 2P:201/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{:slug="series['us']" level=3}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['us']" level=4}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{:slug="series['us']" level=6}|||
