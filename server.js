const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/calculate', (req, res) => {
    const { num1, num2, operator } = req.body;
    let result = 0;
    const n1 = parseFloat(num1); // Chuyển sang số thực để tránh lỗi chuỗi
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) return res.json({ result: '...' });

    switch (operator) {
        case '+': result = n1 + n2; break;
        case '-': result = n1 - n2; break;
        case 'x': result = n1 * n2; break;
        case '/': result = n2 !== 0 ? (n1 / n2).toFixed(2) : 'Error'; break;
    }
    
    // Log API call
    console.log(`${n1} ${operator} ${n2} = ${result}`);
    
    res.json({ result });
});

app.listen(3000, () => console.log('API Server running on port 3000'));