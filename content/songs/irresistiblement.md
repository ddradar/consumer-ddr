---
slug: "irresistiblement"
name: "IRRESISTIBLEMENT"
artist: "WILDSIDE"
from: "Dancemania SPEED 9"
bpm: 166
series:
  "ext-jp":
    slug: "ext-jp"
    title: "Dance Dance Revolution EXTREME"
    color: "green"
  "ext2":
    slug: "ext2"
    title: "Dance Dance Revolution EXTREME 2"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-jp']" level=1} :level{:slug="series['ext2']" level=1}|88/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-jp']" level=3} :level{:slug="series['ext2']" level=3}|135/10||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-jp']" level=6} :level{:slug="series['ext2']" level=6}|220/3||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-jp']" level=9} :level{:slug="series['ext2']" level=9}|355/3||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['ext-jp']" level=3} :level{:slug="series['ext2']" level=3}|110/3||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['ext-jp']" level=6} :level{:slug="series['ext2']" level=6}|228/3||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['ext-jp']" level=8} :level{:slug="series['ext2']" level=8}|312/6||
