const got = require('got');
const prompt = ` \n\nI’m Julia and I’m javascript developer. Write for my profile description.\n`;

const OPENAI_SECRET_KEY='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';


(async () => {
    const url = 'https://api.openai.com/v1/engines/davinci/completions';
    const params = {
        "prompt": prompt,
        "max_tokens": 100,
        "temperature": 0.7,
        "frequency_penalty": 0.5
    };
    const headers = {
        'Authorization': `Bearer ${OPENAI_SECRET_KEY}`,
    };

    try {
        const response = await got.post(url, { json: params, headers: headers }).json();
        output = `${response.choices[0].text}`;
        console.log(output);
    } catch (err) {
        console.log(err);
    }
})();