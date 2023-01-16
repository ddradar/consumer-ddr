---
slug: "hysteria"
name: "HYSTERIA"
artist: "NAOKI 190"
from: "DanceDanceRevolution Solo BASS MIX"
bpm: 190
series:
  "extra":
    slug: "extra"
    title: "Dance Dance Revolution EXTRA MIX"
    color: "deeppink"
  "konamix":
    slug: "konamix"
    title: "Dance Dance Revolution KONAMIX"
    color: "orange"
  "max2-us":
    slug: "max2-us"
    title: "DDRMAX2 Dance Dance Revolution"
    color: "orange"
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['max2-us']" level=2} :level{:slug="series['festival']" level=2}|119/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=4} :level{:slug="series['konamix']" level=4} :level{:slug="series['max2-us']" level=4} :level{:slug="series['festival']" level=4}|224/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=6} :level{:slug="series['konamix']" level=6} :level{:slug="series['max2-us']" level=6} :level{:slug="series['festival']" level=6}|251/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=8} :level{:slug="series['konamix']" level=8} :level{:slug="series['max2-us']" level=8} :level{:slug="series['festival']" level=8}|303/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=3} :level{:slug="series['konamix']" level=3} :level{:slug="series['max2-us']" level=3} :level{:slug="series['festival']" level=3}|158/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=5} :level{:slug="series['konamix']" level=5} :level{:slug="series['max2-us']" level=5} :level{:slug="series['festival']" level=5}|279/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=7} :level{:slug="series['konamix']" level=7} :level{:slug="series['max2-us']" level=7} :level{:slug="series['festival']" level=7}|286/0||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{:slug="series['konamix']" level=7}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=5} :level{:slug="series['konamix']" level=5}|242/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=6} :level{:slug="series['konamix']" level=6}|251/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=8} :level{:slug="series['konamix']" level=8}|303/0||
