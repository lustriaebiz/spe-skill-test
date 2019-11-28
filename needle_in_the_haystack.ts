

function findNeedle(param1:any, param2:string) {

    let index = 0;
    param1.forEach((i:any) => {
        if(param2 == i)
            console.log(index);

        index +=1;
    })
}

findNeedle(["red", "blue", "yellow", "black"], "yellow")
findNeedle(["red", "blue", "yellow", "black"], "blue")
