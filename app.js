const Color_Generate = () => {
    const Random_Number = Math.floor(Math.random()* 16777215)

    const Random_Code = "#" + Random_Number.toString(16);
    document.body.style.backgroundColor = Random_Code;
    document.getElementById("clr-text").innerText = Random_Code ;
    console.log(Random_Number , Random_Code);

}

document.getElementById("btn").addEventListener(
    "click"
    ,
    Color_Generate
)

Color_Generate();