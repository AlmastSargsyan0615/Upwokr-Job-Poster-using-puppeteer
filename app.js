const puppeteer = require('puppeteer');
const fs = require('fs');
// Create an empty error.txt file
fs.writeFileSync('Looking Process.txt', '');


(async () => {
    try {
        const data = JSON.parse(fs.readFileSync('config.json', 'utf8'));

        const { email, password, jobTitle, jobDescription } = data;

        if (!email || !password || !jobTitle || !jobDescription) {
            fs.appendFileSync('Looking Process.txt', `Error: Email, password, job title, or job description is missing in the JSON file.\n`);
            return;
        }

        // Ensure job description is at least 100 characters long
        let updatedJobDescription = jobDescription;
        if (updatedJobDescription.length < 100) {
            const remainingCharacters = 100 - updatedJobDescription.length;
            const additionalSpaces = ' '.repeat(remainingCharacters);
            updatedJobDescription += additionalSpaces;
        }

        const browser = await puppeteer.launch({
            headless: false, // The browser is visible
            args:['--start-maximized'],
            ignoreHTTPSErrors: true
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 1920, height: 1080 });
        await page.goto('https://www.upwork.com/nx/job-post/', {waitUntil: 'networkidle2'});

        // Login with email and password
        try {
            const inputField_username = await page.$('input[id="login_username"][aria-label="Username or email"]');
            await inputField_username.type(email);
            await page.click('button[id="login_password_continue"][button-role="continue"]');
            await delay(2000);
            const inputField_password = await page.$('input[id="login_password"][aria-label="Password"]');
            await inputField_password.type(password);
            await delay(2000);
            await page.click('button[id="login_control_continue"][button-role="continue"]');
            fs.appendFileSync('Looking Process.txt', `1) Credential Success\n`);
            await page.waitForNavigation();
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `1) Credential was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }

        // Continue with job posting
        try {
            await page.click('input[type="radio"][value="2"][aria-labelledby="button-box-3"]');
            fs.appendFileSync('Looking Process.txt', `2) Project term Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `2) Project term was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }

        try {
            await page.click('button[data-cy="jp-cta-next"][data-ev-label="next_button"]');
            fs.appendFileSync('Looking Process.txt', `3) Next button Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `3) Next button was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }

        try {
            await page.type('textarea#job-post-title', jobTitle);
            fs.appendFileSync('Looking Process.txt', `4) Job title Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `4) Job title was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }

        try {
            await page.click('button[data-cy="jp-cta-next"][data-ev-label="next_button"]');
            fs.appendFileSync('Looking Process.txt', `5) Next button Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `5) Next button was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }

        try {
            await page.click('div[data-cy="skill"]:nth-child(1)');
            fs.appendFileSync('Looking Process.txt', `6) Skill1 Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `6) Skill1 was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }

        try {
            await page.click('div[data-cy="skill"]:nth-child(2)');
            fs.appendFileSync('Looking Process.txt', `7) Skill2 Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `7) Skill2 was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }

        try {
            await page.click('div[data-cy="skill"]:nth-child(3)');
            fs.appendFileSync('Looking Process.txt', `8) Skill3 Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `8) Skill3 was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }

        try {
            await page.click('button[data-cy="jp-cta-next"][data-ev-label="next_button"]');
            fs.appendFileSync('Looking Process.txt', `9) Next button Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `9) Next button was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }

        try {
            await page.click('input[type="radio"][name="duration-1"]:first-of-type');
            fs.appendFileSync('Looking Process.txt', `10) Duration Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `10) Duration was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }

        try {
            await page.click('input[type="radio"][name="expert-level-1"]');
            fs.appendFileSync('Looking Process.txt', `11) Difficulty Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `11) Difficulty was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }

        try {
            await page.click('input[type="radio"][name="contract-to-hire-field"]');
            fs.appendFileSync('Looking Process.txt', `12) Contract-to-hire-field Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `12) contract-to-hire-field was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }

        try {
            await page.click('button[data-cy="jp-cta-next"][data-ev-label="next_button"]');
            fs.appendFileSync('Looking Process.txt', `13) Next button Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `13) Next button was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }

        try {
            await page.click('div[data-v-35e03910=""] > div:nth-child(2) input[type="radio"]');
            fs.appendFileSync('Looking Process.txt', `14) Worldwide Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `14) Worldwide was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }

        try {
            await page.click('button[data-cy="jp-cta-next"][data-ev-label="next_button"]');
            fs.appendFileSync('Looking Process.txt', `15) Next button(Hourly Rate Page) Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `15) Next button(Hourly Rate Page) was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }

        try {
            await page.click('button[data-cy="jp-cta-next"][data-ev-label="next_button"]');
            fs.appendFileSync('Looking Process.txt', `16) Next button Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `16) Next button was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }

        // Type job description
        try {
            await page.type('#jp-description-1', updatedJobDescription);
            fs.appendFileSync('Looking Process.txt', `17) Job Description Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `17) Job Description was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }

        try {
            await page.click('button[data-cy="jp-cta-next"][data-ev-label="next_button"]');
            fs.appendFileSync('Looking Process.txt', `18) Next button Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `18) Next button was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }
        
        try {
        // await page.click('button[data-cy="jp-cta-save"][data-ev-label="save_button"]');
            fs.appendFileSync('Looking Process.txt', `19) Post button Success\n`);
            await delay(2000);
        } catch (error) {
            fs.appendFileSync('Looking Process.txt', `19) Post button was failed\n`);
            fs.appendFileSync('Looking Process.txt', `Error: ${error.stack}\n`);
            return
        }
        fs.appendFileSync('Looking Process.txt', `\n\n---------------->This job was posted successfully<----------------\n`);
        await delay(1000000);
        browser.close();
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log("JSON file 'config.json' not found.");
            fs.appendFileSync('Looking Process.txt', `JSON file 'config.json' not found.\n`);
        } else {
            console.error("Error reading or parsing the JSON file:", error);
            fs.appendFileSync('Looking Process.txt', `Error reading or parsing the JSON file: ${error.stack}\n`);
        }
    }
})();

function delay(time) {
        return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}
