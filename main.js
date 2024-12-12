document.addEventListener('DOMContentLoaded', () => {
    const formPreview = document.getElementById('formPreview');
    const codeOutput = document.getElementById('codeOutput');
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');

    const formStyles = {
        modern: {
            form: 'style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px; margin: 0 auto;"',
            input: 'style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem;"',
            textarea: 'style="width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; min-height: 150px;"',
            button: 'style="background: #646cff; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 4px; cursor: pointer; font-size: 1rem;"'
        },
        minimal: {
            form: 'style="display: flex; flex-direction: column; gap: 0.8rem; max-width: 500px;"',
            input: 'style="width: 100%; padding: 0.5rem; border: none; border-bottom: 1px solid #999; font-size: 1rem;"',
            textarea: 'style="width: 100%; padding: 0.5rem; border: none; border-bottom: 1px solid #999; font-size: 1rem; min-height: 100px;"',
            button: 'style="background: none; border: 1px solid #333; padding: 0.5rem 1rem; cursor: pointer; font-size: 1rem;"'
        },
        classic: {
            form: 'style="max-width: 500px;"',
            input: 'style="width: 100%; padding: 0.5rem; border: 2px solid #ddd; margin-bottom: 1rem; font-size: 1rem;"',
            textarea: 'style="width: 100%; padding: 0.5rem; border: 2px solid #ddd; margin-bottom: 1rem; font-size: 1rem; min-height: 120px;"',
            button: 'style="background: #333; color: white; border: none; padding: 0.6rem 1.2rem; cursor: pointer; font-size: 1rem;"'
        }
    };

    function generateForm() {
        const nameField = document.getElementById('nameField').checked;
        const emailField = document.getElementById('emailField').checked;
        const phoneField = document.getElementById('phoneField').checked;
        const subjectField = document.getElementById('subjectField').checked;
        const messageField = document.getElementById('messageField').checked;
        const style = document.getElementById('formStyle').value;

        const formStyle = formStyles[style];
        
        let formHtml = `<form ${formStyle.form}>\n`;
        
        if (nameField) {
            formHtml += `    <input type="text" name="name" placeholder="Your Name" required ${formStyle.input}>\n`;
        }
        if (emailField) {
            formHtml += `    <input type="email" name="email" placeholder="Your Email" required ${formStyle.input}>\n`;
        }
        if (phoneField) {
            formHtml += `    <input type="tel" name="phone" placeholder="Your Phone" ${formStyle.input}>\n`;
        }
        if (subjectField) {
            formHtml += `    <input type="text" name="subject" placeholder="Subject" ${formStyle.input}>\n`;
        }
        if (messageField) {
            formHtml += `    <textarea name="message" placeholder="Your Message" required ${formStyle.textarea}></textarea>\n`;
        }
        
        formHtml += `    <button type="submit" ${formStyle.button}>Send Message</button>\n`;
        formHtml += '</form>';
        
        formPreview.innerHTML = formHtml;
        codeOutput.textContent = formHtml;
    }

    generateBtn.addEventListener('click', generateForm);
    
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(codeOutput.textContent)
            .then(() => {
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy Code';
                }, 2000);
            });
    });

    // Generate initial form
    generateForm();
});