let links = {}; // memória temporária

export default function handler(req, res){
    if(req.method === 'POST'){
        const { id, url } = req.body;
        links[id] = url;
        res.status(200).json({ success: true });
    } else if(req.method === 'GET'){
        const { id } = req.query;
        if(links[id]){
            res.status(200).json({ url: links[id] });
        } else {
            res.status(404).json({ error: 'Link não encontrado' });
        }
    } else {
        res.status(405).end();
    }
}
