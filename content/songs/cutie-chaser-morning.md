---
slug: "cutie-chaser-morning"
name: "CUTIE CHASER (MORNING MIX)"
artist: "CLUB SPICE"
from: "おはスタ Dance Dance Revolution"
bpm: 126
series:
  "oha":
    slug: "oha"
    title: "おはスタ Dance Dance Revolution"
    color: "dodgerblue"
  "max-us":
    slug: "max-us"
    title: "DDRMAX Dance Dance Revolution"
    color: "darkorchid"
  "max2-jp":
    slug: "max2-jp"
    title: "DDRMAX2 -DanceDanceRevolution 7thMIX-"
    color: "black"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}||73/0||
|SINGLE|[BASIC (EASY)]{.tag.is-basic}|:level{:slug="series['oha']" level=2}|89/0||
|SINGLE|[BASIC (old)]{.tag.is-basic}|:level{:slug="series['oha']" level=3}|91/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['max-us']" level=3} :level{:slug="series['max2-jp']" level=2}|91/0||
|SINGLE|[ANOTHER (EASY)]{.tag.is-difficult}|:level{:slug="series['oha']" level=2}|118/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['oha']" level=3} :level{:slug="series['max-us']" level=3} :level{:slug="series['max2-jp']" level=3}|140/0||
|SINGLE|[MANIAC (EASY)]{.tag.is-expert}|:level{:slug="series['oha']" level=3}|122/0||
|SINGLE|[MANIAC (old)]{.tag.is-expert}|:level{:slug="series['oha']" level=5} :level{:slug="series['max-us']" level=5}|151/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=5}|215/8||
|DOUBLE|[BASIC (EASY)]{.tag.is-basic}|:level{:slug="series['oha']" level=3}|84/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['oha']" level=4} :level{:slug="series['max-us']" level=4} :level{:slug="series['max2-jp']" level=2}|86/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['max2-jp']" level=4}|162/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['max2-jp']" level=6}|197/5||
|UNISON|[BASIC (EASY)]{.tag.is-basic}|:level{:slug="series['oha']" level=2}|||
|UNISON|[BASIC]{.tag.is-basic}|:level{:slug="series['oha']" level=3}|||
|UNISON|[ANOTHER (EASY)]{.tag.is-difficult}|:level{:slug="series['oha']" level=2}|||
|UNISON|[ANOTHER]{.tag.is-difficult}|:level{:slug="series['oha']" level=3}|||
|UNISON|[MANIAC (EASY)]{.tag.is-expert}|:level{:slug="series['oha']" level=3}|||
|UNISON|[MANIAC]{.tag.is-expert}|:level{:slug="series['oha']" level=5}|||

## メモ

- [DDRMAX Dance Dance Revolution](/series/max-us)の[DOUBLE/DIFFICULT]{.tag.is-difficult}譜面, [DOUBLE/EXPERT]{.tag.is-expert}譜面は、[DOUBLE/BASIC]{.tag.is-basic}譜面と同一。
