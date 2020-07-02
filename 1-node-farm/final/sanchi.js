const fs = require ('fs');
const http = require('http');
const url = require('url');

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// const opt = `This is what we know about avocado : ${textIn} \n ${Date.now()}`;
// fs.writeFileSync('./txt/otp.txt', opt);
// console.log(opt);

// Non-Synchronus

// fs.readFile('./txt/start.txt', 'utf-8',
//  (err, data) => {
//     fs.readFile(`./txt/${data}.txt`, 'utf-8',
//     (err, data2) => { console.log(data2);
//         fs.readFile('./txt/append.txt', 'utf-8',
//         (err, data3) => { console.log(data3);
//             fs.writeFile('./txt/newFile.txt', `${data2}\n${data3}`, 'utf-8',err => {console.log("File Written!");} );
        
//         }
//        );
//     }
//    ); 
// }
// );

// console.log('Reading File');


//Server
const server = http.createServer(
    (req, res) => { 
        const pathName = req.url;

        if (pathName === '/' || pathName === '/overview')
        res.end('This is over view');
        else if (pathName === '/product')
        res.end('This is product');
        else {
            res.writeHead(404, {
                'Content-Type' : 'text/html'
            });

            res.end('<h1> Page not found </h1>');
        }


    }
);


server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
  });