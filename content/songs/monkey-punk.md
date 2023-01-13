---
slug: "monkey-punk"
name: "Monkey Punk"
artist: "Big Idea"
from: "DanceDanceRevolution ULTRAMIX2"
bpm: 180
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['strike']" level=2}|151/16||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['strike']" level=4}|222/30||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['strike']" level=5}|268/16||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['strike']" level=6}|322/17||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['strike']" level=4}|223/22||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['strike']" level=6}|258/12||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['strike']" level=7}|260/18||
