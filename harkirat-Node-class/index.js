const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
    .name("Word Counter")
    .version("1.0.0")
    .description("CLI to do file based on tasks");

program.command('count')
    .description("Count the number of words in a file")
    .argument("<file>", "This is the file to read")
    .action((file) => {
        fs.readFile(file,'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else{
                const words = data.split(' ').length;
                console.log(`There are ${words} words in ${file}`);
            }
        });
    });

    program.parse();
