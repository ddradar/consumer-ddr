---
slug: "baila-baila"
name: "BAILA! BAILA!"
artist: "DANDY MINERO"
from: "Dance Maniax"
bpm: 130
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=3}|134/23||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=6}|230/22||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=7}|279/25||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=3}|129/15||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=5}|209/17||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=8}|243/20||
