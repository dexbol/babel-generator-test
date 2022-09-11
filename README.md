## Reproduce issue [#14918](https://github.com/babel/babel/issues/14918)

### Environment
- node v18.4.0
- macOS 12.5.1
- MacBook Pro (13-inch, M1, 2020)

### Reproduce

Parse `input.js` to ast, and generate code to `output.js`.
```bash
npm install
node ./index.js --retainLines
```
There will be a extra newline at line 10.
It will be gone if set `retainLines` to `false`:
```bash
node ./index.js
```
