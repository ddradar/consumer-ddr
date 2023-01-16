---
slug: "end-of-the-century"
name: "END OF THE CENTURY"
artist: "NO. 9"
from: "DanceDanceRevolution 3rdMIX"
bpm: 171
series:
  "3rd":
    slug: "3rd"
    title: "Dance Dance Revolution 3rd MIX"
    color: "crimson"
  "best":
    slug: "best"
    title: "Dance Dance Revolution BEST HITS"
    color: "goldenrod"
  "konamix":
    slug: "konamix"
    title: "Dance Dance Revolution KONAMIX"
    color: "orange"
  "max2-us":
    slug: "max2-us"
    title: "DDRMAX2 Dance Dance Revolution"
    color: "orange"
  "party":
    slug: "party"
    title: "Dance Dance Revolution Party Collection"
    color: "hotpink"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['best']" level=1} :level{:slug="series['max2-us']" level=1} :level{:slug="series['party']" level=1}|111/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=4} :level{:slug="series['best']" level=4} :level{:slug="series['konamix']" level=4} :level{:slug="series['max2-us']" level=4} :level{:slug="series['party']" level=4}|231/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=7} :level{:slug="series['best']" level=7} :level{:slug="series['konamix']" level=7} :level{:slug="series['max2-us']" level=7} :level{:slug="series['party']" level=7}|307/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=8} :level{:slug="series['best']" level=8} :level{:slug="series['konamix']" level=8} :level{:slug="series['max2-us']" level=9} :level{:slug="series['party']" level=9}|349/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=5} :level{:slug="series['best']" level=5} :level{:slug="series['konamix']" level=5} :level{:slug="series['max2-us']" level=5} :level{:slug="series['party']" level=5}|231/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=6} :level{:slug="series['best']" level=6} :level{:slug="series['konamix']" level=6} :level{:slug="series['max2-us']" level=6} :level{:slug="series['party']" level=6}|245/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=9} :level{:slug="series['best']" level=9} :level{:slug="series['konamix']" level=9} :level{:slug="series['max2-us']" level=9} :level{:slug="series['party']" level=9}|390/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=4} :level{:slug="series['best']" level=4}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=7} :level{:slug="series['best']" level=7}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=8} :level{:slug="series['best']" level=8}|||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{:slug="series['konamix']" level=8}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{:slug="series['konamix']" level=4}|222/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['konamix']" level=6}|297/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{:slug="series['konamix']" level=8}|351/0||
