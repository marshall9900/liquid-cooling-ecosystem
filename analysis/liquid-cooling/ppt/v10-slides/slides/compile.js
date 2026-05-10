const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = '海悟科技 × AI战略分析';
pres.title = '海悟科技 机柜级液冷战略 五看三定 v10';
pres.company = '海悟科技';

const theme = require('./theme');

const slideCount = 34;
for (let i = 1; i <= slideCount; i++) {
  const num = String(i).padStart(2, '0');
  try {
    const slideModule = require(`./slide-${num}.js`);
    slideModule.createSlide(pres, theme);
    console.log(`  ✅ slide-${num}`);
  } catch (e) {
    console.error(`  ❌ slide-${num}: ${e.message}`);
  }
}

const outDir = '/root/data/disk/liquid-cooling-ecosystem/analysis/liquid-cooling/ppt/v10-slides/output';
pres.writeFile({ fileName: `${outDir}/海悟液冷五看三定-v10.pptx` }).then(() => {
  console.log(`\n✅ PPT生成完成: 海悟液冷五看三定-v10.pptx (${slideCount} slides)`);
}).catch(e => {
  console.error(`\n❌ PPT生成失败: ${e.message}`);
});
