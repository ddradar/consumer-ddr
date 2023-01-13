---
slug: "am-3p"
name: "AM-3P"
artist: "KTz"
from: "DanceDanceRevolution 2ndMIX"
bpm: 130
series:
  "2nd":
    slug: "2nd"
    title: "Dance Dance Revolution 2nd ReMIX"
    color: "mediumblue"
  "2nd-dc":
    slug: "2nd-dc"
    title: "Dance Dance Revolution 2nd MIX Dreamcast Edition"
    color: "darkorange"
  "3rd":
    slug: "3rd"
    title: "Dance Dance Revolution 3rd MIX"
    color: "crimson"
  "gb":
    slug: "gb"
    title: "Dance Dance Revolution GB"
    color: "tomato"
  "us":
    slug: "us"
    title: "Dance Dance Revolution"
    color: "mediumvioletred"
  "max-us":
    slug: "max-us"
    title: "DDRMAX Dance Dance Revolution"
    color: "darkorchid"
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
|SINGLE|[BEGINNER (old)]{.tag.is-beginner}|:level{:slug="series['us']" level=1}|69/0||
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=1} :level{:slug="series['party']" level=1}|74/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5} :level{:slug="series['3rd']" level=5} :level{:slug="series['gb']" level=5} :level{:slug="series['us']" level=5} :level{:slug="series['max-us']" level=5} :level{:slug="series['max2-us']" level=5} :level{:slug="series['party']" level=5}|164/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6} :level{:slug="series['3rd']" level=6} :level{:slug="series['gb']" level=6} :level{:slug="series['us']" level=6} :level{:slug="series['max-us']" level=6} :level{:slug="series['max2-us']" level=6} :level{:slug="series['party']" level=6}|195/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['2nd']" level=8} :level{:slug="series['2nd-dc']" level=8} :level{:slug="series['3rd']" level=8} :level{:slug="series['gb']" level=8} :level{:slug="series['us']" level=8} :level{:slug="series['max-us']" level=8} :level{:slug="series['max2-us']" level=8} :level{:slug="series['party']" level=8}|244/0||
|SINGLE|[CHALLENGE]{.tag.is-challenge}||264/2||
|SINGLE|["CHAOS" Special]{.tag.is-challenge}||309/4||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5} :level{:slug="series['3rd']" level=5} :level{:slug="series['us']" level=5} :level{:slug="series['max-us']" level=5} :level{:slug="series['max2-us']" level=5} :level{:slug="series['party']" level=5}|166/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6} :level{:slug="series['3rd']" level=6} :level{:slug="series['us']" level=6} :level{:slug="series['max-us']" level=6} :level{:slug="series['max2-us']" level=6} :level{:slug="series['party']" level=6}|194/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['us']" level=7} :level{:slug="series['max-us']" level=7} :level{:slug="series['max2-us']" level=7} :level{:slug="series['party']" level=7}|240/0||
|DOUBLE|[CHALLENGE]{.tag.is-challenge}||264/2||
|DOUBLE|["CHAOS" Special]{.tag.is-challenge}||276/2||
|COUPLE|[BASIC]{.tag.is-basic}|:level{:slug="series['2nd']" level=5} :level{:slug="series['2nd-dc']" level=5} :level{:slug="series['gb']" level=5}|||
|COUPLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['2nd']" level=6} :level{:slug="series['2nd-dc']" level=6} :level{:slug="series['gb']" level=6}|||
|COUPLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['2nd']" level=8} :level{:slug="series['2nd-dc']" level=8} :level{:slug="series['gb']" level=8}|||
|UNISON|[BASIC]{.tag.is-basic}|:level{:slug="series['3rd']" level=5} ::level{:slug="series['us']" level=5}|||
|UNISON|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['3rd']" level=6} ::level{:slug="series['us']" level=6}|||
|UNISON|[EXPERT]{.tag.is-expert}|:level{:slug="series['3rd']" level=8} ::level{:slug="series['us']" level=8}|||

## メモ

- ["CHAOS" Special]{.tag.is-challenge}は「AM-3P ("CHAOS" Special)」という別楽曲として収録。
