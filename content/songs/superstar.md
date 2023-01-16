---
slug: "superstar"
name: "Superstar"
artist: "Jamelia"
from: "Thank You"
bpm: 110
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['festival']" level=1}|81/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=4}|125/3||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=5}|183/21||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=7}|282/22||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=3}|128/11||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=6}|192/8||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=7}|236/9||
