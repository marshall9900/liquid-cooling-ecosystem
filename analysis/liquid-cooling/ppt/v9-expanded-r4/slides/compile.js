const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

const pr = new pptxgen();
pr.layout = 'LAYOUT_16x9'; // 10 x 5.625 inches
pr.author = '海悟科技 战略洞察部';
pr.title = '海悟科技 机柜级液冷战略洞察 v9 Expanded';
pr.subject = '液冷五看三定 103页深度洞察版';
pr.company = '海悟科技';

const files = fs.readdirSync(__dirname)
  .filter(f => /^s\d{3}\.js$/.test(f))
  .sort()
  .map(f => path.join(__dirname, f));

files.forEach((f, i) => {
  try {
    const mod = require(f);
    if (typeof mod.createSlide === 'function') {
      mod.createSlide(pr);
      process.stdout.write(`P${i+1} `);
    }
  } catch (e) {
    console.error(`\nError in ${path.basename(f)}: ${e.message}`);
  }
});

const outDir = path.join(__dirname, '..', 'output');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, '海悟液冷五看三定-v9-Expanded-R4.pptx');
pr.writeFile({ fileName: outPath }).then(() => {
  console.log(`\n✅ 103页 Expanded R4 PPT 生成完成`);
  console.log(`文件: ${outPath}`);
  const stat = fs.statSync(outPath);
  console.log(`大小: ${(stat.size/1024/1024).toFixed(1)}MB`);
}).catch(e => console.error(e));
