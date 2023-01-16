---
slug: "thats-the-way"
name: "THAT'S THE WAY (I LIKE IT)"
artist: "KC & THE SUNSHINE BAND"
bpm: 110
from: "Dancemania CLASSICS"
series:
  "1st-jp":
    slug: "1st-jp"
    title: "Dance Dance Revolution"
    color: "darkviolet"
  "2nd-dc":
    slug: "2nd-dc"
    title: "Dance Dance Revolution 2nd MIX Dreamcast Edition"
    color: "darkorange"
  "best":
    slug: "best"
    title: "Dance Dance Revolution BEST HITS"
    color: "goldenrod"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['best']" level=1}|56/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['1st-jp']" level=2} :level{:slug="series['2nd-dc']" level=1} :level{:slug="series['best']" level=1}|98/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['1st-jp']" level=3} :level{:slug="series['2nd-dc']" level=3} :level{:slug="series['best']" level=3}|124/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['1st-jp']" level=5} :level{:slug="series['2nd-dc']" level=4} :level{:slug="series['best']" level=4}|148/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['1st-jp']" level=4} :level{:slug="series['2nd-dc']" level=2} :level{:slug="series['best']" level=2}|128/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['1st-jp']" level=5} :level{:slug="series['2nd-dc']" level=4} :level{:slug="series['best']" level=4}|144/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['best']" level=5}|168/0||
|COUPLE|[BASIC]{.tag.is-basic}|:level{:slug="series['1st-jp']" level=2} :level{:slug="series['2nd-dc']" level=2}|||
|COUPLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['1st-jp']" level=3} :level{:slug="series['2nd-dc']" level=3}|||
|COUPLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['1st-jp']" level=5} :level{:slug="series['2nd-dc']" level=5}|||
|UNISON|[BASIC]{.tag.is-basic}|:level{:slug="series['best']" level=1}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['best']" level=3}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{:slug="series['best']" level=4}|||
