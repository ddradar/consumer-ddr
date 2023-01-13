---
slug: "celebrate-nite"
name: "CELEBRATE NITE"
artist: "N.M.R."
from: "Dancing Stage featuring TRUE KiSS DESTiNATiON"
bpm: 144
series:
  "tkd":
    slug: "tkd"
    title: "Dancing Stage featuring TRUE KiSS DESTiNATiON"
    color: "midnightblue"
  "gb3":
    slug: "gb3"
    title: "Dance Dance Revolution GB3"
    color: "goldenrod"
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
|SINGLE|[FREE]{.tag.is-beginner}|:level{slug="tkd" level="?"}|81/0||
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{slug="max2-us" level=1} :level{slug="party" level=1}|92/0||
|SINGLE|[BASIC]{.tag.is-basic}|:level{slug="tkd" level=4.5} :level{slug="gb3" level=4} :level{slug="extra" level=4} :level{slug="konamix" level=4} :level{slug="max2-us" level=4} :level{slug="party" level=4}|171/0||
|SINGLE|[TRICK (TKD)]{.tag.is-difficult}|:level{slug="tkd" level=5}|198/0||
|SINGLE|[ANOTHER (GB3)]{.tag.is-difficult}|:level{slug="gb3" level=6}|156/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="extra" level=6} :level{slug="konamix" level=6} :level{slug="max2-us" level=6} :level{slug="party" level=6}|198/0||
|SINGLE|[MANIAC (TKD)]{.tag.is-expert}|:level{slug="tkd" level=7}|233/0||
|SINGLE|[MANIAC (GB3)]{.tag.is-expert}|:level{slug="gb3" level=7}|242/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{slug="extra" level=7} :level{slug="konamix" level=7} :level{slug="max2-us" level=7} :level{slug="party" level=7}|277/0||
|SINGLE|[SUPER MANIAC]{.tag.is-challenge}|:level{slug="tkd" level="?"}|278/0||
|DOUBLE|[FREE]{.tag.is-beginner}|:level{slug="tkd" level="?"}|||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{slug="tkd" level=3.5} :level{slug="extra" level=4} :level{slug="konamix" level=4} :level{slug="max2-us" level=4} :level{slug="party" level=4}|178/0||
|DOUBLE|[TRICK (TKD)]{.tag.is-difficult}|:level{slug="tkd" level=8.5}|189/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{slug="extra" level=6} :level{slug="konamix" level=6} :level{slug="max2-us" level=6} :level{slug="party" level=6}|208/0||
|DOUBLE|[MANIAC (TKD)]{.tag.is-expert}|:level{slug="tkd" level="?"}|233/0||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{slug="extra" level=7} :level{slug="konamix" level=7} :level{slug="max2-us" level=7} :level{slug="party" level=7}|238/0||
|COUPLE|[BASIC]{.tag.is-basic}|:level{slug="tkd" level=4.5}|||
|COUPLE|[TRICK]{.tag.is-difficult}|:level{slug="tkd" level=5}|||
|COUPLE|[MANIAC]{.tag.is-expert}|:level{slug="tkd" level=7}|||
|BATTLE|[BATTLE]{.tag.is-basic}|:level{slug="konamix" level=5}|||
|6-PANELS|[BASIC]{.tag.is-basic}|:level{slug="extra" level=4} :level{slug="konamix" level=4}|172/0||
|6-PANELS|[TRICK]{.tag.is-difficult}|:level{slug="extra" level=6} :level{slug="konamix" level=6}|196/0||
|6-PANELS|[MANIAC]{.tag.is-expert}|:level{slug="extra" level=8} :level{slug="konamix" level=8}|278/0||
