# Rollup Name Mangling Issue

```
npm install
npm test
```

Open bundle.js in http://sokra.github.io/source-map-visualization/
and hover over _Foo and BaseFoo to see that this wasn't uglify or sorcery that
originates the issue.

This makes debugging painful because you lose the ability
to get the value when you hover over the variable.

Also, transforms that change identifiers should place the original in names
in the source map.
