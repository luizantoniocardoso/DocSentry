import { NextResponse } from "next/server";




export async function POST(req: Request) {
    const { nome, responsavel } = await req.json() as DocType;

    const res = await fetch('http://localhost:3000/documents', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            nome,
            status: 'Pendente',
            responsavel,
            dataCriacao: new Date().toLocaleDateString(),
            dataRevisao: new Date().toLocaleDateString(),
        }),
    })

    return NextResponse.json({res})
}

export async function GET() {
    const res = await fetch(`http://localhost:3000/documents`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json()
    return NextResponse.json(await data)
}

export async function PUT(req: Request) {
    const {id, nome, status, dataCriacao, dataRevisao, responsavel } = await req.json() as DocType;
    console.log(id, nome, status)
    const res = await fetch(`http://localhost:3000/documents/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            nome,
            status,
            responsavel,
            dataCriacao,
            dataRevisao,
            
        }),
    })

    return NextResponse.json({res})
}