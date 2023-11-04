
function sub(){
    console.log("test")
    let no=document.querySelector("#no").value;
    if(2105001<=no&&2105007>=no || 2105009<=no && 2105036>=no ||  2105038<=no && 2105061>=no ){
        let n = no-2105000;
        console.log(n)
        window.location.replace(`https://www.gackarurcoe.com/hallticketpdf.php?sid=${9945+n}`);
    }
    else
        alert("Please enter a valid Roll no")
        document.querySelector("#no").value=null;
}