---
slug: "dam-dariram"
name: "DAM DARIRAM"
artist: "JOGA"
from: "Dancemania X3"
bpm: 142
series:
  "3rd":
    slug: "3rd"
    title: "Dance Dance Revolution 3rd MIX"
    color: "crimson"
  "gb":
    slug: "gb"
    title: "Dance Dance Revolution GB"
    color: "tomato"
  "gb2":
    slug: "gb2"
    title: "Dance Dance Revolution GB2"
    color: "darkgreen"
  "best":
    slug: "best"
    title: "Dance Dance Revolution BEST HITS"
    color: "goldenrod"
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
|SINGLE|[BEGINNER (old)]{.tag.is-beginner}|:level{:slug="series['best']" level=1}|65/0||
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['party']" level=1}|78/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=4} :level{:slug="series['gb']" level="?"} :level{:slug="series['gb2']" level=4} :level{:slug="series['best']" level=4} :level{:slug="series['party']" level=4}|133/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=6} :level{:slug="series['gb']" level="?"} :level{:slug="series['gb2']" level=6} :level{:slug="series['best']" level=6} :level{:slug="series['party']" level=6}|219/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=8} :level{:slug="series['gb']" level="?"} :level{:slug="series['gb2']" level=8} :level{:slug="series['best']" level=8} :level{:slug="series['party']" level=8}|298/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=4} :level{:slug="series['best']" level=4} :level{:slug="series['party']" level=4}|192/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=5} :level{:slug="series['best']" level=5} :level{:slug="series['party']" level=5}|195/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=8} :level{:slug="series['best']" level=8} :level{:slug="series['party']" level=8}|282/0||
|UNISON|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=4} :level{:slug="series['best']" level=4}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=6} :level{:slug="series['best']" level=6}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=8} :level{:slug="series['best']" level=8}|||

## メモ

- [Dance Dance Revolution GB](/series/gb/)はFREE MODEでのみ選曲可能。
