import express from 'express';


const router = express.Router();

router.get('/', (request, response) =>{
    try {
        response.status(200).json({
            message: 'Bem vindo à aplicação'
        });
    } catch {
        response.status(500).json({
            message: 'Erro ao entrar na pagina.'
        });
    }
})

export default router