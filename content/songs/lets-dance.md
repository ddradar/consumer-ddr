---
slug: "lets-dance"
name: "Let's Dance"
artist: "DAVID BOWIE"
from: "DISCO VIKING"
bpm: 114
series:
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['strike']" level=1}|78/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['strike']" level=4}|120/8||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['strike']" level=6}|195/23||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['strike']" level=7}|242/7||
|SINGLE|[CHALLENGE]{.tag.is-challenge}|:level{:slug="series['strike']" level=8}|289/13||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['strike']" level=4}|120/8||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['strike']" level=6}|195/23||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['strike']" level=8}|244/11||
|DOUBLE|[CHALLENGE]{.tag.is-challenge}|:level{:slug="series['strike']" level=8}|288/8||
