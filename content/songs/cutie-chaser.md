---
slug: "cutie-chaser"
name: "CUTIE CHASER"
artist: "CLUB SPICE"
from: "DanceDanceRevolution 3rdMIX CS"
bpm: 126
series:
  "3rd":
    slug: "3rd"
    title: "Dance Dance Revolution 3rd MIX"
    color: "crimson"
  "konamix":
    slug: "konamix"
    title: "Dance Dance Revolution KONAMIX"
    color: "orange"
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
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=3} :level{:slug="series['konamix']" level=3}|148/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=4} :level{:slug="series['konamix']" level=4}|185/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=7} :level{:slug="series['konamix']" level=7}|256/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=3} :level{:slug="series['konamix']" level=3}|148/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=5} :level{:slug="series['konamix']" level=5}|186/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=7} :level{:slug="series['konamix']" level=7}|254/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=3}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=4}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=7}|||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{:slug="series['konamix']" level=3}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{:slug="series['konamix']" level=4}|166/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['konamix']" level=6}|207/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{:slug="series['konamix']" level=8}|236/0||
