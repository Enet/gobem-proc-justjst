# gobem-proc-justjst
This processor for [gobem](https://github.com/Enet/gobem) makes javascript templates and passes them to callback function. Function is a required argument.

### Example for **build.js**
```javascript
module.exports = function () {
    return [
        ['select', 0, /^components\/(\w+)\/\1\.jst$/],
        ['gobem-proc-justjst', function (templateName, template) {
            storage[templateName] = template;
        }]
    ]; // this array will be used as build instructions
};
```
