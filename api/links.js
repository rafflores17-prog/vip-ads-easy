// api/links.js
let links = {}; // memória temporária do serverless

export default function handler(req, res) {
    if(req.method === 'POST') {
        const { id, url } = req.body;
        if(!id || !url) return res.status(400).json({ error: 'ID e URL obrigatórios' });
        links[id] = url;
        return res.status(200).json({ success: true });
    } else if(req.method === 'GET') {
        const { id } = req.query;
        if(!id) return res.status(400).json({ error: 'ID obrigatório' });
        const url = links[id];
        if(url) return res.status(200).json({ url });
        return res.status(404).json({ error: 'Link não encontrado' });
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}
