const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

const pr = new pptxgen();
pr.layout = 'LAYOUT_16x9';
pr.author = '海悟科技 战略洞察部';
pr.title = '海悟科技 机柜级液冷战略洞察 v10 Compact';
pr.subject = '液冷五看三定 77页信息密度加强版';
pr.company = '海悟科技';

const files = fs.readdirSync(__dirname)
  .filter(f => /^s\d{3}\.js$/.test(f))
  .sort()
  .map(f => path.join(__dirname, f));

if (files.length !== 77) {
  console.error(`ERROR: Expected 77 slides, found ${files.length}`);
  process.exit(1);
}

let errors = 0;
files.forEach((f, i) => {
  try {
    const mod = require(f);
    if (typeof mod.createSlide === 'function') {
      mod.createSlide(pr);
      process.stdout.write(`P${i+1} `);
      if ((i+1) % 20 === 0) process.stdout.write('\n');
    }
  } catch (e) {
    console.error(`\nError in ${path.basename(f)}: ${e.message}`);
    errors++;
  }
});

if (errors > 0) {
  console.error(`\n❌ ${errors} errors`);
  process.exit(1);
}

const outDir = path.join(__dirname, '..', 'output');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, '海悟液冷五看三定-v10-Compact.pptx');
pr.writeFile({ fileName: outPath }).then(() => {
  console.log(`\n✅ 77页 Compact PPT 生成完成`);
  console.log(`文件: ${outPath}`);
  const stat = fs.statSync(outPath);
  console.log(`大小: ${(stat.size/1024/1024).toFixed(1)}MB`);
}).catch(e => console.error(e));
