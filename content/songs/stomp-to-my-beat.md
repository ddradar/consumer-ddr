---
slug: "stomp-to-my-beat"
name: "Stomp to my beat"
artist: "JS16"
from: "Dancemania WINTERS"
bpm: 134
series:
  "2nd":
    slug: "2nd"
    title: "Dance Dance Revolution 2nd ReMIX"
    color: "mediumblue"
  "2nd-dc":
    slug: "2nd-dc"
    title: "Dance Dance Revolution 2nd MIX Dreamcast Edition"
    color: "darkorange"
  "best":
    slug: "best"
    title: "Dance Dance Revolution BEST HITS"
    color: "goldenrod"
  "max-us":
    slug: "max-us"
    title: "DDRMAX Dance Dance Revolution"
    color: "darkorchid"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['best']" level=1}|93/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5} :level{:slug="series['best']" level=5} :level{:slug="series['max-us']" level=5}|167/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6} :level{:slug="series['best']" level=6} :level{:slug="series['max-us']" level=6}|181/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['2nd']" level=7} :level{:slug="series['2nd-dc']" level=7} :level{:slug="series['best']" level=7} :level{:slug="series['max-us']" level=7}|248/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5} :level{:slug="series['best']" level=5} :level{:slug="series['max-us']" level=5}|177/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6} :level{:slug="series['best']" level=6} :level{:slug="series['max-us']" level=6}|177/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['best']" level=7} :level{:slug="series['max-us']" level=7}|201/0||
|COUPLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5}|144/0||
|COUPLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6}|153/0||
|COUPLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['2nd']" level=7} :level{:slug="series['2nd-dc']" level=7}|239/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{:slug="series['best']" level=5}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['best']" level=6}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{:slug="series['best']" level=7}|||
