---
slug: "diamonds"
name: "Diamonds"
artist: "(J-POP)"
from: "ダイエットチャンネル"
bpm: 111
series:
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
|SINGLE|[BEGINNER]{.tag.is-beginner}|:level{:slug="series['festival']" level=1}|104/1||
|SINGLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=4}|136/0||
|SINGLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=5}|197/0||
|SINGLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=7}|271/0||
|DOUBLE|[BASIC]{.tag.is-basic}|:level{:slug="series['festival']" level=3}|148/0||
|DOUBLE|[DIFFICULT]{.tag.is-difficult}|:level{:slug="series['festival']" level=6}|210/13||
|DOUBLE|[EXPERT]{.tag.is-expert}|:level{:slug="series['festival']" level=7}|278/7||
