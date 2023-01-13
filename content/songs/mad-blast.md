---
slug: "mad-blast"
name: "MAD BLAST"
artist: "THE INFECTION"
from: "Dance Maniax"
bpm: 180
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=4}|207/35||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=6}|318/37||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=10}|443/23||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=4}|208/35||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=7}|316/39||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=9}|420/39||
