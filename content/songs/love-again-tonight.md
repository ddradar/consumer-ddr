---
slug: "love-again-tonight"
name: "LOVE AGAIN TONIGHT (For Melissa MIX)"
artist: "NAOKI feat. PAULA TERRY"
from: "DanceDanceRevolution 4thMIX"
bpm: 150
series:
  "4th":
    slug: "4th"
    title: "Dance Dance Revolution 4thMIX"
    color: "midnightblue"
  "gb3":
    slug: "gb3"
    title: "Dance Dance Revolution GB3"
    color: "goldenrod"
  "max-us":
    slug: "max-us"
    title: "DDRMAX Dance Dance Revolution"
    color: "darkorchid"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['festival']" level=1}|122/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['4th']" level=4} :level{:slug="series['gb3']" level=4} :level{:slug="series['max-us']" level=4} :level{:slug="series['festival']" level=4}|191/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['4th']" level=6} :level{:slug="series['gb3']" level=6} :level{:slug="series['max-us']" level=6} :level{:slug="series['festival']" level=6}|234/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['4th']" level=7} :level{:slug="series['gb3']" level=7} :level{:slug="series['max-us']" level=7} :level{:slug="series['festival']" level=7}|306/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['4th']" level=4} :level{:slug="series['max-us']" level=4} :level{:slug="series['festival']" level=4}|180/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['4th']" level=6} :level{:slug="series['max-us']" level=6} :level{:slug="series['festival']" level=6}|235/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['4th']" level=7} :level{:slug="series['max-us']" level=7} :level{:slug="series['festival']" level=7}|281/0||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{:slug="series['4th']" level=6}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{:slug="series['4th']" level=4}|181/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['4th']" level=6}|228/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{:slug="series['4th']" level=7}|283/0||
