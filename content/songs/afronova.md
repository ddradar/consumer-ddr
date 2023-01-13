---
slug: "afronova"
name: "AFRONOVA"
artist: "RE-VENGE"
from: "DanceDanceRevolution 3rdMIX"
bpm: 200
series:
  "3rd":
    slug: "3rd"
    title: "Dance Dance Revolution 3rd MIX"
    color: "crimson"
  "gb2":
    slug: "gb2"
    title: "Dance Dance Revolution GB2"
    color: "darkgreen"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['us']" level=1} :level{:slug="series['max2-us']" level=2} :level{:slug="series['ext-jp']" level=2}|108/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=5} :level{:slug="series['us']" level=5} :level{:slug="series['max2-us']" level=5} :level{:slug="series['ext-jp']" level=5}|214/0||
|SINGLE|[BASIC (Omitted)]{.tag.is-basic}|:level{:slug="series['gb2']" level=5}|210/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=7} :level{:slug="series['us']" level=7} :level{:slug="series['max2-us']" level=7} :level{:slug="series['ext-jp']" level=7}|244/0||
|SINGLE|[DIFFICULT (Omitted)]{.tag.is-difficult}|:level{:slug="series['gb2']" level=7}|240/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=9} :level{:slug="series['us']" level=9} :level{:slug="series['max2-us']" level=9} :level{:slug="series['ext-jp']" level=9}|370/0||
|SINGLE|[EXPERT (Omitted)]{.tag.is-expert}|:level{:slug="series['gb2']" level=9}|360/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=6} :level{:slug="series['us']" level=6} :level{:slug="series['max2-us']" level=6} :level{:slug="series['ext-jp']" level=6}|233/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=7} :level{:slug="series['us']" level=7} :level{:slug="series['max2-us']" level=7} :level{:slug="series['ext-jp']" level=7}|245/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=9} :level{:slug="series['us']" level=9} :level{:slug="series['max2-us']" level=9} :level{:slug="series['ext-jp']" level=9}|357/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=5} :level{:slug="series['us']" level=5}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=7} :level{:slug="series['us']" level=7}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=9} :level{:slug="series['us']" level=9}|||

## メモ

- [Dance Dance Revolution GB2](/series/gb2/)の譜面は三連符がなくなっている。(CUT2相当)
