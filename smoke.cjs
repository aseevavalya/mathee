const fs=require('node:fs');
const vm=require('node:vm');
const context=vm.createContext({katex:require('katex')});
for(const file of ['math-content.js','app.js'])vm.runInContext(fs.readFileSync(file,'utf8'),context);
vm.runInContext(`
let count=0;
for(const t of topics){
 math(t.formula,true);
 for(const row of t.rows){if(row.length!==3)throw Error('Invalid row');row.forEach(rich);count++;}
 rich(t.warning);t.example.forEach(rich);
}
if(count!==78)throw Error('Rule count '+count);
`,context);
console.log('Passed: all 78 rules, conditions, examples and warnings render as valid mathematical notation.');
