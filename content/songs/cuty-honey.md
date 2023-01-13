---
slug: "cuty-honey"
name: "キューティーハニー"
artist: "(アニメ)"
from: "pop'n music アニメロ"
bpm: 156
series:
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['festival']" level=1}|88/1||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=4}|130/9||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=6}|190/47||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=8}|289/65||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=3}|114/12||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=5}|158/16||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=7}|211/14||
