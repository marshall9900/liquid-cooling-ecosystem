const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = '海悟科技';
pres.title = '海悟科技 机柜级液冷战略 五看三定 v9(R4)';

for (let i = 1; i <= 51; i++) {
  const num = String(i).padStart(2, '0');
  try {
    require(`./s${num}.js`).createSlide(pres);
    process.stdout.write(`P${i} `);
  } catch (e) {
    console.error(`❌ s${num}: ${e.message}`);
  }
}

const out = '/root/data/disk/liquid-cooling-ecosystem/analysis/liquid-cooling/ppt/v9-r4/output';
pres.writeFile({ fileName: `${out}/海悟液冷五看三定-v9-R4.pptx` }).then(() => {
  console.log('\n✅ 51页 R4设计 PPT 生成完成');
}).catch(e => console.error(e));
