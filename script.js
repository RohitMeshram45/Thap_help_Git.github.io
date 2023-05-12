


let update = () => {
    let d = new Date();
    document.getElementById("p1").innerHTML = d.toLocaleString('en-US', {
        timeZone: "Asia/Shanghai"
    })
    console.log(alarm.value);
}

setInterval(update, 1000);