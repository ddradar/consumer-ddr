---
slug: "catch-it"
name: "Catch it!"
artist: "TOTAL SCIENCE"
from: "beatmania 6thMIX -THE UK UNDERGROUND MUSIC-"
bpm: 174
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['strike']" level=1}|113/3||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['strike']" level=3}|177/3||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['strike']" level=6}|211/20||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['strike']" level=8}|311/13||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['strike']" level=4}|160/33||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['strike']" level=6}|237/1||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['strike']" level=7}|271/2||
