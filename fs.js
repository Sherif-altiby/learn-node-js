const fs = require('node:fs');

//  Read File
const fileContent  = fs.readFileSync('./hellow.txt', 'utf8')
console.log("fileContent: ", fileContent)


fs.readFile('./users.json', 'utf8', (err, data) => {
    if(err){
        console.log("Error Of Reading File: ", err)
    } else {
        console.log("File Data: ", data)
    }
})



//  Write File
const data =[
    {
        id: 1,
        name: "Sherif"
    }
]

fs.writeFile('./users.json', JSON.stringify(data), 'utf8', (err) => {
    if(err){
        console.log('Error From File: ', err)
    } else {
        console.log("File Added Done")
    }
})


// Delete File 
fs.unlink('./users.json', (err) => {
    if(err){
        console.log("There is an error")
    } else {
        console.log("File removd successfully!")
    }
})

// Streams => [readable  -  writeable]

const rStream = fs.createReadStream('./hellow.txt', 'utf8');
const wStream = fs.createWriteStream('./stream.txt', 'utf8')

rStream.on('data', (chunk) => {
    console.log("======Chunk======", chunk)
    wStream.write("\n ++++====== CHUNK ++++====== \n");
    wStream.write(chunk)
})