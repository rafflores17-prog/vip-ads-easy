let links = {}; // memória temporária serverless

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if(req.method === 'OPTIONS') return res.status(200).end();

    if(req.method === 'POST'){
        const { id, url } = req.body;
        if(!id || !url) return res.status(400).json({ error: 'ID e URL obrigatórios' });
        links[id] = url;
        return res.status(200).json({ success: true, id });
    }

    if(req.method === 'GET'){
        const { id } = req.query;
        if(!id) return res.status(400).json({ error: 'ID obrigatório' });
        const url = links[id];
        if(url) return res.status(200).json({ url });
        return res.status(404).json({ error: 'Link não encontrado' });
    }

    res.status(405).json({ error: 'Método não permitido' });
}
