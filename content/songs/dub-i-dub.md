---
slug: "dub-i-dub"
name: "DUB I DUB"
artist: "ME & MY"
from: "Dancemania 1"
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
  "gb":
    slug: "gb"
    title: "Dance Dance Revolution GB"
    color: "tomato"
  "best":
    slug: "best"
    title: "Dance Dance Revolution BEST HITS"
    color: "goldenrod"
  "us":
    slug: "us"
    title: "Dance Dance Revolution"
    color: "mediumvioletred"
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
|SINGLE|[BEGINNER (old)]{.tag.is-beginner}|:level{slug="best" level=1} :level{slug="us" level=1}|79/0||
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="party" level=1}|80/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="2nd" level=4} :level{slug="2nd-dc" level=4} :level{slug="gb" level=4} :level{slug="best" level=4} :level{slug="us" level=4} :level{slug="party" level=4}|134/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="2nd" level=6} :level{slug="2nd-dc" level=6} :level{slug="gb" level=6} :level{slug="best" level=6} :level{slug="us" level=6} :level{slug="party" level=6}|205/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="2nd" level=8} :level{slug="2nd-dc" level=8} :level{slug="gb" level=8} :level{slug="best" level=8} :level{slug="us" level=8}|210/0||
|SINGLE|[EXPERT (new)]{.tag.is-challenge}|:level{slug="party" level=8}|273/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="2nd" level=5} :level{slug="2nd-dc" level=5} :level{slug="best" level=5} :level{slug="us" level=5} :level{slug="party" level=5}|134/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="2nd" level=7} :level{slug="2nd-dc" level=7} :level{slug="best" level=7} :level{slug="us" level=7} :level{slug="party" level=7}|199/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="best" level=7} :level{slug="us" level=7} :level{slug="party" level=7}|194/0||
|COUPLE|[BASIC]{.tag.is-basic}|:level{slug="2nd" level=4} :level{slug="2nd-dc" level=4} :level{slug="gb" level=4}|128/0||
|COUPLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="2nd" level=6} :level{slug="2nd-dc" level=6} :level{slug="gb" level=6}|205/0||
|COUPLE|[EXPERT]{.tag.is-expert}|:level{slug="2nd" level=8} :level{slug="2nd-dc" level=8} :level{slug="gb" level=8}|210/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{slug="best" level=4} :level{slug="us" level=4}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{slug="best" level=6} :level{slug="us" level=6}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{slug="best" level=8} :level{slug="us" level=8}|||
