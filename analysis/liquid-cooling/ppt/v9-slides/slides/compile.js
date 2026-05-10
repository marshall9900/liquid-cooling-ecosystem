const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = '海悟科技 × AI战略分析';
pres.title = '海悟科技 机柜级液冷战略 五看三定 v9';
pres.company = '海悟科技';

const t = require('./theme');
const slideCount = 51;
for (let i = 1; i <= slideCount; i++) {
  const num = String(i).padStart(2, '0');
  try {
    const slideModule = require(`./s${num}.js`);
    slideModule.createSlide(pres, t);
  } catch (e) {
    console.error(`❌ s${num}: ${e.message}`);
  }
}

const outDir = '/root/data/disk/liquid-cooling-ecosystem/analysis/liquid-cooling/ppt/v9-slides/output';
pres.writeFile({ fileName: `${outDir}/海悟液冷五看三定-v9.pptx` }).then(() => {
  console.log(`✅ v9生成完成: 51 slides`);
}).catch(e => {
  console.error(`❌ 失败: ${e.message}`);
});
