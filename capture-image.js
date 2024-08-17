const puppeteer = require("puppeteer")
async function main() {
    async function capture(fileName) {
        const browser = await puppeteer.launch(); 
        const page = await browser.newPage(); 
        await page.goto(`file://${__dirname}/${fileName}.html`); 
        await page.screenshot({ path: `${fileName}.png` }); 
        await browser.close(); 
    }

    await capture("abuelos");
    await capture("ninos");
}
main().catch(err=>console.log(err))
