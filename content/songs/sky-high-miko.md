---
slug: "sky-high-miko"
name: "SKY HIGH"
artist: "DJ MIKO"
from: "Dancemania X3"
bpm: 136
series:
  "gb2":
    slug: "gb2"
    title: "Dance Dance Revolution GB2"
    color: "darkgreen"
  "extra":
    slug: "extra"
    title: "Dance Dance Revolution EXTRA MIX"
    color: "deeppink"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['party']" level=1}|57/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['gb2']" level=2} :level{:slug="series['extra']" level=2} :level{:slug="series['party']" level=2}|113/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['gb2']" level=4} :level{:slug="series['extra']" level=4} :level{:slug="series['party']" level=4}|128/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['gb2']" level=7} :level{:slug="series['extra']" level=7} :level{:slug="series['party']" level=7}|244/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['party']" level=3}|122/3||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['party']" level=5}|184/34||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['party']" level=7}|240/1||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=2}|113/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=4}|128/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=7}|244/0||

## メモ

- [Dance Dance Revolution EXTRA MIX](/series/extra)のDOUBLE譜面は、SINGLE譜面と同一。(1P側にSINGLE譜面が流れる)
