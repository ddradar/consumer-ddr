---
slug: "red-room"
name: "Red Room"
artist: "Jesper Kyd"
from: "DanceDanceRevolution ULTRAMIX2"
bpm: 120
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['strike']" level=1}|83/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['strike']" level=4}|169/9||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['strike']" level=5}|201/6||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['strike']" level=8}|345/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['strike']" level=4}|144/13||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['strike']" level=5}|205/7||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['strike']" level=8}|332/1||
