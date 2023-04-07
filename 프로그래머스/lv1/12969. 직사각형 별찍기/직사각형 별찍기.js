process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let star = "*";
    for (let m = 0; m < b; m++) {
        console.log(String(star.repeat(a)))
    }
    // console.log(a);
    // console.log(b);
});