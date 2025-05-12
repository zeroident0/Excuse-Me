async function getExcuse() {
    try {
        let response = await fetch('https://excuser-three.vercel.app/v1/excuse');
        let data = await response.json();
        let excuse = data[0].excuse;
        document.getElementById('excuse').textContent = excuse;
        // Reset copy button state when new excuse is generated
        const copyBtn = document.getElementById('copyBtn');
        copyBtn.classList.remove('copied');
        copyBtn.title = 'Copy to clipboard';
    } catch (error) {
        document.getElementById('excuse').textContent = 'Failed to load excuse.';
    }
}

// Add copy to clipboard functionality
document.getElementById('copyBtn').addEventListener('click', async () => {
    const excuseText = document.getElementById('excuse').textContent;
    const copyBtn = document.getElementById('copyBtn');

    try {
        await navigator.clipboard.writeText(excuseText);
        copyBtn.classList.add('copied');
        copyBtn.title = 'Copied!';

        // Reset the button state after 2 seconds
        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.title = 'Copy to clipboard';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}); 