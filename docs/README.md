---
title: 2018-6-20 JS记录笔记
tags: javascript,脚本
grammar_cjkRuby: true
---


``` javascript
Array . prototype . forEach . call (document . querySelectorAll ('*'), dom => dom . style . outline = `1px solid #${parseInt(Math.random() * Math.pow(2,24)).toString(16)}` )
```

``` javascript
[]. forEach . call ($$ ("*"), function (a ){a . style . outline = "1px solid #"+(~~(Math . random ()*(1 << 24 ))). toString (16 ) })
```

