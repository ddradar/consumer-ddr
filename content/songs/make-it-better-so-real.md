---
slug: "make-it-better-so-real"
name: "MAKE IT BETTER (So-REAL MIX)"
artist: "mitsu-O! SUMMER"
from: "DanceDanceRevolution 2ndMIX"
bpm: 118
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['festival']" level=1}|90/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5} :level{:slug="series['3rd']" level=5} :level{:slug="series['konamix']" level=5} :level{:slug="series['festival']" level=5}|159/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6} :level{:slug="series['3rd']" level=6} :level{:slug="series['konamix']" level=6} :level{:slug="series['festival']" level=6}|191/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['2nd']" level=8} :level{:slug="series['2nd-dc']" level=8} :level{:slug="series['3rd']" level=8} :level{:slug="series['konamix']" level=8} :level{:slug="series['festival']" level=8}|208/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5} :level{:slug="series['3rd']" level=5} :level{:slug="series['konamix']" level=5} :level{:slug="series['festival']" level=5}|135/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=7} :level{:slug="series['2nd-dc']" level=7} :level{:slug="series['3rd']" level=7} :level{:slug="series['konamix']" level=7} :level{:slug="series['festival']" level=7}|183/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['konamix']" level=8} :level{:slug="series['festival']" level=8}|237/0||
|COUPLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5}|140/0||
|COUPLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6}|175/0||
|COUPLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['2nd']" level=8} :level{:slug="series['2nd-dc']" level=8}|195/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=5}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=6}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=8}|||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{:slug="series['konamix']" level=5}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{:slug="series['konamix']" level=5}|159/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['konamix']" level=6}|191/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{:slug="series['konamix']" level=8}|208/0||
