---
slug: "sexy-planet"
name: "SEXY PLANET"
artist: "Crystal Aliens"
from: "Dancing Stage featuring TRUE KiSS DESTiNATiON"
bpm: 180
series:
  "tkd":
    slug: "tkd"
    title: "Dancing Stage featuring TRUE KiSS DESTiNATiON"
    color: "midnightblue"
  "extra":
    slug: "extra"
    title: "Dance Dance Revolution EXTRA MIX"
    color: "deeppink"
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
|SINGLE|[FREE]{.tag.is-beginner}|:level{:slug="series['tkd']" level="?"}|74/0||
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['ext-jp']" level=2} :level{:slug="series['ext2']" level=2}|75/0||
|SINGLE|[BASIC (TKD)]{.tag.is-basic}|:level{:slug="series['tkd']" level=5.5}|219/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=5} :level{:slug="series['ext-jp']" level=5} :level{:slug="series['ext2']" level=5}|201/0||
|SINGLE|[TRICK (TKD)]{.tag.is-difficult}|:level{:slug="series['tkd']" level=6}|229/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=6} :level{:slug="series['ext-jp']" level=6} :level{:slug="series['ext2']" level=6}|221/0||
|SINGLE|[MANIAC (TKD)]{.tag.is-expert}|:level{:slug="series['tkd']" level=8}|239/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=7} :level{:slug="series['ext-jp']" level=7} :level{:slug="series['ext2']" level=7}|262/0||
|SINGLE|[SUPER MANIAC]{.tag.is-challenge}|:level{:slug="series['tkd']" level="?"}|267/0||
|DOUBLE|[FREE]{.tag.is-beginner}|:level{:slug="series['tkd']" level="?"}|||
|DOUBLE|[BASIC (TKD)]{.tag.is-basic}|:level{:slug="series['tkd']" level=6.5}|211/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=4} :level{:slug="series['ext-jp']" level=4} :level{:slug="series['ext2']" level=4}|175/0||
|DOUBLE|[TRICK (TKD)]{.tag.is-difficult}|:level{:slug="series['tkd']" level=9}|217/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=5} :level{:slug="series['ext-jp']" level=5} :level{:slug="series['ext2']" level=5}|207/0||
|DOUBLE|[MANIAC (TKD)]{.tag.is-expert}|:level{:slug="series['tkd']" level="?"}|242/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=7} :level{:slug="series['ext-jp']" level=7} :level{:slug="series['ext2']" level=7}|236/0||
|COUPLE|[BASIC]{.tag.is-basic}|:level{:slug="series['tkd']" level=5.5}|||
|COUPLE|[TRICK]{.tag.is-difficult}|:level{:slug="series['tkd']" level=6}|||
|COUPLE|[MANIAC]{.tag.is-expert}|:level{:slug="series['tkd']" level=8}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{:slug="series['extra']" level=4}|198/0||
|6-PANELS|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['extra']" level=6}|237/0||
|6-PANELS|[EXPERT]{.tag.is-expert}|:level{:slug="series['extra']" level=7}|270/0||
