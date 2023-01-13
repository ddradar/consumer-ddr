---
slug: "dream-a-dream"
name: "DREAM A DREAM"
artist: "CAPTAIN JACK"
from: "The Captain's Revenge"
bpm: 141
series:
  "4th":
    slug: "4th"
    title: "Dance Dance Revolution 4thMIX"
    color: "midnightblue"
  "gb3":
    slug: "gb3"
    title: "Dance Dance Revolution GB3"
    color: "goldenrod"
  "max2-us":
    slug: "max2-us"
    title: "DDRMAX2 Dance Dance Revolution"
    color: "orange"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="max2-us" level=1} :level{slug="party" level=1}|92/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="4th" level=4} :level{slug="gb3" level=4} :level{slug="max2-us" level=4} :level{slug="party" level=4}|140/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="4th" level=6} :level{slug="gb3" level=6} :level{slug="max2-us" level=6} :level{slug="party" level=6}|187/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="4th" level=7} :level{slug="gb3" level=7} :level{slug="max2-us" level=7} :level{slug="party" level=7}|251/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="4th" level=4} :level{slug="max2-us" level=4} :level{slug="party" level=4}|149/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="4th" level=6} :level{slug="max2-us" level=6} :level{slug="party" level=6}|177/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="4th" level=7} :level{slug="max2-us" level=7} :level{slug="party" level=7}|246/0||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{slug="4th" level=2}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{slug="4th" level=4}|144/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{slug="4th" level=5}|198/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{slug="4th" level=7}|248/0||
