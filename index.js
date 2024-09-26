const http = require('node:http');
const rupiah = require('rupiah-format')
const fs = require('fs')
const host = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(request, response) {
    const nama = "Sofyan";
    let uang = 150000000;
    let jajan = 75200000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)

    fs.appendFile('uangsisa.txt', sisa, () => {
        console.log('data uang sisa berhasil disimpan...')
    })

    const hasil = `
    <html>
    <head>
    <title> ${nama} </title>
    </head>
    <body>
    <h1 style='text-align: center;background: black;color: white;padding: 20px;'>UANG JAJAN BY NODEJS</h1>
    <p>halo nama saya ${nama}. uang saya sebanyak ${uang}, dan saya jajan sebanyak ${jajan}, maka sisa uang saya adalah ${sisa}</p>
    </body>
    </html>`
    response.statusCode = 200;
    response.end(hasil)
});

server.listen(port, host, '', function() {
console.log(`sever menyala di ${host}:${port}`)
});