---
slug: "bumble-bee"
name: "BUMBLE BEE"
artist: "BAMBEE"
from: "Dancemania X5"
bpm: 138
series:
  "3rd":
    slug: "3rd"
    title: "Dance Dance Revolution 3rd MIX"
    color: "crimson"
  "4th":
    slug: "4th"
    title: "Dance Dance Revolution 4thMIX"
    color: "midnightblue"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=3} :level{:slug="series['4th']" level=3}|133/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['4th']" level=5}|190/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug=""4th level=7}|257/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=3} :level{:slug="series['4th']" level=3}|135/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['4th']" level=5}|177/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['4th']" level=7}|244/0||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{:slug="series['4th']" level=4}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{:slug="series['4th']" level=4}|149/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['4th']" level=5}|186/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{slug=""4th level=7}|229/0||

## メモ

- [Dance Dance Revolution 3rd MIX](/series/3rd/)は、「BONUS TRACK」からのみ選曲可能。
