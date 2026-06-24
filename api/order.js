// api/order.js
// Função serverless (Vercel) que recebe o pedido do formulário e repassa para a DrCash.
// O token Bearer fica AQUI, no servidor, como variável de ambiente — nunca no HTML/JS do cliente.
//
// Configuração necessária no Vercel:
// 1. Settings > Environment Variables > adicionar DRCASH_TOKEN com o valor do seu Bearer token.
// 2. Fazer redeploy do projeto após adicionar a variável.

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const TOKEN = process.env.DRCASH_TOKEN;
  const API_URL = 'https://order.drcash.sh/v1/order';

  if (!TOKEN) {
    console.error('DRCASH_TOKEN não está configurado nas variáveis de ambiente.');
    return res.status(500).json({ error: 'Server misconfiguration' });
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.text();

    if (!response.ok) {
      console.error('Erro DrCash:', response.status, data);
      return res.status(response.status).json({ error: 'Order rejected by provider' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Erro ao repassar pedido para DrCash:', err);
    return res.status(502).json({ error: 'Upstream error' });
  }
};
