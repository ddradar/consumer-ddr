---
slug: "route-80s"
name: "route 80s"
artist: "sampling masters MEGA"
from: "beatmania IIDX 6th style"
bpm: "122-244"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['strike']" level=2}|99/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['strike']" level=4}|155/20||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['strike']" level=6}|247/15||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['strike']" level=8}|319/1||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['strike']" level=4}|118/16||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['strike']" level=6}|228/11||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['strike']" level=9}|330/12||
