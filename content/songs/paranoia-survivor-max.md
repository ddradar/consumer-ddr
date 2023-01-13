---
slug: "paranoia-survivor-max"
name: "PARANOIA survivor MAX"
artist: "290"
from: ""
bpm: "145-290"
series:
  "max-jp":
    slug: "max-jp"
    title: "DDRMAX -DanceDanceRevolution 6thMIX-"
    color: "blue"
  "max-us":
    slug: "max-us"
    title: "DDRMAX Dance Dance Revolution"
    color: "darkorchid"
  "max2-jp":
    slug: "max2-jp"
    title: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
    color: "black"
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
  "ext-us":
    slug: "ext-us"
    title: "Dance Dance Revolution EXTREME"
    color: "seagreen"
  "festival":
    slug: "festival"
    title: "DDR FESTIVAL Dance Dance Revolution"
    color: "seagreen"
  "ext2":
    slug: "ext2"
    title: "Dance Dance Revolution EXTREME 2"
    color: "seagreen"
  "strike":
    slug: "strike"
    title: "DanceDanceRevolution STRIKE"
    color: "dodgerblue"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="ext-jp" level=3} :level{slug="ext2" level=3}|121/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="ext-jp" level=5} :level{slug="ext2" level=5}|258/2||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-jp" level=8} :level{slug="ext2" level=8}|377/2||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-jp" level="10+"} :level{slug="ext2" level="10+"}|567/5||
|SINGLE|[CHALLENGE]{.tag.is-challenge}|:level{slug="ext-jp" level="10+"} :level{slug="ext2" level="10+"}|613/4||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="ext-jp" level=6} :level{slug="ext2" level=6}|258/2||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="ext-jp" level=8} :level{slug="ext2" level=8}|375/3||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="ext-jp" level="10+"} :level{slug="ext2" level="10+"}|533/3||
|DOUBLE|[CHALLENGE]{.tag.is-challenge}|:level{slug="ext-jp" level="10+"} :level{slug="ext2" level="10+"}|613/4||
